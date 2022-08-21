import { boot } from 'quasar/wrappers'
import { useGlobalStore } from 'stores/global'

const globalStore = useGlobalStore()

const GLOBAL_COMPONENTS = {
  'page' : require('components/Page/Page').default,
  'page-header' : require('components/Page/Header').default,
  'page-body' : require('components/Page/Body').default,
  'btn' : require('components/Elements/Button').default,
  'unconfirmed-tx-icon' : require('components/Elements/UnconfirmedTxIcon').default,
  'pin-code' : require('components/Auth/PinCode').default,
}

export default boot(({ app }) => {
  for (const key in GLOBAL_COMPONENTS){
    app.component(key,GLOBAL_COMPONENTS[key])
    app.config.globalProperties.$globalStore = globalStore
  }
})


