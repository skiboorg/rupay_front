<template>
  <page>
    <page-body class="q-px-md">
      <page-header>
      </page-header>

      <div class="" style="height: 60px"></div>

      <div v-if="action_type==='other' " class="q-mb-lg">

        <div v-if="asset.is_can_buy_by_tx_check">
          <q-select class="q-mb-md" rounded outlined dense :label="$t('choose_network')" v-model="network" :options="asset.networks" option-label="name"/>
          <p class="q-mb-sm text-caption">{{$t('create_transaction')}}:</p>
          <p class="text-weight-medium q-mb-sm">{{network.address}}</p>
          <q-btn rounded class="q-mb-sm" color="primary" :label="$t('address_copy_btn')" @click="copyAddress" no-caps size="12px" unelevated  icon="las la-copy"/>
          <p class="q-mb-sm text-caption">
            {{$t('send_only')}} <span class="text-weight-bold">{{asset.name}} {{network.description}}</span><br>
            <span class="text-negative">{{$t('send_only11')}}</span><br>
          </p>
          <p class="q-mb-sm text-caption text-bold">{{$t('after_transaction')}}</p>

          <q-input rounded class="q-mb-sm" dense outlined  v-model="tx_hash"  />
          <q-btn rounded color="primary" :loading="is_loading" @click="checkTxHash('usdt')" :disable="!tx_hash" unelevated no-caps
                 class="full-width q-py-md" :label="$t('check_transaction')"/>
        </div>
        <div v-else>
          <p class="q-mb-sm text-caption">{{$t('wallet_from')}}</p>
          <q-input class="q-mb-sm" rounded dense outlined  v-model="fromWallet"  />
          <div>
            <p class="q-mb-sm text-caption">{{$t('wallet_to')}}</p>
            <p class="text-weight-medium q-mb-sm">{{asset.from_address}}</p>
            <q-btn rounded class="q-mb-sm" color="primary" :label="$t('address_copy_btn')" @click="copyAddress" no-caps size="12px" unelevated  icon="las la-copy"/>
            <p class="q-mb-sm text-caption">
              <span class="text-negative" v-html="$t('send_only')"></span><br> <span class="text-weight-bold">{{asset.name}} {{asset.description}}</span><br>
              {{$t('send_only1')}}<span class="text-weight-bold">{{asset.name}}</span> {{$t('send_only2')}}{{asset.name}} {{$t('send_only3')}}
            </p>
            <p class="q-mb-sm text-caption">{{$t('buy_amomunt')}}*</p>
            <q-input rounded class="q-mb-sm" dense outlined  v-model="amount" type="number" />
            <q-btn rounded color="primary" :loading="is_loading" @click="send" :disable="!amount || !fromWallet" unelevated no-caps class="full-width q-py-md"
                   :label="$t('send_btn')"/>
          </div>
        </div>

      </div>
      <div v-else class="q-mb-lg">
        <q-scroll-area style="height: 85vh;">
          <div v-if="selected_payment.value !== 'rs'">

            <!--            asset.key===1643 ||-->
            <!--            <q-select rounded v-if="asset.key === 2 ||  asset.key===1048610 || asset.key===1048615" v-model="selected_payment" outlined dense :options="payment_systems" class="q-mb-md" label="Выберите тип оплаты"/>-->
<!--            && asset.key===1643-->
            <div class="" v-if="!selected_payment.disabled ">
              <p class="q-mb-sm text-caption">{{$t('buy_amomunt')}} {{selected_payment.currency}}*<br>
                <span class="text-bold text-negative ">
              {{$t('buy_amomunt_min')}} {{selected_payment.min}} {{selected_payment.currency}},
              {{$t('buy_amomunt_max')}} {{selected_payment.max}} {{selected_payment.currency}},
                              {{$t('buy_amomunt_comission')}} {{selected_payment.commission * 100}} %
              </span>
              </p>
              <q-input rounded class="q-mb-sm" dense outlined  v-model="to_pay" type="number" :label="$t('buy_amomunt_label')"/>
              <div class="q-mb-sm flex items-center justify-between">
                <p  class="no-margin text-caption text-bold">{{$t('buy_amomunt_total')}}: {{want_to_buy}} {{asset.name}}</p>
                <p  class="no-margin text-caption text-bold">{{$t('buy_amomunt_cource')}}: {{parseFloat(current_course).toFixed(2)}} RUB</p>

              </div>


              <q-btn color="primary" rounded :loading="is_loading" @click="new_payment"
                     :disable="to_pay<selected_payment.min || to_pay>selected_payment.max" unelevated no-caps class="full-width q-py-md" :label="$t('send_btn')"/>

            </div>
            <div v-else>
              <p class="text-center text-negative text-bold">{{$t('buy_disable')}}</p>
              <p class="text-center text-positive text-bold">{{$t('buy_disable_p2p')}} <router-link :to="{name:'p2p_index'}">P2P</router-link></p>
            </div>

          </div>
          <div v-else>
            <div v-if="!selected_payment.disabled">
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
            <div v-else>
              <p class="text-center text-negative text-bold">{{$t('buy_disable')}}</p>
              <p class="text-center text-positive text-bold">{{$t('buy_disable_p2p')}} <router-link :to="{name:'p2p_index'}">P2P</router-link></p>
            </div>


          </div>

        </q-scroll-area>
      </div>
    </page-body>
  </page>

</template>
<script setup>
import { useI18n } from 'vue-i18n'
const i18n = useI18n()
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
//const URL = 'http://127.0.0.1:8010'

let action_type = ref(null)
let code = ref(null)
let amount = ref(null)
let fromWallet = ref(null)
let is_loading = ref(false)
let is_sent = ref(false)
let asset_key = ref(0)

let to_pay = ref(1000)
let summ = ref(0)
//let tx_hash = ref('0x93b0f7e85ad0372b23697efaaf4d7aab19713a7b7cb832d4ecc77e2b7b3098aa')

const tx_hash = ref('')
let comission = ref(0.02)
let current_course = ref(0)
const selected_payment = ref({label:'Visa/Mastercard/МИР',value:'Card1',currency:"RUB", min:1000,max:15000,commission:0.06, disabled:false})

const payment_systems = [
  {label:'Visa/Mastercard/МИР',value:'Card1',currency:"RUB", min:1000,max:15000,commission:0.1, disabled:false},
  {label:'Qiwi',value:'Qiwi',currency:"RUB",min:1000,max:15000,commission:0.1, disabled:false},
  {label:'Перевод на Р/С',value:'rs',currency:"RUB",min:1000,max:50000,commission:0, disabled:false},
]

const want_to_buy = computed(()=>{
  if (asset.value.key === 1048615 || asset.value.key === 1643 || asset.value.key === 1048619 || asset.value.key === 2){
    summ.value = to_pay.value
    let cource_plus_comission  = parseFloat(parseFloat(asset.value.course) + parseFloat(asset.value.course * selected_payment.value.commission)).toFixed(2)
    console.log(cource_plus_comission)
    current_course.value = asset.value.course// cource_plus_comission
    return parseFloat(to_pay.value / cource_plus_comission).toFixed(5)
  }else{
      summ.value = to_pay.value
      current_course.value = parseFloat(parseFloat(asset.value.course) + (parseFloat(asset.value.course) * 0.1))
      return parseFloat(parseFloat(to_pay.value / current_course.value)).toFixed(5)

  }



})
const network = ref(null)

async function checkTxHash(target_asset){
  is_loading.value = !is_loading.value
  console.log(asset.value)
  const response = await axios.post(URL+'/api/data/check_tx_hash',{
    tx:tx_hash.value.replace(/\s/g, '' ),
    wallet:current_address.value,
    network:network.value,
    target_asset:{name:asset.value.name,key:asset.value.key,to:asset.value.round_to}
  })
  if (response.data.success){
    useNotify('positive',JSON.stringify(response.data.message))
  }else {
    useNotify('negative',JSON.stringify(response.data.message))
  }
  tx_hash.value = null
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
      asset_id:asset.value.key,
      redirect_url: process.env.PAYMENT_REDIRECT_URL
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
  code.value = makeid(4)
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
  //code.value = makeid(4)
  fromWallet.value=null
  amount.value=null

  is_loading.value = !is_loading.value
  is_sent.value = true
  useNotify('positive',i18n.t('buy_success'))


}


function copyAddress(){
  copyToClipboard(asset.value.from_address)
    .then(() => {
      useNotify('positive', i18n.t('wallet_address_copy'))
    })
    .catch(() => {
      // fail
    })
}

const asset = computed(()=>{
  const asset_item = sraStore.assets.find(x=>x.key===asset_key.value)
  network.value = asset_item.networks[0]
  return asset_item
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
  //code.value=makeid(4)
  //if (asset.value.payment_system){
  //  selected_payment.value = {label:asset.value.payment_system,
  //    value:asset.value.payment_system,
  //    currency:`${asset.value.name}`,
  //    min:asset.value.payment_min / asset.value.course_api,
   //   max:asset.value.payment_max / asset.value.course_api,

   //   commission:asset.value.payment_comission/100
   // }
   // to_pay.value = asset.value.payment_min / asset.value.course_api
  //}

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
