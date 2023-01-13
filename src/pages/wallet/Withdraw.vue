<template>
  <page>
    <page-body class="q-px-md">
      <page-header>
      </page-header>
      <div class="" style="height: 60px"></div>

      <div  class="q-mb-lg">
        <q-scroll-area style="height: 85vh;">

          <q-select v-model="asset" outlined rounded dense options-dense :options="assets" option-label="name" label="Выберите актив*" class="q-mb-md"/>
          <div v-if="asset && can_withdrawal_asset">
            <div v-if="asset && asset.key===1643">
<!--              <p class="q-mb-sm text-negative ">Внимание! ФИО верифицированного пользователя должно совпадать с ФИО владельца карты.</p>-->
<!--              <p class="q-mb-sm text-negative">Срок вывода зависит от банка и может занимать до 5 рабочих дней. Комиссия на вывод 50 рублей +2%, удерживается из выводимой суммы</p>-->
<!--              <p class="q-mb-sm text-caption">Номер карты*</p>-->
<!--              <q-input class="q-mb-sm" rounded dense outlined  v-model="card" mask="#### #### #### ####" fill-mask="_" />-->
<!--              <p class="q-mb-sm text-caption">Название банка*</p>-->
<!--              <q-input class="q-mb-sm" rounded dense outlined  v-model="bank" />-->
<!--              <p class="q-mb-sm text-caption">ФИО получателя (владельца карты)*</p>-->
<!--              <q-input class="q-mb-sm" rounded dense outlined  v-model="fio" />-->

<!--              <q-option-group-->
<!--                class="q-mb-sm"-->
<!--                :options="options"-->
<!--                type="radio"-->
<!--                v-model="need_pay_13"-->
<!--              />-->

<!--              <div class="" v-if="need_pay_13">-->
<!--                <p class="q-mb-sm text-caption">ФИО*</p>-->
<!--                <q-input class="q-mb-sm" rounded dense outlined  v-model="fio_13" />-->
<!--                <p class="q-mb-sm text-caption">Телефон*</p>-->
<!--                <q-input class="q-mb-sm" rounded dense outlined  v-model="phone_13" mask="+7(###)### ## ##" fill-mask="_"/>-->
<!--                <p class="q-mb-sm text-caption">Паспорт (серия номер)*</p>-->
<!--                <q-input class="q-mb-sm" rounded dense outlined  v-model="passport_13" mask="#### ######" fill-mask="_"/>-->
<!--                <p class="q-mb-sm text-caption">Кем выдан*</p>-->
<!--                <q-input class="q-mb-sm" rounded dense outlined  v-model="vidan_13" />-->
<!--                <p class="q-mb-sm text-caption">Прописка*</p>-->
<!--                <q-input class="q-mb-sm" rounded dense outlined  v-model="propiska_13" />-->
<!--                <p class="q-mb-sm text-caption">ИНН*</p>-->
<!--                <q-input class="q-mb-sm" rounded dense outlined  v-model="inn_13" />-->
<!--                <p class="q-mb-sm text-caption">СНИЛС*</p>-->
<!--                <q-input class="q-mb-sm" rounded dense outlined  v-model="snils_13" />-->

<!--              </div>-->
<!--              <p class="q-mb-sm text-caption">Сумма вывода в рублях* (Ваш баланс <span>{{balances[1643] ? balances[1643][0][1] : '0'}}</span> RUB)</p>-->
<!--              <p class="q-mb-sm text-caption">Минимальная сумма вывода 2500 RUB</p>-->
<!--              <q-input class="q-mb-md" rounded dense outlined  v-model="sendInfo.amount" type="number" >-->
<!--                <template v-if="balances[1643]" v-slot:append>-->
<!--                  <q-btn @click="sendInfo.amount = balances[1643][0][1]" size="10px" flat rounded label="Вывести все"/>-->
<!--                </template>-->
<!--              </q-input>-->
<!--              <p class="q-mb-sm text-caption text-bold" v-if="need_pay_13">Вы получите: {{sendInfo.amount - (sendInfo.amount * 0.15 + 50)}} RUB</p>-->
<!--              <p class="q-mb-sm text-caption text-bold" v-else>Вы получите: {{sendInfo.amount - (sendInfo.amount * 0.02 + 50)}} RUB</p>-->

<!--              <q-btn color="primary" rounded :loading="is_loading" @click="send" :disable="(!sendInfo.amount || sendInfo.amount<2500) || !fio || !card || !bank" unelevated no-caps class="full-width q-py-md" label="Отправить"/>-->
              <p class="text-center text-bold">Вывод на карту временно не доступен, в связи с переоформлением расчетного счета, пока можете воспользоваться <router-link :to="{name:'p2p_index'}">P2P</router-link></p>
            </div>
            <div v-else>
              <div v-if="asset && asset.key===1048610">
                  <Avr/>
              </div>
              <div v-else-if="asset && asset.key===1048615">
                  <Mttl/>
              </div>
              <div v-else>
                <p class="q-mb-sm text-negative ">Сервис RUPAY не взимает комиссию за вывод, однако блокчейн выводимой сети взимает, на ваш счёт указанный для вывода поступит сумма за вычетом комиссии сети
                </p>
                <p class="q-mb-sm text-caption">Адрес в сети {{asset.description}} {{asset.name}}*</p>
                <q-input class="q-mb-sm" rounded dense outlined  v-model="address" />
                <p class="q-mb-sm text-caption">ФИО получателя*</p>
                <q-input class="q-mb-sm" rounded dense outlined  v-model="fio" />
                <p class="q-mb-sm text-caption">Сумма вывода (Ваш баланс <span>{{balances[asset.key] ? balances[asset.key][0][1] : '0'}}</span> {{asset.name}})</p>
                <p class="q-mb-sm text-caption">Минимальная сумма вывода {{5000 / asset.course}} {{asset.name}}</p>

                <q-input class="q-mb-md" rounded dense outlined  v-model="sendInfo.amount" type="number" >
                  <template v-if="balances[asset.key]" v-slot:append>
                    <q-btn @click="sendInfo.amount = balances[asset.key][0][1]" size="10px" flat rounded label="Вывести все"/>
                  </template>
                </q-input>
                <q-btn color="primary" rounded :loading="is_loading" @click="send" :disable="(!sendInfo.amount || sendInfo.amount< 5000 / asset.course)  || !fio || !address" unelevated no-caps class="full-width q-py-md" label="Отправить"/>

              </div>
            </div>
          </div>


          <div v-if="asset && !can_withdrawal_asset">
            <p class="text-center">Вывод средств доступен только <router-link style="color: inherit" to="/wallet/create_person">верифицированным</router-link> пользователям.</p>
          </div>

        </q-scroll-area>
      </div>
    </page-body>
  </page>

</template>
<script setup>


import Avr from "components/Withdrawal/Avr";
import Mttl from "components/Withdrawal/Mttl";

import {computed, ref,onBeforeMount} from "vue";

import { useAccountStore } from 'stores/account'
const accountStore = useAccountStore()
import { useEraStore } from 'stores/eraChain'
const eraStore = useEraStore()
import { era } from 'boot/erachain'
import axios from 'axios'
import {useNotify} from "src/helpers/utils";
import {EraChain} from "erachain-js-api";

let assets = ref([])

const all_assets = computed(()=>{
  return eraStore.assets
})

const sendInfo = ref({
  amount : '',
  // address :'73SB6ZgqkhX98WnqZRRNxhd9XGtmas2Btb',
  address :'7PsEDvVphCpXwk7NrZyAyHNR7d6Fp57Xcy',
  title :'Вывод',
  message :`Вывод`,
  encrypted : false,
  fee:0,
  raw:0,
})


let fio = ref(null)
let bank = ref(null)
let card = ref(null)
let is_loading = ref(false)
let amount = ref(null)
let asset = ref(null)
let address = ref(null)

let fio_13 = ref(null)
let phone_13 = ref(null)
let passport_13 = ref(null)
let vidan_13 = ref(null)
let propiska_13 = ref(null)
let inn_13 = ref(null)
let snils_13 = ref(null)

const need_pay_13 = ref(false)
const options = ref([
  { label: 'Оплатить подоходный налог 13%', value: true },
  { label: 'Я являюсь самозанятым налоги оплачиваю сам', value: false },

])
async function send(){
  is_loading.value = !is_loading.value
  // await api.post('/api/settings/payment_request',{
  //   code:code.value,
  //   wallet:current_address.value,
  //   fromWallet:fromWallet.value,
  //   currency:asset.value.name,
  //   amount:amount.value,
  // })
  await getFee()
}

const balances = computed(()=>{
  return accountStore.balances
})

const can_withdrawal_asset = computed(()=>{
  if (asset.value){
    if (asset.value.can_withdrawal_no_person){
      return true
    }else {
      if (person.value){
        return true
      }
    }
    return false
  }

})

const person = computed(()=>{
  return accountStore.verifyPersonData
})

async function getFee(){
  is_loading.value = !is_loading.value
  const isBase64 = true
  const keys = await eraStore.getKeyPair()
  const keyPair = new EraChain.Type.KeyPair(keys)
  const assetInfo = {
    assetKey: asset.value.key,
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
    await signTransaction()
  }else {
    useNotify('negative',result.error.message)
  }
  is_loading.value = !is_loading.value
}

async function signTransaction(){
  const result = await era.broadcast64(sendInfo.value.raw)
  console.log(result)
  if (result.error){
    useNotify('negative',result.message)
    is_loading.value = !is_loading.value
  }else {
    useNotify('info','Транзакция создана')
    let text = ``
    if (address.value){
      text = `ФИО введенное : ${fio.value}%0A
            ФИО в блокчейне ${person.value.name}%0A
            Адрес сети ${asset.value.name} : ${address.value}%0A
            Сумма в ${asset.value.name}: ${sendInfo.value.amount}%0A`
    }

    if (!address.value && !need_pay_13.value){
      text = `ФИО введенное : ${fio.value}%0A
            ФИО в блокчейне ${person.value.name}%0A
            Номер карты: ${card.value}%0A
            Банк: ${bank.value}%0A
            Сумма вывода в ${asset.value.name}: ${sendInfo.value.amount}%0A
            Сумма вывода в ${asset.value.name} - (2% + 50): ${sendInfo.value.amount - (sendInfo.value.amount * 0.02 + 50)}%0A
            Оплатить подоходный налог 13%: НЕТ`
    }
    if (need_pay_13.value && !address.value)
    {
      text = `ФИО введенное : ${fio.value}%0A
  ФИО в блокчейне ${person.value.name}%0A
  Номер карты: ${card.value}%0A
  Банк: ${bank.value}%0A
  Сумма вывода в ${asset.value.name}: ${sendInfo.value.amount}%0A
  Сумма вывода в ${asset.value.name} - (15% + 50): ${sendInfo.value.amount - (sendInfo.value.amount * 0.15 + 50)}%0A
  Оплатить подоходный налог 13%: ДА%0A
  ФИО: ${fio_13.value}%0A
  НОМЕР ТЕЛЕФОНА: ${phone_13.value}%0A
  ПАСПОРТ серия номер: ${passport_13.value}%0A
  Кем выдан: ${vidan_13.value}%0A
  Прописка: ${propiska_13.value}%0A
  ИНН: ${inn_13.value}%0A
  СНИЛС: ${snils_13.value}%0A`
    }


    await axios.get(`https://api.telegram.org/bot603507616:AAEmmGeaujFe_lqkw31HHSoh2EiAvVNtFA4/sendMessage?chat_id=-542426502
  &text=${text}`
    )
    fio.value=null
    card.value=null
    bank.value=null
    sendInfo.value.amount=null
    useNotify('positive','Запрос успешно отправлен')
    is_loading.value = !is_loading.value

  }
}

onBeforeMount(()=>{

  assets.value = all_assets.value.filter(x=>x.can_withdrawal)
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
