<template>
  <page>
    <page-body class="q-px-md">
      <page-header>
      </page-header>
      <div class="" style="height: 60px"></div>
      <div v-if="asset.show_description" class="q-mb-lg">
        <p class="q-mb-sm text-caption">Укажите кошелек с которого будете совершать транзакцию*</p>
        <q-input class="q-mb-sm" dense outlined  v-model="fromWallet"  />
        <div>
          <p class="q-mb-sm text-caption">С указанного вами кошелька совершаете транзакцию на адрес:</p>
          <p class="text-weight-medium q-mb-sm">{{asset.from_address}}</p>
          <!--            <p>{{asset}}</p>-->
          <q-btn class="q-mb-sm" color="primary" label="Скопировать адрес" @click="copyAddress" no-caps size="12px" unelevated  icon="las la-copy"/>
          <p class="q-mb-sm text-caption">
            Отправляйте на данный адрес только <span class="text-weight-bold">{{asset.name}}</span><br>
            <span class="text-negative">Отправка любых других монет приведет к их безвозвратной потере</span><br>
            Совершая транзакцию в <span class="text-weight-bold">{{asset.name}}</span> вы делаете добровольный имущественный паевой взнос ПКРГИ РОЛФ
            Равный количеству отправляемых {{asset.name}} Вывод монет с кошелька является выплатой по вашему взносу<br>
            Зачисление происходит в сроки до 24 часов с момента транзакции (указаны максимальные сроки)
          </p>
          <p class="q-mb-sm text-caption">Сумма пополнения*</p>
          <q-input class="q-mb-sm" dense outlined  v-model="amount" type="number" />
          <q-btn color="primary" :loading="is_loading" @click="sendRequest" :disable="!amount || !fromWallet" unelevated no-caps class="full-width q-py-md" label="Отправить"/>
        </div>
      </div>
      <div v-else class="q-mb-lg">
        <q-scroll-area style="height: 85vh;">
          <p class="q-mb-sm text-caption">Для пополнения вашего баланса {{asset.name}} введите сумму пополнения:</p>

          <p class="q-mb-sm text-caption">Сумма пополнения в рублях* (<span class="text-bold text-negative">мининум {{min_amount}} руб</span>)</p>
          <q-input rounded class="q-mb-sm" dense outlined  v-model="amount" type="number" />
          <p class="q-mb-sm text-caption text-bold">Вы получите: {{amount / asset.course}} {{asset.name}}</p>
          <q-btn rounded color="primary" :loading="is_loading" @click="send" :disable="!amount || amount<min_amount" unelevated no-caps class="full-width q-py-md" label="Отправить"/>
        </q-scroll-area>

      </div>
    </page-body>
  </page>

</template>
<script setup >
import { useWSStore } from 'stores/ws'
const wsStore = useWSStore()

import { useEraStore } from 'stores/eraChain'
const sraStore = useEraStore()

import { useAccountStore } from 'stores/account'
const accountStore = useAccountStore()



import {computed, ref,onBeforeMount} from "vue";
import {api} from "boot/axios";
import axios from 'axios'

import {useRoute} from "vue-router"
const route = useRoute()
import {copyClipBoard} from "src/helpers/utils";
import { uid } from 'quasar'

import { YooCheckout, ICreatePayment } from '@a2seven/yoo-checkout'
import { openURL } from 'quasar'

let code = ref(null)
let amount = ref(null)
let fromWallet = ref(null)
let is_loading = ref(false)
let asset_key = ref(0)
const min_amount = ref(1)

async function sendRequest(){

  await api.post('/api/settings/payment_request',{
    code:code.value,
    wallet:current_address.value,
    fromWallet:fromWallet.value,
    currency:asset.value.name,
    amount:amount.value,
  })

  await axios.get(`https://api.telegram.org/bot603507616:AAEmmGeaujFe_lqkw31HHSoh2EiAvVNtFA4/sendMessage?chat_id=-542426502
  &text=Код : ${code.value}%0A
  На кошелек ${current_address.value}%0A
  С кошелька: ${fromWallet.value}%0A
  Валюта: ${asset.value.name}%0A
  Сумма: ${amount.value}%0A
`
  )
  code.value = makeid(4)
  fromWallet.value=null
  amount.value=null

  is_loading.value = !is_loading.value
  useNotify('positive','Запрос успешно отправлен<br>Ожидаем поступление средств')

}
async function send(){
  is_loading.value = !is_loading.value
  const result = await axios.post('https://rupay.pro/api/data/create_payment',{
    code:code.value,
    wallet:current_address.value,
    currency:asset.value.name,
    amount:amount.value,
    asset_id:asset_key.value,
    amount_cur:amount.value / asset.value.course,
  })


  if (result.data.success){
    window.location.href = result.data.message.confirmation_url
  }
  is_loading.value = !is_loading.value
}


async function copyAddress(){
  await copyClipBoard(asset.value.from_address,'positive','Адрес кошелька скопирован')
}

const asset = computed(()=>{
  return sraStore.assets.find(x=>x.key===asset_key.value)
})

const current_address = computed(()=>{
  return accountStore.addresses[accountStore.currentAddressIdx].address
})

function makeid(length) {
  var result           = '';
  var characters       = '0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  return result;
}

onBeforeMount( async ()=>{
  asset_key.value = parseInt(route.query.asset)
  code.value=makeid(4)
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
