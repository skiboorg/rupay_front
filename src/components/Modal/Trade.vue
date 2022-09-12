<template>
  <q-dialog
    v-model="globalStore.tradeModalVisible"
    persistent


    @before-show="getAssets"
    @before-hide="clearData"
  >
    <q-card style="width: 900px; max-width: 100vw;">
      <q-header style="position: unset;padding-right: 8px; padding-left: 0" reveal  class="text-white q-py-sm  items-center flex justify-between">
        <q-btn label="Назад" no-caps v-close-popup icon="las la-angle-left" unelevated/>
        <div class="flex items-center ">
          <q-avatar size="30px" class="q-mr-sm">
            <img :src="first_asset.icon" alt="">
          </q-avatar>
          <p class="no-margin text-weight-medium">{{first_asset.name}}</p>
          <p class="q-mb-none q-px-sm text-weight-medium">/</p>
          <q-avatar size="30px" class="q-mr-sm">
            <img :src="second_asset.icon" alt="">
          </q-avatar>
          <p class="no-margin text-weight-medium"> {{second_asset.name}}</p>
        </div>
      </q-header>

      <q-card-section class="q-pt-none">


        <div class="row q-col-gutter-md">
          <div class="col-7">
            <div class="row q-col-gutter-sm">
              <div class="col-4">
                <p v-if="first_asset.name !== 'OLF'" class="no-margin text-bold text-h6">{{parseFloat(pair_data.last_price).toFixed(4)}}</p>
                <p v-else class="no-margin text-bold text-h6 text-positive">{{first_asset.course}}</p>
              </div>
              <div class="col-8">
                <div class="row q-col-gutter-xs text-caption">
                  <div class="col-5"><span class="text-grey-7">Макс за 24ч</span><br>
                    {{parseFloat(pair_data.highest_price_24h).toFixed(2)}}<br>
                    <span class="text-grey-7">Мин за 24ч</span><br>
                    {{parseFloat(pair_data.lowest_price_24h).toFixed(2)}}
                  </div>
                  <div class="col-6">
                    <p class="text-grey-7 ellipsis q-mb-none">Объем за 24ч ({{first_asset.name}})</p>
                    ~{{parseFloat(pair_data.base_volume_24).toFixed(2)}}<br>
                    <p class="text-grey-7 ellipsis q-mb-none">Объем за 24ч ({{second_asset.name}})</p>
                    ~{{parseFloat(pair_data.quote_volume_24).toFixed(2)}}<br>
                  </div>

                </div>
              </div>
            </div>
            <q-separator spaced="md"/>
            <div class="flex items-center no-wrap q-mb-md">
              <q-btn
                unelevated
                no-caps
                class="bye-btn full-width q-py-sm"
                :color="trade_type ==='buy' ? 'positive' : 'grey-5' "
                @click="trade_type='buy'">
                Купить {{first_asset.name}} <br>за {{second_asset.name}}
              </q-btn>
              <q-btn
                :color="trade_type ==='sell' ? 'negative' : 'grey-5' "
                unelevated
                class="sell-btn full-width q-py-sm"
                no-caps
                @click="trade_type='sell'">
                Продать {{first_asset.name}} <br>за {{second_asset.name}}
              </q-btn>
            </div>
            <p class="text-caption q-mb-sm">{{trade_type === 'buy' ? 'Кол-во к покупке' : 'Кол-во к продаже'}}</p>
            <q-input class="q-mb-sm" rounded dense outlined  v-model="amount" @keyup="amountChange"  type="number" >
              <template v-slot:append>
                <q-btn v-if="trade_type==='sell'" @click="amount = balances[first_asset.key][0][1]" size="10px" flat rounded label="Продать все"  />
              </template>
            </q-input>
            <p class="text-caption q-mb-sm">Цена за единицу</p>
            <q-input class="q-mb-sm" rounded dense outlined  v-model="unit_price"  @blur="priceChange" type="number" />
            <p class="text-caption q-mb-sm">Итого</p>
            <q-input class="q-mb-md" rounded dense outlined  v-model="total"  @keyup="totalChange"  type="number" >
              <!--          <template v-slot:append>-->
              <!--            <q-btn v-if="trade_type==='buy'" @click="total = balances[second_asset.key][0][1]" size="10px" flat rounded label="Купить на все"  />-->
              <!--          </template>-->
            </q-input>
            <q-btn rounded
                   :loading="is_loading"
                   :label="trade_type === 'buy' ? 'Купить' : 'Продать'"
                   :color="trade_type === 'buy' ? 'positive' : 'negative'"
                   class="full-width q-mb-md"
                   unelevated
                   size="18px"
                   no-caps
                   :disable="!amount || !unit_price || !total"
                   @click="createOrder"
            />

          </div>
          <div class="col-5">
            <div class="">
              <div class="row q-col-gutter-sm">
                <div class="col-6">
                  <div class="orders-grid">
                    <div class="flex items-center justify-between">
                      <p class="no-margin text-10 text-grey-8 text-weight-medium">Цена</p>
                      <p class="no-margin text-10 text-grey-8 text-weight-medium">Объем</p>
                    </div>
                    <q-linear-progress reverse
                                       v-for="(order,index) in orders.have"
                                       @click="sellOrderClick(order)"
                                       class="flex items-center justify-between relative-position sell-pr cursor-pointer"
                                       color="red-2"
                                       :value="order.leftHave / order.amountHave"
                                       size="20px"  >
                      <p class="no-margin price-red-color text-10 text-weight-medium">{{order.pairPrice}}</p>
                      <p class="no-margin vol-color text-10 text-weight-medium">{{order.leftHave}}</p>
                    </q-linear-progress>
                  </div>

                </div>
                <div class="col-6">
                  <div class="orders-grid">
                    <div class="flex items-center justify-between">
                      <p class="no-margin text-10 text-grey-8 text-weight-medium">Цена</p>
                      <p class="no-margin text-10 text-grey-8 text-weight-medium">Объем</p>
                    </div>
                    <q-linear-progress
                      v-for="(order,index) in orders.want"
                      @click="buyOrderClick(order)"
                      class="flex items-center justify-between relative-position bg-white buy-pr cursor-pointer"
                      color="light-green-11"
                      :value="order.leftWant / order.amountWant"
                      size="20px"  >
                      <p class="no-margin price-green-color text-10 text-weight-medium">{{order.pairPrice }}</p>
                      <p class="no-margin vol-color text-10 text-weight-medium">{{order.leftWant}}</p>
                    </q-linear-progress>
                  </div>
                </div>
                <div class="col-6">
                  <q-separator/>
                  <div class="flex items-center justify-between">
                    <p class="no-margin text-10 text-grey-8 text-weight-medium">Всего</p>
                    <p class="no-margin text-10 vol-color text-weight-medium">{{totalSell}}</p>
                  </div>
                </div>
                <div class="col-6">
                  <q-separator/>
                  <div class="flex items-center justify-between">
                    <p class="no-margin text-10 text-grey-8 text-weight-medium">Всего</p>
                    <p class="no-margin text-10 vol-color text-weight-medium">{{totalBuy}}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div  class=" relative-position">
          <q-inner-loading
            class="z-max"

            :showing="trades_loading"
            color="primary"
          >
            <q-spinner
              color="primary"
              size="2em"
            />
          </q-inner-loading>
          <vue-highcharts
            style="width: 100%;overflow: unset"
            type="stockChart"
            :options="chartOptions"
            :redrawOnUpdate="true"
            :oneToOneUpdate="false"
            :animateOnUpdate="true"

          />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
  <q-dialog v-model="confirmModalVisible" persistent transition-show="scale" transition-hide="scale" >
    <q-card  style="width: 100%">
      <q-card-section class="bg-primary text-white" >
        Подтверждение транзакции создании ордера
      </q-card-section>

      <q-card-section >
        <q-list separator dense>
          <q-item>
            <q-item-section>Имею</q-item-section>
            <q-item-section>
              {{trade_type === 'buy' ?    total:amount }}
              {{trade_type === 'buy' ?   second_asset.name : first_asset.name}}
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>Хочу</q-item-section>
            <q-item-section>
              {{trade_type === 'buy' ?   amount : total}}
              {{trade_type === 'buy' ?   first_asset.name : second_asset.name}}
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>Комиссия</q-item-section>
            <q-item-section>
              {{orderInfo.fee}}

            </q-item-section>
          </q-item>
        </q-list>

</q-card-section>
      <q-card-actions align="right" >
        <q-btn rounded no-caps unelevated color="grey-6" :loading="is_loading" label="Отмена" v-close-popup />
        <q-btn rounded no-caps unelevated
               :loading="is_loading"
               @click="signTransaction"
               :label="trade_type === 'buy' ? 'Купить' : 'Продать'"
               :color="trade_type === 'buy' ? 'positive' : 'negative'" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script>
import VueHighcharts from "vue3-highcharts";
import HighCharts from "highcharts";
import StockCharts from "highcharts/modules/stock";

HighCharts.setOptions({
  rangeSelector:{
    dropdownLabel : ['Масштаб'],
    buttons:[{type: 'month', count: 1,   text: '1м', title: '1 мес'},
      {    type: 'month',    count: 3,    text: '3м',    title: '3 мес'},
      {    type: 'month',    count: 6,    text: '6м',    title: '6 мес'},
      {    type: 'ytd',    text: 'СНГ',    title: 'С начала года'},
      {    type: 'year',    count: 1,    text: '1г',    title: '1 год'},
      {    type: 'all',    text: 'Все',    title: 'Показать всё'}]
  },
  lang: {

    shortMonths: [
      'Янв', 'Фев', 'Мар', 'Апр',
      'Май', 'Июн', 'Июл', 'Авг',
      'Сен', 'Окт', 'Ноя', 'Дек'
    ],
    weekdays:['Вс','Пн','Вт','Ср','Чт','Пт','Сб']
  }
});

StockCharts(HighCharts);



export default {
  name: "StockChart",

  components: {
    VueHighcharts,
  }
}
</script>
<script setup>
import { Notify } from 'quasar'
import { useGlobalStore } from 'stores/global'
const globalStore = useGlobalStore()
import {getAssetByKey,getOrders} from "src/helpers/erachainHelpers"
import { useEraStore } from 'stores/eraChain'
const API_URL =process.env.API_URL
import {era} from 'boot/erachain'
import axios from 'axios'
const eraStore = useEraStore()
import {ref, computed, watch} from "vue";
import {useRouter} from "vue-router"

import { useAccountStore } from 'stores/account'
import {api} from "boot/axios";
const accountStore = useAccountStore()

const router = useRouter()


const props = defineProps({
  tradePair: Object
})




const assets = computed(()=>{
  return eraStore.assets
})

const balances = computed(()=>{
  return accountStore.balances
})


let orders=ref([])
let first_asset=ref({})
let second_asset=ref({})
let trade_type=ref('buy')
let amount=ref(null)
let unit_price=ref(null)
let total=ref(null)
let confirmModalVisible=ref(false)
let is_loading=ref(false)
let orderInfo = ref({})
let minAmount = ref(0)
let totalSell = ref(0)
let totalBuy = ref(0)
let pair_data = ref({})
let trades = ref([])
let trades_loading = ref(true)
let chartOptions = ref({
  rangeSelector: {
    selected: 1,
  },

  title: {
    text: "",
  },
  series: [
    {
      name: "",
      data: [

      ],
    },
  ],
});


const errors = {
  11:'Недостаточно средств на балансе',
  66:'Минимальная стоимость ордера 280руб'
}



function amountChange(){
  console.log(amount.value)
  if (!amount.value){
    total.value = null
    unit_price.value = null
  }
  if (unit_price.value){
    total.value = parseFloat(amount.value * unit_price.value).toFixed(5)
  }
}
function clearData(){
  totalBuy.value = 0
  totalSell.value =0
  trade_type.value ='buy'
  amount.value =null
  unit_price.value =null
  total.value =null
  chartOptions.value.series[0].data = []
  trades.value = []

}

watch(trade_type, (val) => {
  amount.value =null
  unit_price.value =null
  total.value =null

})

function priceChange(){
  console.log(first_asset.value)
  console.log(second_asset.value)
  console.log(minAmount.value)

  // if (minAmount.value>0 && trade_type.value ==='sell'){
  //   console.log(first_asset.value.course / second_asset.value.course)
  //   if (unit_price.value > first_asset.value.course / second_asset.value.course){
  //     console.log('more')
  //   }else {
  //     unit_price.value = first_asset.value.course / second_asset.value.course
  //   }
  // }
  if (minAmount.value>0 && trade_type.value ==='sell' && first_asset.value.key === 2 ){
    console.log(second_asset.value)
    //first_asset.value.course / second_asset.value.course
    if (unit_price.value >= minAmount.value){
      console.log('norm')
    }else {
      unit_price.value = minAmount.value //first_asset.value.course / second_asset.value.course
      console.log('dsf')
    }
  }

  if (amount.value){
    total.value = parseFloat(amount.value * unit_price.value).toFixed(5)
  }
}

function totalChange(){
  console.log(total.value)
  if (unit_price.value){
    amount.value =   parseFloat(total.value / unit_price.value).toFixed(5)
  }
  // if (amount.value){
  //   unit_price.value =   total.value * amount.value
  //   // unit_price.value = amount.value * unit_price.value
  // }
}

async function createOrder(){
  const keyPair = await eraStore.getKeyPair()

  const haveAssetKey = trade_type.value === 'buy' ?   second_asset.value.key : first_asset.value.key
  const haveAmount = trade_type.value === 'buy' ? total.value : amount.value
  const wantAssetKey = trade_type.value === 'buy' ?  first_asset.value.key : second_asset.value.key
  const wantAmount = trade_type.value === 'buy' ? amount.value : total.value

  console.log('have',haveAssetKey)
  console.log('want',wantAssetKey)
  console.log('haveAmount',haveAmount)
  console.log('wantAmount',wantAmount)

    await era.tranRawOrder(
    keyPair,
    'name',
    haveAssetKey,
    haveAmount,
    wantAssetKey,
    wantAmount,
    true
  )
    .then((info) => {
      orderInfo.value = info
      console.log(orderInfo.value)
      confirmModalVisible.value = true
    });
}

async function signTransaction(){
  is_loading.value = !is_loading.value
  const result = await era.broadcast64(orderInfo.value.raw)
  console.log(result)
  if (result.error){
    Notify.create({
      color:'negative',
      message: errors[result.error],
      // actions: [
      //   { label: 'Купить',noCaps:true, color: 'white', handler: () => { router.push(`/wallet/buy?asset=${first_asset.value.key}&amount=0`) } }
      // ]
    })
  }else {
    Notify.create({
      color:'info',
      message: 'Транзакция отправлена в сеть',
    })
  }

  confirmModalVisible.value = false
  is_loading.value = !is_loading.value

}


function buyOrderClick(order){
  amount.value = order.pairAmount
  unit_price.value = order.pairPrice
  total.value = parseFloat(order.pairAmount * order.pairPrice).toFixed(5)
  trade_type.value='sell'
}

function sellOrderClick(order){
  amount.value = parseFloat(order.pairAmount).toFixed(5)
  unit_price.value = order.pairPrice
  total.value = parseFloat(order.pairAmount * order.pairPrice).toFixed(5)
  trade_type.value='buy'
}

async function getAssets(){
  trades_loading.value = true
  //globalStore.toggleLoadingState()
  // first_asset.value = await getAssetByKey(props.tradePair['0'])
  // second_asset.value = await getAssetByKey(props.tradePair['1'])
  //console.log('props.tradePair[0]',props.tradePair['0'])

  first_asset.value = eraStore.assets.find(x=>x.key===props.tradePair['0'])
  second_asset.value = eraStore.assets.find(x=>x.key===props.tradePair['1'])
  //console.log(props.tradePair)
  orders.value = await getOrders(props.tradePair['0'],props.tradePair['1'])

  //console.log('first_asset',first_asset.value)
  //console.log(second_asset.value)

  minAmount.value = second_asset.value.min_trade_price
  //console.log(orders)
  for (let x of orders.value.have){
    totalSell.value += parseFloat(x.leftHave)
  }
  for (let x of orders.value.want){
    totalBuy.value += parseFloat(x.leftWant)
  }

  const resp = await api.get(`/api/settings/volume?q_key=${second_asset.value.key}&b_key=${first_asset.value.key}`)
  //console.log(resp.data)
  pair_data.value = resp.data
  //console.log(pair_data.value)
  //console.log(totalSell.value)
  //console.log(totalBuy.value)
  const resp_trades = await api.get(`https://scan.rupay.pro/apiexchange/trades/${first_asset.value.key}/${second_asset.value.key}`)
  for (let x of resp_trades.data.reverse()){
    trades.value.push([x.timestamp,x.price])
  }
  chartOptions.value.series[0].data = trades.value
  chartOptions.value.series[0].name = `${first_asset.value.name}/${second_asset.value.name}`
  console.log(trades.value)
  trades_loading.value = false
  //globalStore.toggleLoadingState()
}


</script>
<style lang="sass">
.bye-btn
  border-radius: unset
  border-bottom-left-radius: 28px
  border-top-left-radius: 28px
  line-height: 130%
  font-size: 14px
.sell-btn
  border-radius: unset
  border-bottom-right-radius: 28px
  border-top-right-radius: 28px
  line-height: 130%
  font-size: 14px

.vol-bg
  position: absolute
  right: 0
  bottom: 0
  top: 0
  z-index: -1
  &.sell
    background-color: $red-13
.text-10
  font-size: 14px
  position: relative
  z-index: 20
.orders-grid
  display: grid
  grid-template-columns: 1fr
  grid-gap: 10px
.q-linear-progress__track
  background: white
.price-green-color
  color: #42a37a
.price-red-color
  color: #cf4366
.vol-color
  color: #2f2325


.buy-pr
  & .q-linear-progress__model
    background: #e8f9f1
.sell-pr
  & .q-linear-progress__model
    background: #feeaec

</style>
