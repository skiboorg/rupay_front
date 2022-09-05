<template>
  <q-dialog
    v-model="globalStore.sendAssetModalVisible"
    persistent

    :class="{hidden:globalStore.isPageHidden}"

    @before-hide="updateTransactions"
  >
    <q-card style="width: 900px; max-width: 100vw;">
      <q-header style="position: unset"   class="text-white q-py-sm items-center flex justify-between">
        <q-btn no-caps :label="`Отправка актива ${asset.name}`" v-close-popup icon="las la-angle-left" unelevated/>
        <unconfirmed-tx-icon/>
      </q-header>
      <div class="" style="height: 50px"></div>
      <q-card-section class="q-pt-none">
        <q-list >
          <q-item class="no-padding">
            <q-item-section side class="text-weight-bold text-dark">Ваш баланс</q-item-section>
            <q-item-section>{{balances[asset.key][0][1]}} {{asset.name}}</q-item-section>
          </q-item>

          <p class="text-bold q-mb-none">Основная информация</p>
          <q-item class="no-padding">
            <q-item-section  class="text-weight-medium text-dark">Кол-во отправляемого актива*</q-item-section>
          </q-item>
          <q-item class="no-padding">
            <q-item-section>
              <q-input rounded  dense outlined type="number" v-model="sendInfo.amount"/>
            </q-item-section>
          </q-item>

          <q-item class="no-padding">

            <q-item-section  class="text-weight-medium text-dark">Адрес получателя*</q-item-section>

          </q-item>
          <div v-show="is_scanStart" id="video-container">
            <video id="qr-video"></video>
          </div>
          <q-item class="no-padding">
            <q-item-section>
              <q-input rounded dense outlined v-model="sendInfo.address"/>
            </q-item-section>
          </q-item>
          <q-separator class="q-my-md"/>
          <p class="text-bold q-mb-none">Сообщение к отправке</p>
<!--          <q-checkbox  dense v-if="person" v-model="sendInfo.encrypted" label="Зашифровать сообщение"/>-->
          <q-item class="no-padding">
            <q-item-section  class="text-weight-medium text-dark">Заголовок сообщения</q-item-section>
          </q-item>
          <q-item class="no-padding">
            <q-item-section>
              <q-input rounded dense outlined v-model="sendInfo.title"/>
            </q-item-section>
          </q-item>
          <q-item class="no-padding">
            <q-item-section  class="text-weight-medium text-dark">Сообщение</q-item-section>
          </q-item>
          <q-item class="no-padding">
            <q-item-section>
              <q-input rounded type="textarea" dense outlined v-model="sendInfo.message"/>
            </q-item-section>
          </q-item>
          <q-separator class="q-my-md"/>
          <btn label="Отправить" @click="checkPin" :disabled="!sendInfo.amount || !sendInfo.address" :outline="false"/>
<!--          <btn label="Отправить" @click="confirmModalVisible=true" :disabled="!sendInfo.amount || !sendInfo.address" :outline="false"/>-->

        </q-list>
      </q-card-section>
    </q-card>
  </q-dialog>
  <q-dialog v-model="confirmModalVisible" persistent transition-show="scale" transition-hide="scale" @before-hide="resetData">
    <q-card class="bg-white text-dark" style="width: 100%">
      <q-card-section class="text-weight-bold ">
        Подтверждение отправки актива
      </q-card-section>

      <q-card-section class="q-py-none">
        <q-list dense separator class="q-mb-md">
          <q-item class="no-padding">
            <q-item-section side class="text-weight-medium text-dark">Актив</q-item-section>
            <q-item-section>{{asset.name}}</q-item-section>
          </q-item>
          <q-item class="no-padding">
            <q-item-section side class="text-weight-medium text-dark">Количество</q-item-section>
            <q-item-section>{{sendInfo.amount}} {{asset.name}}</q-item-section>
          </q-item>
          <q-item class="no-padding">
            <q-item-section side class="text-weight-medium text-dark">Получатель</q-item-section>
            <q-item-section class="text-caption"> <span style="word-break: break-all">{{sendInfo.address}}</span></q-item-section>
          </q-item>
          <q-item class="no-padding">
            <q-item-section side class="text-weight-medium text-dark">Комиссия транзакции</q-item-section>
            <q-item-section class="text-caption">
              <span v-if="asset.maker_name === 'РОЛФ Тех.Аккаунт ruPay'">{{parseFloat(sendInfo.amount * 0.01).toFixed(5)}}</span>
              <span v-if="sendInfo.fee>0">+ газ {{sendInfo.fee}} {{asset.key < 4000 ? asset.name : 'OLF'}}</span></q-item-section>
          </q-item>
        </q-list>
        <p class="text-caption text-white q-pa-md bg-negative">Внимание, если адрес получателя указан неверно, Вы не сможете вернуть средства назад</p>
      </q-card-section>

      <q-card-actions  class="bg-white text-teal">

        <q-btn label="Расчет комиссии" rounded v-if="sendInfo.fee===0" :loading="is_loading" class="q-mb-sm full-width" unelevated no-caps color="info" @click="getFee" :outline="false"/>
        <q-btn label="Подтвердить" rounded v-else :loading="is_loading" class="q-mb-sm full-width" unelevated no-caps color="positive" @click="signTransaction" :outline="false"/>
        <q-btn label="Отменить" rounded no-caps color="negative" class="full-width" unelevated outline :loading="is_loading" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <CheckPin @pincode_ок="confirmModalVisible=true"></CheckPin>
</template>

<script setup>
import CheckPin from "components/Modal/PinCodeModal";
import { useGlobalStore } from 'stores/global'
import {setAsset} from "src/helpers/erachainHelpers"
import {useNotify} from "src/helpers/utils";


const globalStore = useGlobalStore()
import {useRouter} from "vue-router"
const router = useRouter()

const { EraChain } = require('erachain-js-api')
import {computed, ref,onBeforeUnmount} from "vue";

import { useAccountStore } from 'stores/account'
const accountStore = useAccountStore()
import { useEraStore } from 'stores/eraChain'
const eraStore = useEraStore()
import { era } from 'boot/erachain'




let confirmModalVisible = ref(false)
const is_loading = ref(false)
const is_scanStart = ref(false)
let scanner = null

const balances = computed(()=>{
  return accountStore.balances
})


const person = computed(()=>{
  return accountStore.verifyPersonData
})




function checkPin(){
  globalStore.togglePinCodeModalVisible()
}


const props = defineProps({
  asset: Object
})

const emit = defineEmits(['close'])

const sendInfo = ref({
   amount : '',
   // address :'73SB6ZgqkhX98WnqZRRNxhd9XGtmas2Btb',
   address :'',
   title :'',
   message :'',
   encrypted : false,
  fee:0,
  raw:0,
})

function resetData(){
  sendInfo.value = {
    amount : '',
    // address :'73SB6ZgqkhX98WnqZRRNxhd9XGtmas2Btb',
    address :'',
    title :'',
    message :'',
    encrypted : true,
    fee:0,
    raw:0,
  }
}

async function getFee(){
  is_loading.value = !is_loading.value
  const isBase64 = true
  const keys = await eraStore.getKeyPair()
  const keyPair = new EraChain.Type.KeyPair(keys)
  const assetInfo = {
    assetKey: props.asset.key,
    amount: sendInfo.value.amount,
  }
  console.log(keyPair)
  console.log(assetInfo)
  const result = await era.tranRawSendAsset(
    keyPair,
    assetInfo,
    sendInfo.value.address,
    sendInfo.value.title,
    sendInfo.value.message,
    sendInfo.value.encrypted,
    isBase64)
  console.log(result)
  if (!result.error){
    sendInfo.value.fee = result.fee
    sendInfo.value.raw = result.raw
  }else {
    useNotify('negative',result.error.message)
  }
  is_loading.value = !is_loading.value
}

async function signTransaction(){
  is_loading.value = !is_loading.value
  const result = await era.broadcast64(sendInfo.value.raw)
  console.log(result)
  if (result.error){
    useNotify('negative',result.message)
    is_loading.value = !is_loading.value
  }else {
    useNotify('info','Транзакция создана')
    confirmModalVisible.value = false
    is_loading.value = !is_loading.value
    globalStore.toggleSendAssetModalVisible()
  }
}
function updateTransactions(){

  emit('close')
}

</script>

<style lang="sass">
#qr-video
  width: 100%
  height: 100%
  object-fit: cover


#video-container
  line-height: 0
  width: 100%
  height: 40vh
  object-fit: contain
  margin-bottom: 16px

#video-container.example-style-1 .scan-region-highlight-svg,
#video-container.example-style-1 .code-outline-highlight
  stroke: #64a2f3 !important


#video-container.example-style-2
  position: relative
  width: max-content
  height: max-content
  overflow: hidden

#video-container.example-style-2 .scan-region-highlight
  border-radius: 30px
  outline: rgba(0, 0, 0, .25) solid 50vmax

#video-container.example-style-2 .scan-region-highlight-svg
  display: none
#video-container.example-style-2 .code-outline-highlight
  stroke: rgba(255, 255, 255, .5) !important
  stroke-width: 15 !important
  stroke-dasharray: none !important

</style>
