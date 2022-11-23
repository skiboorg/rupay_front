import { defineStore } from 'pinia';
import {ref} from "vue";
import {api} from "boot/axios";

export const useGlobalStore = defineStore('global', () => {
    let is_loading = ref(false)
    let transactionInfoModalVisible = ref(false)
    let sendAssetModalVisible = ref(false)
    let tradeModalVisible = ref(false)
    let pinCodeModalVisible = ref(false)
    let isPageHidden = ref(false)
    let needUpdate = ref(false)
    let isPinOk = ref(false)
    let isBlur = ref(false)

    let checkInterval = ref(null)

  function toggleLoadingState(){
      is_loading.value = !is_loading.value
  }
  function toggleIsBlur(){
    isBlur.value = !isBlur.value
  }
  function toggleTransactionInfoModalVisible(){
    transactionInfoModalVisible.value = !transactionInfoModalVisible.value
  }
  function setPinOk(val){
    isPinOk.value = val
  }
  function togglePinCodeModalVisible(){
    pinCodeModalVisible.value = !pinCodeModalVisible.value
  }
  function toggleSendAssetModalVisible(){
    sendAssetModalVisible.value = !sendAssetModalVisible.value
  }
  function toggleIsPageHidden(){
    isPageHidden.value = !isPageHidden.value
  }
  function toggleTradeModalVisible(){
    tradeModalVisible.value = !tradeModalVisible.value
  }
  async function getVersion(){
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
      checkInterval.value = setInterval(  function() {
        registrations[0].update()
      },15000)
    })
    // checkInterval.value = setInterval( async function() {
    //   const app_version = await api.post('/api/settings/web_app_version', {version: process.env.APP_VERSION})
    //   needUpdate.value = app_version.data.success
    //   if (needUpdate.value){
    //     window.location.reload()
    //   }
    // },10000)
  }

    return{
      is_loading,
      transactionInfoModalVisible,
      sendAssetModalVisible,
      isPageHidden,
      needUpdate,
      tradeModalVisible,
      pinCodeModalVisible,
      isPinOk,
      isBlur,
      toggleLoadingState,
      toggleTransactionInfoModalVisible,
      toggleSendAssetModalVisible,
      toggleTradeModalVisible,
      togglePinCodeModalVisible,
      setPinOk,
      getVersion,
      toggleIsBlur


    }
  }


)
