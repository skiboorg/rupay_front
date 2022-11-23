<template>



  <div class="" v-if="step===1">
    <p class="text-weight-bold text-center text-h6">Дополнительные соглашения</p>
    <p class="text-weight-bold ">Убедитесь, что вы со всем согласны:</p>
    <q-toggle
      v-model="agreeItems[index].agree"
      v-for="(item,index) in agreeItems"
      checked-icon="check"
      color="green"
      unchecked-icon="clear"
      class="text-caption q-mb-md"
      style="line-height: 110%"
      >
      <p class="no-margin" v-html="item.text"></p>
    </q-toggle>
    <p><a target="_blank" href="https://wallet.rupay.pro/rupay_user_agreement.pdf">Пользовательское соглашение</a></p>
    <btn label="Продолжить" v-if="is_agree" @click="step=2" type="submit"  :outline="false" />
  </div>
  <div class="" v-if="step===2">
    <pin-code :showDigits="true" @pincode_ready="setPincode"></pin-code>


    <div class="text-center q-mt-md">
      <p class="text-caption no-margin" @click="openLogin">У меня есть сид</p>
    </div>

  </div>
  <div class="" v-if="step === 3">
    <p>Ваш сид:</p>
    <p style="word-break: break-all" class="text-caption bg-grey-3 q-pa-md">{{seed}}</p>
    <q-btn rounded outline @click="copySeed" no-caps label="Скопировать сид"  unelevated color="primary" class="full-width q-mb-md"/>
    <p class="text-caption text-negative  q-pa-md text-weight-medium">
      Скопируйте или запишите ваш сид (секретный ключ) и сохраните его в максимально защищенном месте. Ни в коем случае не делитесь и никому не сообщайте ваш сид (секретный ключ)!!!
    </p>
    <btn :label="isSeedCopy ? 'Продолжить' : 'Для продолжения скопируйте сид'"  :disabled="!isSeedCopy" :is_loading="isLoading" @click="register" type="submit"  :outline="false" />

  </div>

</template>
<script setup>
import { ref, computed } from 'vue'
import {EraChain} from 'erachain-js-api'
import {copyClipBoard} from "src/helpers/utils";
import {encryptSeed} from "src/helpers/authHelpers"

import { useAuthStore } from 'stores/auth'
const authStore = useAuthStore()

import {useRouter} from "vue-router"
const router = useRouter()

import { useWSStore } from 'stores/ws'
const wsStore = useWSStore()

const step = ref(1)
const password=ref('')
//const password=ref('ifpass112233theN')
const isPwd=ref(true)
const isLoading=ref(false)
const isSeedCopy=ref(false)
let seed=ref(null)
const agreeItems = ref(
  [
    {agree:false,text:` Я согласен с тем, что доступ к сиду и ключам, имеется только у меня.
     При утере сида, доступ к счетам  будет <strong>невозможно</strong> восстановить `},
    {agree:false,text:` Я согласен с тем, что <strong>при передаче сида</strong>  третьим лицам,
    я могу <strong>лишиться всех средств</strong> находящихся на счетах `},
    {agree:false,text:`Я <strong>прочитал и согласен</strong> с пользовательским соглашением об общих условиях использования мобильного платежного приложения «RUPAY» `},
  ])

const is_agree = computed(()=>{
  return agreeItems.value[0].agree && agreeItems.value[1].agree && agreeItems.value[2].agree
})

const emit = defineEmits(['openLogin'])

function openLogin(){
  emit('openLogin')
}

async function setPincode(val){
  password.value=val
  await generateSeed()
}
async function generateSeed(){
  isLoading.value = !isLoading.value
  seed.value= await EraChain.Crypt.generateSeed()
  isLoading.value = !isLoading.value
  step.value = 3
}

async function register(){
  isLoading.value = !isLoading.value
  const hash = encryptSeed({seed:seed.value,password:password.value})
  await authStore.login(seed.value, hash)
  const addresses = localStorage.getItem('addresses')
  await wsStore.connectWS(JSON.parse(addresses)[0].address)
  await router.push({name:'wallet_index'})
  isLoading.value = !isLoading.value
}

async function copySeed(){
  await copyClipBoard(seed.value,'positive','Сид скопирован')
  isSeedCopy.value = true
}


</script>
