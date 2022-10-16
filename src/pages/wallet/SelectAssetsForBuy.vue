<template>
  <page>
    <page-body >
      <page-header>
      </page-header>

      <q-tabs
        v-model="tab"

        class=" text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-tab no-caps class="bg-white" name="buy" label="Купить" />
        <q-tab no-caps class="bg-white" name="other" label="Получить из другой сети" />

      </q-tabs>

      <q-separator />
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="buy" class="no-padding">
          <q-list separator>
            <q-item clickable
                    v-for="(asset,index) in assets.filter(x=>x.can_buy)"
                    :key="index"
                    @click="$router.push(`/wallet/buy?asset=${asset.key}&amount=0&type=buy`)"
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
        </q-tab-panel>
        <q-tab-panel name="other" class="no-padding">
          <q-list separator>
            <q-item clickable
                    v-for="(asset,index) in assets.filter(x=>x.can_buy_other)"
                    :key="index"
                    @click="$router.push(`/wallet/buy?asset=${asset.key}&amount=0&type=other`)"
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
        </q-tab-panel>
      </q-tab-panels>



    </page-body>
  </page>
</template>
<script setup>

import { useEraStore } from 'stores/eraChain'
const sraStore = useEraStore()

import {computed,ref} from "vue";

const tab = ref('buy')
const assets = computed(()=>{
  return sraStore.assets
})



// onBeforeMount( async ()=>{
//
//   await sraStore.getAllAssets()
// })


</script>
