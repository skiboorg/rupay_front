<template>
  <q-page>

      <page-header>
      </page-header>


      <q-list separator>
        <q-item
          v-for="(asset,index) in assets"
          @click="$router.push({name:'wallet_asset',params:{asset_key:index}})"
          clickable
          :key="index">
          <q-item-section avatar>
            <q-avatar rounded>
              <img :src="API_URL+asset.iconURL">
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-weight-medium">{{asset.name}}</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-weight-medium" :class="{blur:$global.isBlur}">{{balances[asset.key][0][1]}}</q-item-label>
            <q-item-label v-if="asset.course" caption :class="{blur:$global.isBlur}">~ {{$filters.convertAmount(balances[asset.key][0][1] * asset.course)}} &#8381;</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>


  </q-page>
</template>
<script setup>
import {computed} from "vue";
const API_URL = process.env.API_URL

import {useAccountStore} from "stores/account";
const accountStore = useAccountStore()

const assets = computed(()=>{
  return accountStore.assets
})

const balances = computed(()=>{
  return accountStore.balances
})



// onBeforeMount( async ()=>{
//
//   await sraStore.getAllAssets()
// })


</script>
