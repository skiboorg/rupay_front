<template>
  <page>
    <page-body class="q-pa-md">
      <page-header>
      </page-header>
      <div class="" style="height: 60px"></div>
        <div  v-for="(transaction,index) in transactions"
                :key="index" >
          <p>{{new Date(transaction.timestamp).toLocaleString()}}</p>
          <p>Получатель: {{transaction.recipient}}<br> <span v-if="transaction.recipient_name">{{transaction.recipient_name}}</span></p>
          <p>Отправитель: {{transaction.creator}}<br> <span v-if="transaction.creator_name">{{transaction.creator_name}}</span></p>
          <p>Кол-во: {{transaction.asset_name}} {{transaction.amount}}</p>
          <q-separator spaced="md"/>
        </div>


    </page-body>
  </page>
</template>
<script setup>

import { useEraStore } from 'stores/eraChain'
const sraStore = useEraStore()

import {computed} from "vue";


const transactions = computed(()=>{
  return sraStore.unconfirmedTx
})



// onBeforeMount( async ()=>{
//
//   await sraStore.getAllAssets()
// })


</script>
