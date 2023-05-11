import { defineStore } from 'pinia';
import {ref} from "vue";
import { useEraStore } from 'stores/eraChain'
import {getAssetsByAddress, getAssetById} from "src/helpers/erachainHelpers"
import {EraChain} from 'erachain-js-api'
import {era} from "boot/erachain"
import {api} from "boot/axios";


export const useAccountStore = defineStore('account', () => {

    const sraStore = useEraStore()

    let addresses =  ref([])
    let balances =  ref([])
    let currentAddressIdx =  ref(0)
    let verifyPersonData =  ref(null)
    let assets = ref([])


    function currentPublicKey() {
      return addresses.value[currentAddressIdx.value ?? 0].publicKey ?? null
    }

    function setCurrentAddress (idx) {
      currentAddressIdx.value = idx
      localStorage.setItem('currentAddressIdx', idx)
    }

    function clearInfo () {
      localStorage.removeItem('addresses')
      // addresses.value=[]
      // balances.value=[]
      // currentAddressIdx.value=0
      // verifyPersonData.value=null
      // assets.value=[]
    }
  function wipeInfo () {
    localStorage.removeItem('addresses')
    addresses.value=[]
    balances.value=[]
    currentAddressIdx.value=0
    verifyPersonData.value=null
    assets.value=[]
  }

    async function checkIfPerson (address) {
      const personByAddress= await era.getPersonByAddress(address)
      if (!personByAddress.error){
        verifyPersonData.value = personByAddress
        //console.log('verify',verifyPersonData.value)
      }else {
        verifyPersonData.value = null
        //console.log('not verify',verifyPersonData.value)
      }
      return Promise.resolve('Success')
    }

    async function addAddress () {
      const keyPair = await sraStore.getKeyPair(addresses.value.length)
      const publicKey = await EraChain.Base58.encode(keyPair.publicKey)
      const address= await EraChain.Crypt.addressByPublicKey(keyPair.publicKey)
      addresses.value.push({address, publicKey, name: null})
      localStorage.setItem('addresses', JSON.stringify(addresses.value))
      await checkIfPerson(address)
      return Promise.resolve('Success')
    }

    async function getBalances(){
      const response =  await getAssetsByAddress(addresses.value[currentAddressIdx.value ?? 0].address ?? null)
      balances.value = response.data


      const asset_ids = Object.keys(balances.value)
      const all_assets = await api.get('/api/settings/assets')
      const all_assets_data = all_assets.data

      for (let id of asset_ids){
        let resp = await getAssetById(id)
        if (!resp.data.error){
          //console.log(resp.data)
          if (resp.data.type_name === 'Digital asset' ){
            if (assets.value.filter(x=>x.key===resp.data.key).length===0){
              if(all_assets_data.filter(x=>x.key===parseInt(id)).length>0){
                //console.log('add course to ',all_assets_data.find(x=>x.key===parseInt(id)).course)
                resp.data.course=all_assets_data.find(x=>x.key===parseInt(id)).course
                resp.data.course_api=all_assets_data.find(x=>x.key===parseInt(id)).course_api
                resp.data.p2p_min_sell_price=all_assets_data.find(x=>x.key===parseInt(id)).p2p_min_sell_price
                assets.value.push(resp.data )
              }else {
                console.log('add course error. Asset key:', id)
              }
            }
          }else {
            console.log('skip nft')
          }
        }else {
          console.log('getAsset error. Asset key:', id)
        }
      }
      return Promise.resolve('Success')
    }

    async function firstAddress () {
      addresses.value = []
      if (!addresses.value.length) {
        await addAddress()
        setCurrentAddress(0)
      }
      return Promise.resolve('Success')
    }

    async function setAddresses () {

      const localStorage_addresses = localStorage.getItem('addresses')
      addresses.value = JSON.parse(localStorage_addresses)
      //console.log(addresses.value[0].address)
      await checkIfPerson(addresses.value[0].address)
      await getBalances()
      return Promise.resolve('Success')

    }



    return{
      addresses,
      balances,
      currentAddressIdx,
      verifyPersonData,
      currentPublicKey,
      assets,
      firstAddress,
      getBalances,
      setAddresses,
      clearInfo,
      wipeInfo

    }
  }


)
