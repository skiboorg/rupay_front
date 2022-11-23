<template>




<!--        <q-btn @click="seed='2vGsvBKyGF44knLmZY6jfgbqNPyxVqDDJ72XRMkXY1VT'" label="main"/>-->
<!--        <q-btn @click="seed='9Dk7HvH3MrTyKZeGUjDVsanrmjDtwSvEZrGjCu3dRS2n'" label="sec"/>-->
  <div v-if="!hash">

    <q-input autofocus
             outlined
             rounded
             v-model="seed"
             color="primary"
             label="Введите Ваш сид"

             :rules="[
              val => val && val.length > 0 || 'Это обязательное поле',
              val => checkValidSeed(val) || 'Введен не корректный сид'
              ]"/><!--    seed      -->
    <div  v-if="checkValidSeed(seed)" class="flex column justify-between">
      <div class="">
        <pin-code :showDigits="true" @pincode_ready="setPincode"></pin-code>
      </div>

    </div>
  </div>
  <div v-else class="pincode-tab">
    <pin-code :showDigits="false" @pincode_ready="checkPincode"></pin-code>
    <q-btn rounded no-caps outline flat class="full-width q-mt-md" @click="clearAll" size="14px" dense color="negative" label="Я забыл пин-код. Сбросить все данные"/>
  </div>








</template>
<script setup>
import {useNotify} from "src/helpers/utils";
import {ref} from "vue";
import {encryptSeed,decryptSeed} from "src/helpers/authHelpers"

import {useRouter} from "vue-router"
const router = useRouter()

import { useAuthStore } from 'stores/auth'
const authStore = useAuthStore()

import { useGlobalStore } from 'stores/global'

const globalStore = useGlobalStore()

import { useWSStore } from 'stores/ws'
const wsStore = useWSStore()

const seed=ref('')
//const password=ref('ifpass112233theN')
const password=ref('')
const isPwd=ref(true)

const emit = defineEmits(['seedGood'])

const hash = localStorage.getItem('hash')

async function checkPincode(val) {
  //console.log(hash)
  //console.log(val)
  const encrypted_seed = decryptSeed({hash,password:val})
  //console.log(encrypted_seed)
  if (encrypted_seed){
    seed.value = encrypted_seed
    await login()
  }else {
    useNotify('negative','Неверный пинкод')
  }
}

async function login() {
  globalStore.toggleLoadingState()
  const hash = encryptSeed({seed:seed.value,password:password.value})
  await authStore.login(seed.value, hash)
  //console.log(hash)
  const addresses = localStorage.getItem('addresses')
  await wsStore.connectWS(JSON.parse(addresses)[0].address)
  globalStore.toggleLoadingState()
  await router.push({name:'wallet_index'})
}

async function setPincode(val) {
  password.value = val
  await login()
}
async function clearAll() {
  await authStore.logout()
}

function checkValidSeed(seed) {
  const re = /^[A-Za-z0-9]+$/
  if (!re.test(seed)) return false
  emit('seedGood',{val:[43, 44, 86, 87, 88].includes(seed.length)})
  return ([43, 44, 86, 87, 88].includes(seed.length))

}




</script>
<style lang="sass">
.pincode-tab
  display: flex
  flex-direction: column
  align-items: center
  justify-content: space-around
  height: 70%
</style>
