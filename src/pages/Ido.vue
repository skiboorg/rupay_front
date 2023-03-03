<template>
  <q-page padding>
    <section class="marketplace">

      <div class="container">
        <h3 class="main-grid__text_top_heading">
          <span>Раздел  </span><br />
          в разработке
        </h3>

        <div class="" v-if="false">
          <h3 class="main-grid__text_top_heading">
            <span>Добро пожаловать  </span><br />
            в раздел IDO
          </h3>
          <p class="text-h6 text-bold">Что это такое?</p>
          <p class="text-body1"><span class="text-bold">IDO (initial dex offering) — первое публичное размещение токенов на децентрализованных (dex)
          биржах.</span>Разработчики привлекают деньги инвесторов при поддержке децентрализованных бирж, которые используют
            пулы ликвидности. <span class="text-bold">Инвесторы могут быстро приобретать выходящие в оборот токены по низким ценам, зарабатывая на
          последующем росте курса.</span></p>
          <p class="text-body1">Проще говоря - на данной странице у вас есть возможность принять участие в новых проектах,  путем инвестирования OLF в эти стартапы.</p>
          <p class="text-body1">Что для этого необходимо и как это работает?</p>
          <p class="text-body1">Для того, чтобы получить доступ к стартапам на нашей площадке необходимо иметь неснижаемый баланс на IDO-кошельке в размере 100 OLF.  При таком балансе вы получаете право на первоочередное приобретение токенов по самой низкой цене на этапе Pre-sale.</p>
          <p class="text-body1">Если ваш баланс составляет 100 OLF, то вы получаете право на участие в 1 (Одном) Pre-sale в счет этого баланса (на сумму от 0 до 100 OLF в эквиваленте цены желаемого токена). Количество стартапов не ограниченно, но для доступа ко всем баланс должен быть не менее 100 OLF.</p>


          <div class="" v-if="current_address && eraStore.seed">

            <div class="row q-col-gutter-md">
              <div class="col-12 col-md-6">
                <p class="text-h6 text-bold">Ваш баланс в пуле: {{parseFloat(own_pool.amount).toFixed(5)}} OLF</p>
                <p class="text-h6 text-bold">Ваш баланс сети RUPAY: {{parseFloat(olf_balance).toFixed(5)}} OLF</p>
                <q-input v-model="sendInfo.amount" class="q-mb-md" type="number" label="Сумма пополнения"  outlined rounded/>

                <q-btn unelevated rounded color="primary"
                       @click="getFee"
                       :disable = "!sendInfo.amount || sendInfo.amount > olf_balance"
                       no-caps class="q-pa-md" label="Пополнить счет IDO пула"/>
              </div>
              <div class="col-12 col-md-6">
                <div v-if="asset.length>0">
                  <p  class="text-h6 text-bold">Новый проект {{asset[0].name}}</p>
                  <p  class="text-h6 text-bold">Цена {{asset_in_olf_course}} OLF</p>
                  <q-input class="q-mb-md" type="number" rounded outlined v-model="want_to_bye_asset" :label="`Сколько ${asset[0].name} хотите купить`">
                    <template  v-slot:append>
                      <q-btn @click="want_to_bye_asset = parseFloat(own_pool.amount / asset_in_olf_course).toFixed(5) " size="10px" flat rounded label="Купить на все OLF"/>
                    </template>
                  </q-input>
                  <q-btn @click="buy" v-if="want_to_bye_olf"
                         unelevated rounded class="q-pa-md"
                         color="primary" no-caps
                         :disable="want_to_bye_olf>parseFloat(own_pool.amount).toFixed(5) "
                         :label="`Купить на ${want_to_bye_olf} OLF`"/>

                </div>

                <p v-else class="text-h6 text-bold">Новых проектов пока нет </p>
              </div>
            </div>


          </div>
          <div class="" v-else>
            <p class="text-h6 text-bold">Вы не вошли в кошелек RUPAY</p>
          </div>
        </div>
        </div>



    </section>

  </q-page>

</template>
<script setup>
import axios from 'axios'


import {computed, ref, onBeforeMount} from "vue";
import { useAccountStore } from 'stores/account'
const accountStore = useAccountStore()
import {EraChain} from "erachain-js-api";
import {era} from "boot/erachain";
import {useNotify} from "src/helpers/utils";

import { useEraStore } from 'stores/eraChain'
import {api} from "boot/axios";
const eraStore = useEraStore()

let is_have_account = ref(false)
let assets = ref([])
let own_pool = ref({})
let olf_balance = ref({})

const is_loading=ref(false)
const want_to_bye_asset=ref(null)


const sendInfo = ref({
  amount : null,
  address :'7JXmTnbwuDnpqQ3NwxwzhfGgDk223j13eP',
  title :'Пополнение баланса IDO пула',
  message :'Пополнение баланса IDO пула',
  encrypted : false,
  fee:0,
  raw:0,
})
const want_to_bye_olf = computed(()=>{
  if(want_to_bye_asset.value){
    if(own_pool.value.amount>0){
      return parseFloat(want_to_bye_asset.value * asset_in_olf_course.value).toFixed(5)
    }else{
      return null
    }


  }
})

const asset = computed(()=>{
  return assets.value.filter(x=>x.is_in_ido)
})

const olf_course = computed(()=>{
  return assets.value.find(x=>x.key===2).course

})
const asset_in_olf_course = computed(()=>{
  if (asset.value.length>0){
    return parseFloat(asset.value[0].course / olf_course.value).toFixed(5)

  }

})

const current_address = computed(()=>{
  try{
    return accountStore.addresses[accountStore.currentAddressIdx].address
  }
  catch (e) {
    return false
  }

})
onBeforeMount( async ()=>{
  const response_assets = await api.get(`/api/settings/assets`)
  assets.value = response_assets.data
  if (current_address.value){
    await getData()
  }

})



async function buy() {
  is_loading.value = !is_loading.value
  const response = await api.post('/api/settings/ido_pool_buy',{
    address:current_address.value,
    amount_olf:want_to_bye_olf.value,
    amount_asset:want_to_bye_asset.value,
    asset_key:asset.value[0].key
  })
  await getData()
  if (response.data.success){
    useNotify('positive',response.data.message)

  }else {
    useNotify('negative',response.data.message)
}
  want_to_bye_asset.value=null
  is_loading.value = !is_loading.value
}
async function getData() {
  is_loading.value = !is_loading.value
  const response = await api.get(`/api/settings/ido_pool?address=${current_address.value}`)
  own_pool.value = response.data
  const resp = await axios.get(`https://scan.rupay.pro/api/addressassetbalance/${current_address.value}/2`)
  olf_balance.value = resp.data[0][1]

  is_loading.value = !is_loading.value
}


async function getFee(){
  is_loading.value = !is_loading.value
  const isBase64 = true
  const keys = await eraStore.getKeyPair()
  console.log(eraStore.seed)
  const keyPair = new EraChain.Type.KeyPair(keys)
  const assetInfo = {
    assetKey: 2,
    amount: parseFloat(sendInfo.value.amount).toFixed(5),
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
    await send()
  }else {
    useNotify('negative',result.error.message)
  }
  is_loading.value = !is_loading.value
}

async function send(){

    const result = await era.broadcast64(sendInfo.value.raw)
    console.log(result)
    if (result.error){
      useNotify('negative',result.message)

    }else {
      useNotify('positive','Баланс пополнен')
      useNotify('info','Транзакция создана')
      const resp = await api.post('/api/settings/ido_pool_add',{
        address:current_address.value,
        amount:sendInfo.value.amount
      })
      sendInfo.value.amount = null
      await getData()

    }




}
</script>
<style lang="sass">
.marketplace
  padding-top: 50px
</style>
