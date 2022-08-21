<template>
  <q-header style="position: unset" bordered  class="text-dark bg-white items-center  flex justify-between "
             :class="{'bg-tr':$route.path === '/wallet/index'}">
    <q-toolbar class="q-pl-none">

      <q-btn v-if="$route.path !== '/wallet/index'" label="Назад" no-caps unelevated text-color="dark" @click="$router.back()" icon="las la-angle-left"/>

      <q-toolbar-title><slot name="title"/></q-toolbar-title>


      <unconfirmed-tx-icon/>
<!--      <q-btn flat round dense icon="las la-bars" @click="menuOpened = !menuOpened" class="q-ml-md" />-->
    </q-toolbar>
  </q-header>


</template>
<style lang="sass">
.header-spacer
  height: 50px

.bg-tr
  background: transparent
</style>
<script setup>
import { useGlobalStore } from 'stores/global'
const globalStore = useGlobalStore()
import {copyClipBoard} from "src/helpers/utils"
import {ref, computed} from "vue";
import { useAccountStore } from 'stores/account'
const accountStore = useAccountStore()
import { useAuthStore } from 'stores/auth'
import {useRouter} from "vue-router"
const router = useRouter()

const authStore = useAuthStore()
const menuOpened = ref(false)
const app_version = process.env.APP_VERSION
const API_URL = process.env.API_URL

async function copyAddress(){
  await copyClipBoard(current_address.value,'positive','Адрес кошелька скопирован')
}

const current_address = computed(()=>{
  return accountStore.addresses[0].address
})
const person = computed(()=>{
  return accountStore.verifyPersonData
})

async function logout(){
  await authStore.logout()
  await router.push('/')
}


</script>
