<template>
  <q-page>
    <page-header></page-header>
    <div style="height: 16px"></div>
      <div class="page-body--top flex column items-center justify-evenly">


        <div class="text-center q-mb-md">
          <q-avatar size="50px" class="q-mr-md">
            <img :src="API_URL+asset.iconURL" alt="">
          </q-avatar>

        </div>

        <div class="text-center q-mb-md">
          <p class="text-bold text-h6 text-dark no-margin" :class="{blur:$global.isBlur}">{{balance}} {{asset.name}}</p>
          <p class="text-weight-medium text-body1 text-dark no-margin" :class="{blur:$global.isBlur}">~ {{$filters.convertAmount(rub_balance)}} &#8381;</p>
        </div>

        <div style="display: grid;grid-template-columns: 1fr 1fr 1fr 1fr; grid-gap: 10px" class=" full-width text-dark">


          <q-btn stack @click="globalStore.toggleSendAssetModalVisible()" color="primary" unelevated no-caps>
            <q-icon color="white" size="22px" name="las la-upload"/>
            <p class="no-margin text-caption lh100">Отправить<br>в сети RUPAY</p>
          </q-btn>

          <q-btn stack @click="$router.push(`/wallet/receive?asset=${asset.key}&amount=0`)" color="primary" unelevated no-caps>
            <q-icon color="white" size="22px" name="las la-download"/>
            <p class="no-margin text-caption lh100">Получить<br>в сети RUPAY</p>
          </q-btn>


          <q-btn stack @click="$router.push({name: 'wallet_exchange'})" color="primary" unelevated no-caps>
            <q-icon color="white" size="22px" name="las la-exchange-alt"/>
            <p class="no-margin text-caption">Обмен</p>
          </q-btn>

          <q-btn v-if="asset.key===1643" stack @click="$router.push({name: 'send_rub_to_rolf'})" color="primary" unelevated no-caps>
            <q-icon color="white" size="22px" name="las la-puzzle-piece"/>
            <p class="no-margin text-caption lh100">Отправить на<br>РОЛФ</p>
          </q-btn>

          <q-btn v-if="asset.key===2" stack @click="$router.push({name: 'buy_part'})" color="primary" unelevated no-caps>
            <q-icon color="white" size="22px" name="las la-puzzle-piece"/>
            <p class="no-margin text-caption lh100">Внести паевой<br>взнос</p>
          </q-btn>

        </div>
      </div>
      <div class="">
        <div class="flex items-center justify-between q-pa-md ">
          <p class=" q-mb-none">История транзакций</p>
          <q-icon @click="offset =0 ,getTransactions(50,offset)" name="las la-sync" color="primary" size="26px" :class="{rotate:is_updating}"></q-icon>
        </div>
        <q-scroll-area style="height: 50vh; width: 100%;">
          <q-list style="width: 100%" separator>
            <div class=""
                 v-for="(transaction,index) in transactions"
                 :key="index">
              <p class="asset-date q-pa-md bg-grey-2 q-mb-none">{{index}}</p>
              <q-item
                v-for="(transaction_row,index1) in transaction"
                clickable
                style="z-index: -1"
                @click="transactionInfo=transaction_row, globalStore.toggleTransactionInfoModalVisible()"
                :key="index1">
                <q-item-section avatar>
                  <q-icon v-if="current_address !== transaction_row.creator && Math.sign(transaction_row.amount)===1" color="positive" name="las la-arrow-down"/>
                  <q-icon v-else color="negative" name="las la-arrow-up"/>
                </q-item-section>
                <q-item-section >
                  <q-item-label overline v-if="transaction_row.message">{{transaction_row.message}}</q-item-label>
                  <q-item-label overline v-else>{{transaction_row.actionName}}</q-item-label>
                  <q-item-label caption>
                  <span style="max-width: 70%" class="ellipsis inline-block">
<!--                    {{current_address === transaction_row.creator}}-->
                    <!--                    {{Math.sign(transaction_row.amount)===1 ? 'от' : 'кому'}} {{transaction_row.creator}}-->
                    {{current_address !== transaction_row.creator && Math.sign(transaction_row.amount)===1 ? 'от' : 'кому'}}
                    {{current_address !== transaction_row.creator && Math.sign(transaction_row.amount)===1 ? transaction_row.creator : transaction_row.recipient}}
                  </span>
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label caption>{{parseFloat(transaction_row.amount).toFixed(4)}}</q-item-label>
                </q-item-section>
              </q-item>
            </div>
          </q-list>

          <div v-if="!is_transactions_empty" class="text-center q-pa-md">
            <q-btn rounded  color="primary" label="Загрузить еще" :loading="is_updating" no-caps outline icon="add"  @click="loadMore"/>
          </div>
        </q-scroll-area>
      </div>

    <TransactionInfo :transaction-info="transactionInfo"/>
    <SendAssetModal :asset="asset" @close="getTransactions(50,0)"/>
  </q-page>

</template>
<script>
import TransactionInfo from "components/Modal/TransactionInfo";
import SendAssetModal from "components/Modal/SendAssetModal";
export default {
  components:{TransactionInfo,SendAssetModal}
}
</script>

<script setup>

import _, { map } from 'underscore';
import {computed, onBeforeMount, ref, onMounted} from "vue";
import {filterTransactionsByAssetName} from "src/helpers/erachainHelpers"

import { useGlobalStore } from 'stores/global'
const globalStore = useGlobalStore()

import { useAccountStore } from 'stores/account'
const accountStore = useAccountStore()

import {useRoute} from "vue-router"
const route = useRoute()

const API_URL =process.env.API_URL
let asset_key = ref(0)
let transactionInfo = ref({})
let transactions = ref([])
let is_updating = ref(false)

let offset = ref(0)


const current_address = computed(()=>{
  return accountStore.addresses[accountStore.currentAddressIdx].address
})
const is_transactions_empty = computed(()=>{
  return _.isEmpty(transactions.value)
})

const asset = computed(()=>{
  return accountStore.assets[asset_key.value]
})

const balance = computed(()=>{
  return accountStore.balances[asset.value.key][0][1]
})
const rub_balance = computed(()=>{
  return balance.value * asset.value.course
})

onMounted( async ()=>{
  // globalStore.toggleLoadingState()
  asset_key.value = route.params.asset_key
  await getTransactions(50,offset.value)
  // globalStore.toggleLoadingState()
})

async function getTransactions(limit,offset){
  is_updating.value = !is_updating.value
  const temp = await filterTransactionsByAssetName(current_address.value,asset.value.key,limit,offset)
  transactions.value = _.groupBy(temp, 'timestamp' );
  is_updating.value = !is_updating.value
}

async function loadMore (){
  offset.value += 50
  await getTransactions(50,offset.value)
}




</script>
<style lang="sass">
.asset-date
  position: sticky
  top: 0px
  z-index: 0
</style>
