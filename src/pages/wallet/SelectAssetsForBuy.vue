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
        <q-tab no-caps class="bg-white" name="buy" :label="$t('buy')" />
        <q-tab no-caps class="bg-white" name="other" :label="$t('receive_another')" />

      </q-tabs>

      <q-separator />
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="buy" class="no-padding">
          <q-list separator>
            <q-item :clickable="asset.is_enabled"
                    v-for="(asset,index) in assets.filter(x=>x.can_buy)"
                    :key="index"
                    @click="$router.push(`/wallet/buy?asset=${asset.key}&amount=0&type=buy`)"
                    :class="{disabled:!asset.is_enabled}"
            >
              <q-item-section avatar>
                <q-avatar rounded>
                  <img :src="`${asset.icon}`">
                </q-avatar>
              </q-item-section>
              <q-item-section class="text-weight-medium">
                <q-item-label>{{asset.name}}</q-item-label>
                <q-item-label caption v-if="!asset.is_enabled">{{$t('item_disabled')}}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-tab-panel>
        <q-tab-panel name="other" class="no-padding">
          <q-list separator>
            <q-item :clickable="asset.is_enabled"
                    v-for="(asset,index) in assets.filter(x=>x.can_buy_other)"
                    :key="index"
                    @click="$router.push(`/wallet/buy?asset=${asset.key}&amount=0&type=other`)"
                    :class="{disabled:!asset.is_enabled}"
            >

              <q-item-section avatar>
                <q-avatar rounded>
                  <img :src="`${asset.icon}`">
                </q-avatar>
              </q-item-section>
              <q-item-section class="text-weight-medium">
                <q-item-label>{{asset.name}}</q-item-label>
                <q-item-label caption v-if="!asset.is_enabled">{{$t('item_disabled')}}</q-item-label>
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
