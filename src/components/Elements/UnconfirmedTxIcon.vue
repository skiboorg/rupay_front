<template>
<!--  v-if="unconfirmedTx.length>0"-->
  <div v-if="unconfirmedTx.length>0" class="unconfirmed-icon" @click="$router.push({name: 'wallet_unconfirmed'})">
    <q-icon  name="las la-sync" color="dark" size="26px" class="rotate"></q-icon>
    <q-badge color="dark" rounded text-color="white" >
      {{unconfirmedTx.length}}
    </q-badge>
  </div>

</template>
<script setup>
import { useEraStore } from 'stores/eraChain'
import {computed,watch} from "vue";
const sraStore = useEraStore()

const unconfirmedTx = computed(()=>{
  return sraStore.unconfirmedTx
})

</script>
