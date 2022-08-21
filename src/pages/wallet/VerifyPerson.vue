<template>
  <page>
    <page-body class="q-px-md">
      <page-header ></page-header>
      <div class="" style="height: 60px"></div>

      <div v-if="!parsedP" class="q-mb-lg">
        <q-file rounded v-model="raw_file" accept=".txt" dense label="Выберите файл с raw кодом" outlined clearable  class="q-mb-md" />
        <q-btn rounded @click="fileLoad" no-caps unelevated class="full-width q-py-md" color="primary" label="Проверить RAW код"/>

      </div>
      <div v-if="person" class="">
        <p>Основная информация</p>
        <div class="row q-col-gutter-md q-mb-lg">
          <div class="col-6">
            <q-img :src="person.image"/>
          </div>
          <div class="col-6">
            <p class="q-mb-none text-weight-medium">ФИО</p>
            <p class="q-mb-none text-caption">{{person.name}}</p>
            <p class="q-mb-none text-weight-medium">Пол</p>
            <p class="q-mb-none text-caption">{{person.gender === 0 ? 'Мужской' : 'Женский'}}</p>
            <p class="q-mb-none text-weight-medium">Дата рождения</p>
            <p class="q-mb-none text-caption">{{new Date(person.birthday).toLocaleDateString()}}</p>
          </div>
        </div>
        <p v-if="fee" class="text-negative">Комиссия первой транзакции: {{fee}}</p>
        <p v-if="fee2" class="text-negative">Комиссия транзакции: {{fee2}}</p>

<!--        <q-btn @click="verify" :loading="is_loading" no-caps unelevated class="full-width" color="primary" label="Верифицировать"/>-->
        <q-btn @click="verify1" rounded :loading="is_loading" no-caps unelevated class="full-width q-py-md" color="primary" label="Верифицировать"/>
      </div>

    </page-body>
  </page>
</template>
<script setup>
import {useRouter} from "vue-router"
const router = useRouter()

import {EraChain} from 'erachain-js-api'
import {era} from 'boot/erachain'

import { useEraStore } from 'stores/eraChain'
const eraStore = useEraStore()

import { useAccountStore } from 'stores/account'
const accountStore = useAccountStore()

import {ref,computed} from "vue"
import {Notify} from "quasar";

let is_loading = ref(false)
let raw_file = ref(null)
let raw = ref(null)
let person = ref(null)
let parsedP = ref(null)
let tx_raw = ref(null)
let fee = ref(null)
let fee2 = ref(null)


const public_key = computed(()=>{
  return accountStore.addresses[accountStore.currentAddressIdx].publicKey
})

const current_address = computed(()=>{
  return accountStore.addresses[accountStore.currentAddressIdx].address
})

function checkFileType (files) {
  return files.filter(file => file.type === 'text/txt')
}

async function getFee(){

  const keyPair = await eraStore.getKeyPair()
  const result = await era.tranRawPerson(keyPair,parsedP.value, false)
  console.log(result)
  if (result.raw){
    tx_raw.value = result.raw
    fee.value = result.fee
  }

}

async function registerPersonCertify(){
  const keyPair = await eraStore.getKeyPair()
  const result = await era.tranRawPersonCertify(keyPair,parsedP.value, false)
  console.log(result)
  if (result.raw){
    tx_raw.value = result.raw
    fee2.value = result.fee
  }
}

async function verify(){
  is_loading.value = true
   await getFee()
   await signTransaction()
  //await registerPersonCertify()
  //await signTransaction()
  is_loading.value = false
}
async function verify1(){
  is_loading.value = true
  await registerPersonCertify()
  await signTransaction()
  is_loading.value = false
}

async function signTransaction(){
  const result = await era.broadcast(tx_raw.value)
  console.log(result)
    Notify.create({
      color:'info',
      message: result.message
    })
  is_loading.value = false
  await router.back()


}

const parsePerson = async () => {
  is_loading.value = !is_loading.value
  const parsedPerson = await EraChain.Type.PersonHuman.parse(raw.value);
  console.log(parsedPerson)
  parsedP.value = parsedPerson
  person.value = {
    name: parsedPerson.name,
    desc: parsedPerson.description,
    image: 'data:image/png;base64,' + Buffer.from(parsedPerson.image).toString('base64'),
    birthday: parsedPerson.birthday,
    deathday: parsedPerson.deathday,
    gender: parsedPerson.gender,
  }
  is_loading.value = !is_loading.value
}

function fileLoad(){
   // raw_file.value = null
   // raw.value = null
   // person.value = null
   // parsedP.value = null
   // tx_raw.value = null
   // fee.value = null
  const reader = new FileReader()
  reader.addEventListener("load", async () => {
    // this will then display a text file
    raw.value = reader.result
    await parsePerson()
  }, false);
  if (raw_file.value) {
    reader.readAsText(raw_file.value);
  }
}



</script>
<style lang="sass">
.round
  border-radius: 100%
</style>
