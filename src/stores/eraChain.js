import { defineStore } from 'pinia';
import {EraChain} from 'erachain-js-api'
import {ref} from "vue";
import {getUnconfirmedTxByAddress, getTradePairs,getOrderBySeqNo} from "src/helpers/erachainHelpers"
import {useNotify} from "src/helpers/utils";
import { useAccountStore } from 'stores/account'

import {api} from "boot/axios";
import axios from "axios";


export const useEraStore = defineStore('era_store', () => {
    const asset_keys =[1,2,12,14,1643]

  const exchange = ref([
    {
      from: 1643,//rub
      to : 2,//olf
      comission : 0.05
    },
    {
      from: 2,//olf
      to : 1,//rupay
      comission : 0
    },
    {
      from: 1,//rupay
      to : 2,//olf
      comission : 0.15
    },
  ])

  const marketExchange = [
    {
      have: 2,//olf
      want : 1,//rupay
      price: 0,
      reversePrice: 0,
      seqNo : '46649-1'
    },
    {
      have: 1,//rupay
      want : 2,//olf
      price: 0,
      reversePrice: 0,
      seqNo : '46648-1'
    },
  ]


  const assets = ref([])
    let trade_pairs = ref([])
    let trade_pairs_v24 = ref([])
    let all_assets = ref([])
    const accountStore = useAccountStore()

    let haveUnconfirmedTx = ref(false)
    let seed = ref(null)
    let session_id = ref(null)
    let address = ref(null)
    let unconfirmedTxInterval = ref(null)
    let addressIdx = ref(0)
    let unconfirmedTx = ref([])
    let unconfirmedTxSeqNumbers = ref([])

    async function setSeed(s){
        seed.value=s
          //localStorage.setItem('seed', s)
    }
    async function setSessionID(s){
        session_id.value=s
          //localStorage.setItem('seed', s)
    }

    function stopCheckUnconfirmTx(){
      clearInterval(unconfirmedTxInterval.value)
    }

    async function getAssets(){
      const response = await api.get('/api/settings/assets')
      //console.log(response.data)
      assets.value = response.data
    }

    async function getAssetsCourse(){
      //console.log('get all_assets')
      const courses = await api.get('/api/settings/get_courses')

      const courses_ids = Object.keys(courses.data)
      //console.log(courses_ids)
      for (let i of assets){
        if (courses_ids.includes(String(i.key))){
          i.course = courses.data[i.key]
        }
      }
      //console.log(assets)
    }

    async function getMarketExchangeOrders(){

      for (let i in marketExchange){
        const tx = await getOrderBySeqNo(marketExchange[i].seqNo)
          marketExchange[i].price = tx.priceReverse
          marketExchange[i].reversePrice = tx.price
      }
      //console.log(marketExchange)
    }


    function startCheckUnconfirmTx(){

      unconfirmedTxInterval.value = setInterval( async function(){
       const response =  await getUnconfirmedTxByAddress(accountStore.addresses[accountStore.currentAddressIdx].address)
        unconfirmedTx.value = response.data
        if (unconfirmedTx.value.length>0){
          //console.log('set haveUnconfirmedTx true')
          haveUnconfirmedTx.value = true
        }

        for (let i of unconfirmedTx.value){
          if (!unconfirmedTxSeqNumbers.value.includes(i.timestamp)){
            unconfirmedTxSeqNumbers.value.push(i.timestamp)
            useNotify('positive','Транзакция обрабатывается')

          }
        }

        if (haveUnconfirmedTx.value){
          if (unconfirmedTx.value.length===0){
            haveUnconfirmedTx.value = false
            unconfirmedTxSeqNumbers.value = []
            await  accountStore.getBalances()
            useNotify('positive','Транзакции обработаны')
          }
        }
      }, 15000);

    }

    function setAddress(idx) {
      try {
        addressIdx.value = idx
        const addresses = JSON.parse(localStorage.getItem('addresses'))
        address.value = addresses[idx]?.address ? addresses[idx].address : null
      } catch (e) {
        addressIdx.value = 0
        address.value = null
      }
    }

    async function setTradePairs() {
      const res =  await getTradePairs()
      delete res['VIP REWARD_RUB']

      trade_pairs.value = res
      // const response_v24 = await axios.get(`${process.env.API_URL}/apiexchange/spot/pairs`)
      // trade_pairs_v24.value = response_v24.data
      //console.log(trade_pairs.value)
      //console.log(trade_pairs_v24.value)
    }

    async function getKeyPair(number = addressIdx.value) {
      const accSeed = await EraChain.Crypt.generateAccountSeed(seed.value, number)
      return EraChain.Crypt.getKeyPairFromSeed(accSeed)
    }

    async function getKeyPairForAddBalance(number = addressIdx.value) {
      const accSeed = await EraChain.Crypt.generateAccountSeed(session_id.value, number)
      return EraChain.Crypt.getKeyPairFromSeed(accSeed)
    }





    return{
      getKeyPair,
      setSeed,
      startCheckUnconfirmTx,
      getAssetsCourse,
      setTradePairs,
      getMarketExchangeOrders,
      stopCheckUnconfirmTx,
      getAssets,
      getKeyPairForAddBalance,
      setSessionID,
      seed,
      session_id,
      address,
      addressIdx,
      unconfirmedTx,
      assets,
      exchange,
      trade_pairs,
      marketExchange,
      trade_pairs_v24
    }
  }
  )
