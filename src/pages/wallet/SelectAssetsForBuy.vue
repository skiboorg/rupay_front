<template>
  <page>
    <page-body >
      <page-header>
      </page-header>


      <q-list separator>
        <q-item clickable
                v-for="(asset,index) in assets.filter(x=>x.can_buy)"
                :key="index"
                @click="$router.push(`/wallet/buy?asset=${asset.key}&amount=0`)"
        >
          <q-item-section avatar>
            <q-avatar rounded>
              <img :src="`${asset.icon}`">
            </q-avatar>
          </q-item-section>
          <q-item-section class="text-weight-medium">
            {{asset.name}}
          </q-item-section>
        </q-item>
      </q-list>

    </page-body>
  </page>
</template>
<script setup>

import { useEraStore } from 'stores/eraChain'
const sraStore = useEraStore()

import {computed} from "vue";


const assets = computed(()=>{
  return sraStore.assets
})



// onBeforeMount( async ()=>{
//
//   await sraStore.getAllAssets()
// })


</script>
