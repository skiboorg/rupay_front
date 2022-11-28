import { boot } from 'quasar/wrappers'
import { useAccountStore } from 'stores/account'
const accountStore = useAccountStore()
import { useEraStore } from 'stores/eraChain'
const sraStore = useEraStore()
import { useGlobalStore } from 'stores/global'
const globalStore = useGlobalStore()
import {useRoute} from "vue-router"
import { useP2PStore } from 'stores/p2p'
const p2pStore = useP2PStore()


export default boot(async ({ app,store,router }) => {


  console.log(window.location.href.includes('wallet'))

  const addresses = localStorage.getItem('addresses')
  const hash = localStorage.getItem('hash')
  if (window.location.href.includes('wallet')){
    if (!sraStore.seed){
      await router.push('/wallet')
    }
    if (!hash){
      await accountStore.wipeInfo()
      await router.push('/wallet')
    }
  }




  if(addresses){
    await accountStore.setAddresses()
    await sraStore.getAssets()
    await p2pStore.get_payment_methods()
    sraStore.startCheckUnconfirmTx()
  }

  app.config.globalProperties.$global = globalStore
  app.config.globalProperties.$filters = {
    convertAmount(amount) {
      return amount.toLocaleString('ru-RU',{minimumFractionDigits: 2,maximumFractionDigits: 2})
    }

  }


})

