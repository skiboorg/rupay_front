<template>
  <page>
    <page-body >
      <page-header>
      </page-header>


      <q-tabs
        v-model="tab"
        class=" text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        v-touch-swipe

      >
<!--        <q-tab no-caps class="bg-white" name="exchange" label="Обмен" />-->
        <q-tab  no-caps class="bg-white" name="market" label="Биржа" />
        <q-tab  no-caps class="bg-white" name="own_orders" label="Мои оффера" />

      </q-tabs>

      <q-separator />
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="exchange" class="no-padding">
          <q-scroll-area style="height: 85vh;">
          <q-list separator>
            <q-item clickable
                    v-for="(exchange_asset,index) in exchange"
                    @click="selectedExchange=index,exchangeModalVisible=true"
                    :key="index"
                    v-show="balances_ids.includes(String(exchange_asset.have))"
            >
              <q-item-section >
                <div class="flex items-center justify-start">
                  <q-avatar rounded>
                    <img :src="`/asset_icons/${assets.find(x=>x.key===exchange_asset.have).icon}`">
                  </q-avatar>
                  <q-icon name="las la-long-arrow-alt-right" size="30px"/>
                  <q-avatar rounded>

                    <img :src="`/asset_icons/${assets.find(x=>x.key===exchange_asset.want).icon}`">
                  </q-avatar>
                </div>
              </q-item-section>
              <q-item-section >
                <q-item-label class="text-weight-medium">
                  {{assets.find(x=>x.key===exchange_asset.have).name}}/{{assets.find(x=>x.key===exchange_asset.want).name}}
                </q-item-label>
                <!--            <q-item-label caption v-if="exchange_asset.comission === 0">-->
                <!--              {{assets.find(x=>x.key===exchange_asset.to).course/10}}-->
                <!--              /-->
                <!--              {{assets.find(x=>x.key===exchange_asset.from).course /10}}-->
                <!--            </q-item-label>-->
                <q-item-label caption >
                    1 / {{exchange_asset.price}}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
          </q-scroll-area>
        </q-tab-panel>
        <q-tab-panel name="market" class="no-padding">
          <div class="q-pa-md">
            <q-input dense outlined rounded v-model="filter" label="Поиск">
              <template v-slot:prepend>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
          <q-separator/>

          <q-scroll-area style="height: 75vh;">

          <q-list separator>

            <q-item clickable
                    v-for="(item,index) in Object.keys(filtered_trade_pairs).length>0 ? filtered_trade_pairs : trade_pairs"
                    @click="current_pair=item, globalStore.toggleTradeModalVisible()"
                    :key="index">
              <q-item-section class="text-weight-medium">
                {{index.replace('_',' / ')}}
              </q-item-section>
              <q-item-section  class="text-caption">
<!--                <span v-if="trade_pairs_24[index]">{{trade_pairs_24[index].quote_volume}} {{index.split('_')[1]}}</span>-->
                <span v-if="volumes.filter(x=> x.pair === index).length>0">
                  <span class="text-weight-medium text-grey-9">за 24ч</span> :
                  <q-badge rounded color="grey-3" text-color="dark"> {{parseFloat(volumes.find(x=> x.pair === index).base_volume_24).toFixed(2)}} / {{parseFloat(volumes.find(x=> x.pair === index).quote_volume_24).toFixed(2)}}</q-badge>
                 <br>
                   <span class="text-weight-medium text-grey-9">за 7д</span> :
                  <q-badge rounded color="grey-3" text-color="dark">{{parseFloat(volumes.find(x=> x.pair === index).base_volume_1w).toFixed(2)}} / {{parseFloat(volumes.find(x=> x.pair === index).quote_volume_1w).toFixed(2)}}</q-badge>
                  <br>
                    <span class="text-weight-medium text-grey-9">за 1м</span> :
                  <q-badge rounded color="grey-3" text-color="dark"> {{parseFloat(volumes.find(x=> x.pair === index).base_volume_1m).toFixed(2)}} / {{parseFloat(volumes.find(x=> x.pair === index).quote_volume_1m).toFixed(2)}}</q-badge>

                </span>

              </q-item-section>

            </q-item>
          </q-list>
          </q-scroll-area>
        </q-tab-panel>
        <q-tab-panel name="own_orders" class="no-padding">
          <q-tabs
            v-model="orderTab"
            v-touch-swipe

            align="justify"
          >
            <q-tab no-caps class="bg-white text-info" name="active" label="Активные" />
            <q-tab  no-caps class="bg-white text-positive" name="done" label="Исполненные" />
            <q-tab  no-caps class="bg-white text-negative" name="cancel" label="Отмененные" />
          </q-tabs>
          <q-separator />
          <q-scroll-area style="height: 83vh;">



            <q-tab-panels v-model="orderTab" animated>
              <q-tab-panel name="active" class="no-padding">
                <q-list separator>
                  <q-item v-for="(item,index) in own_orders_active" :key="index">
                    <q-item-section>
                      <p class="no-margin text-caption text-weight-bold">{{assets.find(x=>x.key===item.wantAssetKey).name}} / {{assets.find(x=>x.key===item.haveAssetKey).name}}</p>
                      <p class="no-margin text-caption">Кол-во {{item.amountHave}}</p>
                      <p class="no-margin text-caption">Цена {{item.price}}</p>
                      <p class="no-margin text-caption">Итого {{item.amountWant}}</p>
                      <p class="no-margin text-caption">Осталось {{item.leftWant}}</p>
                      <p class="no-margin text-caption">Блок <a target="_blank"
                                                                :href="`https://scan.rupay.pro/index/blockexplorer.html?tx=${item.seqNo}&lang=ru`">{{item.seqNo}}</a> </p>

                    </q-item-section>
                    <q-item-section>
                        <q-btn  rounded color="negative"
                                :loading="is_loading"
                                @click="cancelOrder(item.seqNo)" unelevated outline no-caps size="12px" label="Отменить оффер"/>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-tab-panel>
              <q-tab-panel name="done" class="no-padding">
                <q-list separator>
                  <q-item v-for="(item,index) in own_orders_done" :key="index">
                    <q-item-section>
                      <p class="no-margin text-caption text-weight-bold">{{assets.find(x=>x.key===item.wantAssetKey).name}} / {{assets.find(x=>x.key===item.haveAssetKey).name}}</p>
                      <p class="no-margin text-caption">Кол-во {{item.amountHave}}</p>
                      <p class="no-margin text-caption">Цена {{item.price}}</p>
                      <p class="no-margin text-caption">Итого {{item.amountWant}}</p>
                      <p class="no-margin text-caption">Осталось {{item.leftWant}}</p>
                      <p class="no-margin text-caption">Блок <a target="_blank"
                                                                :href="`https://scan.rupay.pro/index/blockexplorer.html?tx=${item.seqNo}&lang=ru`">{{item.seqNo}}</a> </p>

                    </q-item-section>

                  </q-item>
                </q-list>
              </q-tab-panel>
              <q-tab-panel name="cancel" class="no-padding">
                <q-list separator>
                  <q-item v-for="(item,index) in own_orders_cancel" :key="index">
                    <q-item-section>

                      <p class="no-margin text-caption text-weight-bold">{{assets.find(x=>x.key===item.wantAssetKey).name}} / {{assets.find(x=>x.key===item.haveAssetKey).name}}</p>
                      <p class="no-margin text-caption">Кол-во {{item.amountHave}}</p>
                      <p class="no-margin text-caption">Цена {{item.price}}</p>
                      <p class="no-margin text-caption">Итого {{item.amountWant}}</p>
                      <p class="no-margin text-caption">Осталось {{item.leftWant}}</p>
                      <p class="no-margin text-caption">Блок <a target="_blank"
                                                                :href="`https://scan.rupay.pro/index/blockexplorer.html?tx=${item.seqNo}&lang=ru`">{{item.seqNo}}</a> </p>

                    </q-item-section>

                  </q-item>
                </q-list>
              </q-tab-panel>
            </q-tab-panels>

          </q-scroll-area>
        </q-tab-panel>
      </q-tab-panels>
      <q-dialog v-model="exchangeModalVisible" persistent transition-show="scale" transition-hide="scale" @before-show="clearForm">
        <q-card  style="width: 100%">
          <q-card-section class="bg-primary text-white" >
            <div class="text-h6">Обмен
              {{assets.find(x=>x.key===exchange[selectedExchange].have).name }}
              <q-icon name="las la-long-arrow-alt-right" size="30px"/>
              {{assets.find(x=>x.key===exchange[selectedExchange].want).name }}
            </div>
          </q-card-section>

          <q-card-section >
            <p class="caption q-mb-sm">Отдам
              {{assets.find(x=>x.key===exchange[selectedExchange].have).name }}
              (баланс {{balances[exchange[selectedExchange].have][0][1]}})
            </p>
            <q-input class="q-mb-md" dense outlined autofocus v-model="have_amount" @keyup="calcHaveValue"  type="number" />
            <p class="caption q-mb-sm">Получу {{assets.find(x=>x.key===exchange[selectedExchange].want).name }}</p>
            <q-input class="q-mb-md" dense outlined v-model="want_amount" @keyup="calcWantValue" type="number" />
            <p class="no-margin text-negative text-center" v-if="orderInfo.raw">Комиссия : {{orderInfo.fee}}</p>
          </q-card-section>

          <q-card-actions align="right" >
            <q-btn no-caps unelevated color="negative" :loading="is_loading" outline  label="Отмена" v-close-popup />

            <q-btn v-if="!orderInfo.raw" no-caps unelevated color="positive" :disable="!have_amount || !want_amount" :loading="is_loading" @click="createOrder" label="Запросить комиссию" />
            <q-btn v-else no-caps unelevated color="positive" :loading="is_loading" @click="signTransaction" label="Обменять" />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <TradeModal :trade-pair="current_pair"/>
      <q-dialog v-model="confirmModalVisible" persistent transition-show="scale" transition-hide="scale" >
        <q-card  style="width: 100%">
          <q-card-section class="bg-primary text-white" >
            Подтверждение транзакции отмены ордера
          </q-card-section>

          <q-card-section >
            <q-list separator dense>


              <q-item>
                <q-item-section>Комиссия</q-item-section>
                <q-item-section>
                  {{orderInfo.fee}}

                </q-item-section>
              </q-item>
            </q-list>

          </q-card-section>
          <q-card-actions align="right" >
            <q-btn no-caps unelevated color="grey-6" :loading="is_loading" label="Отмена" v-close-popup />
            <q-btn no-caps unelevated
                   :loading="is_loading"
                   @click="signTransaction"
                   label="Ок"
                   color="positive" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </page-body>
  </page>
</template>
<script>
import TradeModal from "components/Modal/Trade";

export default {
  components:{TradeModal}
}
</script>

<script setup>
import {findOrdersByAddress} from "src/helpers/erachainHelpers"
import { useEraStore } from 'stores/eraChain'
import {era} from 'boot/erachain'
import {api} from 'boot/axios'

const eraStore = useEraStore()

import { useAccountStore } from 'stores/account'
const accountStore = useAccountStore()

import { useGlobalStore } from 'stores/global'
const globalStore = useGlobalStore()

import {computed,onBeforeMount,ref, watch} from "vue";
import {Notify} from "quasar";

const selectedExchange = ref(null)
const exchangeModalVisible = ref(false)
const is_loading = ref(false)
const have_amount = ref(null)
const filter = ref(null)
const tab = ref('market')
const orderTab = ref('active')
const want_amount = ref(null)
const current_pair = ref({})
const own_orders = ref([])
const own_orders_active = ref([])
const own_orders_done = ref([])
const own_orders_cancel = ref([])
const filtered_trade_pairs = ref({})
let orderInfo = ref({})
let confirmModalVisible=ref(false)
let volumes = ref([])

watch(filter, (val) => {
  if (val){
    let temp = {}
    console.log(trade_pairs.value)
    let filtered = Object.keys(trade_pairs.value).filter(key => key.toUpperCase().includes(val.toUpperCase()))
    console.log(filtered)
    for (let x of filtered){
      console.log(trade_pairs.value[x])
      temp[x] = trade_pairs.value[x]

    }
    filtered_trade_pairs.value = temp
    console.log(temp)

  }else {
    filtered_trade_pairs.value={}
  }
})

watch(have_amount, (amount) => {
  if (amount > balances.value[exchange.value[selectedExchange.value].have][0][1]){
    have_amount.value = balances.value[exchange.value[selectedExchange.value].have][0][1]
    want_amount.value = 0
    calcWantValue()
  }
})

async function cancelOrder(seqNo){
  is_loading.value = !is_loading.value
  const keyPair = await eraStore.getKeyPair()
  const tx = await era.tranBySeq(seqNo)
  console.log(tx)
  const result = await era.tranRawCancelOrder(
    keyPair,
    'name',
    tx.signature,
  true)
  orderInfo.value = result
  console.log(orderInfo.value)
  confirmModalVisible.value = true
  is_loading.value = !is_loading.value
}

async function signTransaction(){
  is_loading.value = !is_loading.value
  console.log(orderInfo.value.raw)
  const result = await era.broadcast64(orderInfo.value.raw)
  console.log(result)
  confirmModalVisible.value = false
  is_loading.value = !is_loading.value
}

// function calcToValue(){
//   let amount = from_amount.value
//   let exchange_asset = exchange.value[selectedExchange.value]
//   let one_unit_price = assets.value.find(x=>x.key===exchange_asset.from).course /assets.value.find(x=>x.key===exchange_asset.to).course
//   let comission = exchange_asset.comission
//   let without_comission = amount * one_unit_price
//   console.log(without_comission)
//   to_amount.value = without_comission - comission
// }
//
//
// function calcFromValue(){
//   let amount = to_amount.value
//   let exchange_asset = exchange.value[selectedExchange.value]
//   let one_unit_price = assets.value.find(x=>x.key===exchange_asset.to).course /assets.value.find(x=>x.key===exchange_asset.from).course
//   let comission = exchange_asset.comission
//   let without_comission = amount * one_unit_price
//   from_amount.value = without_comission + (without_comission * comission)
// }

function calcHaveValue(){
  let exchange_asset = exchange.value[selectedExchange.value]
  want_amount.value = have_amount.value * exchange_asset.price
}

function calcWantValue(){
  let exchange_asset = exchange.value[selectedExchange.value]
  have_amount.value = want_amount.value * exchange_asset.reversePrice
}

function clearForm(){
  have_amount.value=null
  want_amount.value=null
  orderInfo.value = {}
}

async function createOrder(){
  is_loading.value = !is_loading.value
  const keyPair = await eraStore.getKeyPair()
  let exchange_asset = exchange.value[selectedExchange.value]
  const haveAssetKey = exchange_asset.have
  const haveAmount = have_amount.value
  const wantAssetKey = exchange_asset.want
  const wantAmount = want_amount.value

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
    });
  is_loading.value = !is_loading.value
}

const assets = computed(()=>{
  return eraStore.assets
})

// const exchange = computed(()=>{
//   return eraStore.exchange
// })

const exchange = computed(()=>{
  return eraStore.marketExchange
})

const trade_pairs = computed(()=>{
  return eraStore.trade_pairs
})


const current_address = computed(()=>{
  return accountStore.addresses[accountStore.currentAddressIdx].address
})

const own_assets = computed(()=>{
  return accountStore.assets
})

const balances = computed(()=>{
  return accountStore.balances
})
const balances_ids = computed(()=>{
  return Object.keys(balances.value)
})

onBeforeMount( async ()=>{
 //await eraStore.getAssetsCourse()
  globalStore.toggleLoadingState()

  const resp = await api.get('/api/settings/volumes')
  console.log(resp.data)
  volumes.value = resp.data

 await eraStore.getMarketExchangeOrders()
 await eraStore.setTradePairs()
  own_orders.value = await findOrdersByAddress(current_address.value)
  let temp = []
  for (let xx of own_orders.value){
    if (assets.value.find(x=>x.key===xx.haveAssetKey) && assets.value.find(x=>x.key===xx.wantAssetKey)){
      temp.push(xx)
    }
  }

  own_orders_active.value = temp.filter(x=>x.status === 1 || x.status === 2)
  own_orders_done.value = temp.filter(x=>x.status === 3)
  own_orders_cancel.value = temp.filter(x=>x.status === 4)

  globalStore.toggleLoadingState()

})


</script>
