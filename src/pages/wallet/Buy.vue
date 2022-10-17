<template>
  <page>
    <page-body class="q-px-md">
      <page-header>
      </page-header>

      <div class="" style="height: 60px"></div>
      <div v-if="action_type==='other' " class="q-mb-lg">
        <div v-if="asset.key!==1048610">
          <p class="q-mb-sm text-caption">Укажите кошелек с которого будете совершать транзакцию*</p>
          <q-input class="q-mb-sm" rounded dense outlined  v-model="fromWallet"  />
          <div>
            <p class="q-mb-sm text-caption">С указанного вами кошелька совершаете транзакцию на адрес:</p>
            <p class="text-weight-medium q-mb-sm">{{asset.from_address}}</p>
            <q-btn rounded class="q-mb-sm" color="primary" label="Скопировать адрес" @click="copyAddress" no-caps size="12px" unelevated  icon="las la-copy"/>
            <p class="q-mb-sm text-caption">
              Отправляйте на данный адрес только <span class="text-weight-bold">{{asset.name}} {{asset.description}}</span><br>
              <span class="text-negative">Отправка любых других монет приведет к их безвозвратной потере</span><br>
              Совершая транзакцию в <span class="text-weight-bold">{{asset.name}}</span> вы делаете добровольный имущественный паевой взнос ПКРГИ РОЛФ
              Равный количеству отправляемых {{asset.name}} Вывод монет с кошелька является выплатой по вашему взносу<br>
              Зачисление происходит в сроки до 24 часов с момента транзакции (указаны максимальные сроки)
            </p>
            <p class="q-mb-sm text-caption">Сумма пополнения*</p>
            <q-input rounded class="q-mb-sm" dense outlined  v-model="amount" type="number" />
            <q-btn rounded color="primary" :loading="is_loading" @click="send" :disable="!amount || !fromWallet" unelevated no-caps class="full-width q-py-md" label="Отправить"/>
          </div>
        </div>
        <div v-else>
          <p class="q-mb-sm text-caption">Cовершаете транзакцию на адрес:</p>
          <p class="text-weight-medium q-mb-sm">{{asset.from_address}}</p>
          <q-btn rounded class="q-mb-sm" color="primary" label="Скопировать адрес" @click="copyAddress" no-caps size="12px" unelevated  icon="las la-copy"/>
          <p class="q-mb-sm text-caption">
            Отправляйте на данный адрес только <span class="text-weight-bold">{{asset.name}} {{asset.description}}</span><br>
            <span class="text-negative">Отправка любых других монет приведет к их безвозвратной потере</span><br>
          </p>
          <p class="q-mb-sm text-caption text-bold">После проведения транзакции, скопируйте Transaction Hash, вставьте в поле ниже и нажмите кнопку проверить</p>

          <q-input rounded class="q-mb-sm" dense outlined  v-model="tx_hash"  />
          <q-btn rounded color="primary" :loading="is_loading" @click="checkTxHash" :disable="!tx_hash" unelevated no-caps
                 class="full-width q-py-md" label="Проверить транзакцию"/>
        </div>

      </div>
      <div v-else class="q-mb-lg">
        <q-scroll-area style="height: 85vh;">
          <div v-if="selected_payment.value !== 'rs'">
            <q-select rounded v-if="asset.key === 2 || asset.key===1643 || asset.key===1048610" v-model="selected_payment" outlined dense :options="payment_systems" class="q-mb-md" label="Выберите тип оплаты"/>

            <p class="q-mb-sm text-caption">Сумма пополнения в {{selected_payment.currency}}*<br>
              <span class="text-bold text-negative ">
              мининум {{selected_payment.min}} {{selected_payment.currency}},
              максимум {{selected_payment.max}} {{selected_payment.currency}},
            комиссия {{selected_payment.commission * 100}} %</span></p>
            <q-input rounded class="q-mb-sm" dense outlined  v-model="to_pay" type="number" label="На какую сумму хотите пополнить*"/>
            <p  class="q-mb-sm text-caption text-bold">Вы получите: {{want_to_buy}} {{asset.name}}</p>

            <q-btn color="primary" rounded :loading="is_loading" @click="new_payment" :disable="to_pay<selected_payment.min || to_pay>selected_payment.max" unelevated no-caps class="full-width q-py-md" label="Отправить"/>

          </div>
          <div v-else>

            <div v-if="!is_sent"><p class="q-mb-sm text-caption">Сумма пополнения в рублях* (<span class="text-bold text-negative">мининум 1000 руб</span>)</p>
              <q-input rounded class="q-mb-sm" dense outlined  v-model="amount" type="number" />
              <p class="q-mb-sm text-caption text-bold">Вы получите: {{amount / asset.course}} {{asset.name}}</p>
              <q-btn color="primary"  :loading="is_loading" @click="send" :disable="!amount || amount<1000" unelevated no-caps class="full-width q-py-md q-mb-md" rounded label="Отправить"/>
            </div>
            <div v-else> <p class="text-bold">Внимание!</p>
              <p class="q-mb-sm text-caption">Для пополнения вашего баланса {{asset.name}} по указанным реквизитам ниже совершаете оплату в назначении платежа указать:</p>
              <p class="q-mb-sm text-caption text-weight-bold"> Добровольный членский взнос от ФИО, КОД {{code}}</p>
              <p class="q-mb-sm text-caption text-weight-bold">  ВНИМАНИЕ НАЗНАЧЕНИЕ ПЛАТЕЖА ДОЛЖНО СОВПАДАТЬ С УКАЗАННЫМ В ИНСТРУКЦИИ.</p>
              <p class="q-mb-sm text-caption">   Зачисление {{asset.name}} происходит в течении нескольких часов после получения средств на счет!
                Рекомендуем совершать оплату с Альфа Банка, тогда зачисление будет происходить быстрее.
                Оплата с других банков может затянуть зачисление до 5 рабочих дней.</p>
              <div class="text-center">
                <img style="width: 300px;height: 300px;object-fit: contain" src="~assets/qr.jpg"/>
              </div>

              <p class="q-mb-lg text-caption"><span style="font-weight: bold">Реквизиты для оплаты взносов</span><br>
                Номер счёта: 40703810326350000009<br>
                Валюта: RUR<br>
                Название: ПОТРЕБИТЕЛЬСКИЙ КООПЕРАТИВ ПО РАЗВИТИЮ ГРАЖДАНСКИХ ИНИЦИАТИВ "РОЛФ"<br>
                ИНН: 2366034781<br>
                КПП: 236601001<br>
                Банк: ФИЛИАЛ "РОСТОВСКИЙ" АО "АЛЬФА-БАНК"<br>
                БИК: 046015207<br>
                Кор. счёт: 30101810500000000207<br>
                Юридический адрес компании: улица ГОРЬКОГО, д. 60/4, кв./оф. 44, Краснодарский край, р-н ГОРОД-КУРОРТ СОЧИ, г. Сочи</p></div>


          </div>

        </q-scroll-area>
      </div>
    </page-body>
  </page>

</template>
<script setup>

import { useEraStore } from 'stores/eraChain'
const sraStore = useEraStore()

import { useAccountStore } from 'stores/account'
const accountStore = useAccountStore()

import {computed, ref,onBeforeMount} from "vue";
import {api} from "boot/axios";
import axios from 'axios'

import {useRoute} from "vue-router"

const route = useRoute()

import {useNotify} from "src/helpers/utils";
import { copyToClipboard } from 'quasar'

const URL = 'https://rupay.pro'
//const URL = 'http://localhost:8010'

let action_type = ref(null)
let code = ref(null)
let amount = ref(null)
let fromWallet = ref(null)
let is_loading = ref(false)
let is_sent = ref(false)
let asset_key = ref(0)
let to_pay = ref(300)
let summ = ref(0)
let tx_hash = ref(null)
let comission = ref(0.02)
let current_course = ref(0)
const selected_payment = ref({label:'Visa/Mastercard',currency:"RUB",value:'Card1',min:300,max:50000,commission:0})

const payment_systems = [
  {label:'Visa/Mastercard',value:'Card1',currency:"RUB", min:300,max:50000,commission:0},
  {label:'Qiwi',value:'Qiwi',currency:"RUB",min:300,max:50000,commission:0},
  {label:'Перевод на Р/С',value:'rs',currency:"RUB",min:1000,max:50000,commission:0},
]

const want_to_buy = computed(()=>{


  if (asset.value.key === 2 || asset.value.key ===1048610){
    summ.value = to_pay.value
    return parseFloat(parseFloat(to_pay.value / asset.value.course) - parseFloat(to_pay.value / asset.value.course * selected_payment.value.commission)).toFixed(5)
  }else{
    summ.value = to_pay.value * asset.value.course_api
    return parseFloat(to_pay.value - (to_pay.value * selected_payment.value.commission)).toFixed(5)
  }

})

async function checkTxHash(){
  is_loading.value = !is_loading.value
  const response = await axios.post(URL+'/api/data/check_tx_hash',{
    tx:tx_hash.value,
    wallet:current_address.value,
    addr:asset.value.from_address
  })
  if (response.data.success){
    useNotify('positive',JSON.stringify(response.data.message))
  }else {
    useNotify('negative',JSON.stringify(response.data.message))
  }

  is_loading.value = !is_loading.value
}

async function new_payment(){
  is_loading.value = !is_loading.value
  const response = await axios.post(URL+'/api/data/create_payment',
    {
      wallet:current_address.value,
      type:selected_payment.value.value,
      want_to_buy:want_to_buy.value,
      amount:summ.value,
      currency : asset.value.key === 2 || asset.value.key === 1643 || asset.value.key === 1048610 ? selected_payment.value.currency : 'USD',
      asset_id:asset.value.key
    }
  )
  is_loading.value = !is_loading.value
  if (response.data.success){
    window.location.href = response.data.url
  }else {
    useNotify('negative',JSON.stringify(response.data.message))
  }

}

async function send(){
  is_loading.value = !is_loading.value
  await api.post('/api/settings/payment_request',{
    code:code.value,
    wallet:current_address.value,
    fromWallet:fromWallet.value,
    currency:asset.value.name,
    amount:amount.value,
  })
  let add_text = ''
  if (asset.value.key===1048610){
    add_text = '🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️'
  }


  await axios.get(`https://api.telegram.org/bot603507616:AAEmmGeaujFe_lqkw31HHSoh2EiAvVNtFA4/sendMessage?chat_id=-542426502
  &text=${add_text}Запрос на пополнение с RUPAY%0A
  Код : ${code.value}%0A
  С кошелека ${fromWallet.value}%0A
  На кошелек ${current_address.value}%0A
  Актив ${asset.value.name}%0A
  Сумма пополнения: ${amount.value} ${asset.value.name}

`
  )
  code.value = makeid(4)
  fromWallet.value=null
  amount.value=null

  is_loading.value = !is_loading.value
  is_sent.value = true
  useNotify('positive','Запрос успешно отправлен<br>Ожидаем поступление средств')


}


function copyAddress(){
  copyToClipboard(asset.value.from_address)
    .then(() => {
      useNotify('positive', 'Адрес кошелька скопирован')
    })
    .catch(() => {
      // fail
    })
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
  action_type.value = route.query.type
  code.value=makeid(4)
  if (asset.value.payment_system){
    selected_payment.value = {label:asset.value.payment_system,
      value:asset.value.payment_system,
      currency:`${asset.value.name}`,
      min:asset.value.payment_min / asset.value.course_api,
      max:asset.value.payment_max / asset.value.course_api,

      commission:asset.value.payment_comission/100
    }
    to_pay.value = asset.value.payment_min / asset.value.course_api
  }

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
