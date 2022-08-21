<template>
  <page>
    <page-body class="q-px-md">
      <page-header>
      </page-header>
      <div class="" style="height: 40px"></div>
      <div class="flex column items-center justify-evenly full-height">
        <div class="">
          <q-card class="qr-card">
            <q-card-section>
              <p class="text-bold text-negative text-center no-margin">На этот адрес отправляте только из сети RuPay. Отправка из другой сети приведет к сжиганию Вашей криптовалюты</p>
              <div class="text-center">
                <img style="width: 300px; height: 300px;object-fit: contain" :src="qrCode">
              </div>

              <p style="word-break: break-all" class="qr-card-text no-margin">{{current_address}}</p>
            </q-card-section>
          </q-card>
          <p v-if="amount" class="text-weight-bold text-center">+{{amount}} {{asset.name}}</p>
          <p  class="qr-card-text">Отправлейте только <strong>{{asset.name}}</strong> на этот адрес.<br>Отправка любых других монет может привести к их безвозвратной потере</p>
        </div>

        <div class="q-gutter-md">
            <q-btn label="Скопировать" @click="copyAddress" no-caps  unelevated stack  icon="las la-copy"/>

          <q-btn label="Добавить сумму" @click="addAmountDialog=true" no-caps unelevated stack icon="las la-tag" />


        </div>
      </div>

      <q-dialog v-model="addAmountDialog" persistent transition-show="scale" transition-hide="scale">
        <q-card  style="width: 100%">
          <q-card-section class="bg-primary text-white" >
            <div class="text-h6">Введите сумму</div>
          </q-card-section>

          <q-card-section >
           <q-input rounded dense outlined autofocus v-model="amount" type="number" />
          </q-card-section>

          <q-card-actions align="right" >
            <q-btn no-caps unelevated color="primary" outline rounded  label="Отмена" v-close-popup />
            <q-btn no-caps  unelevated color="primary" :disable="!amount" rounded @click="setAmount" label="OK" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </page-body>
  </page>

</template>
<script setup>
import {useRoute} from "vue-router"
import QRCode from 'qrcode'
const route = useRoute()

let share_text = ref('')
let addAmountDialog = ref(false)
let amount = ref(null)

async function share(){
  await navigator.share(
    {
      title: '',
      text: `Мой адрес в сети RUPAY актива ${asset.value.name} - ${current_address.value}`,

    }
  )

}

async function setAmount(){
  addAmountDialog.value=false
  await generateQR(`${current_address.value}:${asset_key.value}:${amount.value}`)
}


import {copyClipBoard} from "src/helpers/utils";

async function copyAddress(){
  await copyClipBoard(current_address.value,'positive','Адрес кошелька скопирован')

}
import { useEraStore } from 'stores/eraChain'
const sraStore = useEraStore()

import { useAccountStore } from 'stores/account'
const accountStore = useAccountStore()

import {computed, ref,onBeforeMount} from "vue";

let asset_key = ref(0)

const asset = computed(()=>{
  return sraStore.assets.find(x=>x.key===asset_key.value)
})

const current_address = computed(()=>{
  return accountStore.addresses[accountStore.currentAddressIdx].address
})

let qrCode=ref('')
const generateQR = async text => {
  try {
    qrCode.value = await QRCode.toDataURL(text,{
      scale:8
    })
  } catch (err) {
    console.error(err)
  }
}

onBeforeMount( async ()=>{
  asset_key.value = parseInt(route.query.asset)
  share_text.value = `Мой кошелек ${asset.value.name} ${current_address.value}`
  console.log(asset.value)
  await generateQR(`${current_address.value}:${asset_key.value}:${route.query.amount}`)


})


</script>

<style lang="sass">
.qr-card
  max-width: 80%
  margin: 0 auto 16px

  &-text
    font-size: 12px
    text-align: center
    line-height: 120%
</style>
