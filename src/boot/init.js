import { boot } from 'quasar/wrappers'
import { useAccountStore } from 'stores/account'
const accountStore = useAccountStore()
import { useEraStore } from 'stores/eraChain'
const sraStore = useEraStore()
import { useGlobalStore } from 'stores/global'
const globalStore = useGlobalStore()



export default boot(async ({ app,store,router }) => {

  const addresses = localStorage.getItem('addresses')
  const hash = localStorage.getItem('hash')
  if (!sraStore.seed){
    await router.push('/')
  }
  if (!hash){
    await accountStore.wipeInfo()
    await router.push('/')
  }

  if(addresses){
    await accountStore.setAddresses()
    await sraStore.getAssets()
    sraStore.startCheckUnconfirmTx()
  }

  app.config.globalProperties.$global = globalStore
  app.config.globalProperties.$filters = {
    convertAmount(amount) {
      return amount.toLocaleString('ru-RU',{minimumFractionDigits: 2,maximumFractionDigits: 2})
    }

  }


})

