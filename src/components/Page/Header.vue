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


<!--  <q-drawer-->
<!--    v-model="menuOpened"-->
<!--    show-if-above-->
<!--    bordered-->
<!--    side="right"-->
<!--    class="q-py-lg"-->
<!--  >-->

<!--    <q-list separator class="text-dark">-->
<!--      <q-item>-->
<!--        <q-item-section></q-item-section>-->
<!--        <q-item-section side><q-btn round text-color="primary" icon="las la-times-circle" unelevated @click="menuOpened = !menuOpened"/></q-item-section>-->
<!--      </q-item>-->

<!--      <q-item  v-if="person">-->
<!--        <q-item-section avatar><q-avatar><img :src="API_URL+person.maker_image" ></q-avatar></q-item-section>-->
<!--        <q-item-section>-->
<!--          <q-item-label>{{person.maker_name}}</q-item-label>-->
<!--        </q-item-section>-->
<!--      </q-item>-->
<!--      <q-item v-else class="block ">-->

<!--        <p class="text-negative text-bold q-mb-sm">Ваш счет является анонимным. Для разблокировки всего функционала создайте персону и верифицируйте счет</p>-->
<!--        <q-btn label="Создать персону" color="blue-7" @click="router.push({name:'create_person'})" icon="las la-user-plus" no-caps unelevated/>-->

<!--      </q-item>-->
<!--      <q-item>-->
<!--        <q-item-section>-->
<!--          <q-item-label overline>-->
<!--            <p class="text-caption q-mb-none ellipsis">{{current_address}}</p>-->
<!--          </q-item-label>-->
<!--          <q-item-label caption>Адрес кошелька</q-item-label>-->
<!--        </q-item-section>-->
<!--        <q-item-section side>-->
<!--          <q-btn color="blue-7" @click="copyAddress" round dense unelevated icon="las la-clipboard"/>-->
<!--        </q-item-section>-->
<!--      </q-item>-->
<!--            <q-item v-if="person" clickable @click="router.push({name:'verify_person'})" >-->
<!--              <q-item-section avatar><q-icon size="20px" name="las la-id-card"/></q-item-section>-->
<!--              <q-item-section >Верифицировать пользователя</q-item-section>-->
<!--            </q-item>-->
<!--      <q-item clickable @click="logout" class="text-negative">-->
<!--        <q-item-section avatar><q-icon size="20px" name="las la-sign-out-alt"/></q-item-section>-->
<!--        <q-item-section >Выход</q-item-section>-->
<!--      </q-item>-->
<!--      <q-separator/>-->





<!--    </q-list>-->
<!--    <q-banner  class="bg-blue-7 absolute-bottom">RUPAY Wallet - Версия {{app_version}}</q-banner>-->
<!--  </q-drawer>-->


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
