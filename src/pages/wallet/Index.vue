<template>
  <q-page class="full-width">
     <div class="flex column items-center justify-evenly">

       <div class=" flex items-center text-center q-mb-xl">


         <p class="q-mb-none q-mr-md text-h5 text-bold" :class="{blur:$global.isBlur}">~ {{$filters.convertAmount(total)}} &#8381;</p>
         <q-btn :icon="$global.isBlur ? 'las la-low-vision' : 'las la-eye'" flat dense round @click="$global.toggleIsBlur()"/>
       </div>

       <div class="top-buttons">

         <div class="text-center cursor-pointer" @click="$router.push({name: 'wallet_own_assets'})">
           <q-avatar class="bg-blue-7 q-mb-sm">
             <q-icon color="white" size="22px" name="las la-upload"/>
           </q-avatar>
           <p class="no-margin text-caption lh100">Отправить<br>в сети RUPAY</p>
         </div>
         <div class="text-center cursor-pointer" @click="$router.push({name: 'wallet_select'})">
           <q-avatar class="bg-blue-7 q-mb-sm">
             <q-icon color="white" size="22px" name="las la-download"/>
           </q-avatar>
           <p class="no-margin text-caption lh100">Получить<br>в сети RUPAY</p>
         </div>
         <div class="text-center cursor-pointer" @click="$router.push({name: 'wallet_assets_for_buy'})">
           <q-avatar class="bg-blue-7 q-mb-sm">
             <q-icon color="white" size="22px" name="las la-tag"/>
           </q-avatar>
           <p class="no-margin text-caption lh100">Купить</p>
         </div>
         <div class="text-center cursor-pointer" @click="$router.push({name: 'wallet_exchange'})">
           <q-avatar class="bg-blue-7 q-mb-sm">
             <q-icon color="white" size="22px" name="las la-exchange-alt"/>
           </q-avatar>
           <p class="no-margin text-caption lh100">Обмен</p>
         </div>
         <div class="text-center cursor-pointer" @click="$router.push({name: 'withdraw'})">
           <q-avatar class="bg-blue-7 q-mb-sm">
             <q-icon color="white" size="22px" name="las la-wallet"/>
           </q-avatar>
           <p class="no-margin text-caption lh100">Вывести</p>
         </div>

       </div>


     </div>
<!--      <div class="tokens-tab&#45;&#45;wrapper">  </div>-->
        <q-tabs
          v-model="tab"

          class=" text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
        >
          <q-tab no-caps class="bg-white" name="tokens" label="Активы" />
          <q-tab disable no-caps class="bg-white" name="nft" label="NFTs" />

        </q-tabs>

      <q-separator />
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="tokens" class="no-padding">
          <q-scroll-area style="height: 50vh;">
          <q-list separator>
            <q-item  >
              <q-item-section avatar></q-item-section>
              <q-item-section>
                <q-item-label caption>Название актива</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label caption>В собственности</q-item-label>
              </q-item-section>
            </q-item>
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
              <q-item-section class="text-weight-medium">
                <q-item-label>{{asset.name}}</q-item-label>
                <q-item-label caption>{{asset.course}} &#8381;</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-weight-medium" :class="{blur:$global.isBlur}">{{balances[asset.key][0][1]}}</q-item-label>
                <q-item-label v-if="asset.course" caption :class="{blur:$global.isBlur}">~ {{$filters.convertAmount(balances[asset.key][0][1] * asset.course)}} &#8381;</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
          </q-scroll-area>
        </q-tab-panel>
        <q-tab-panel name="nft">
        </q-tab-panel>
      </q-tab-panels>
  </q-page>
</template>
<script setup>
import {computed, ref} from "vue";
import { useAccountStore } from 'stores/account'
const accountStore = useAccountStore()
const API_URL = process.env.API_URL
const tab = ref('tokens')
const selectedAssetId = ref(undefined)



const current_address = computed(()=>{
  return accountStore.addresses[accountStore.currentAddressIdx].address
})

const assets = computed(()=>{
  return accountStore.assets
})

const balances = computed(()=>{
  return accountStore.balances
})

function test(){
  Notification.requestPermission().then((result) => {


    console.log(result)
    if (result === 'granted') {
      randomNotification();
    }
  });
}

function randomNotification() {
  const randomItem = Math.floor(Math.random() * 4);
  const notifTitle = 'notifTitle';
  const notifBody = `notifBody`;
  const notifImg = `notifImg`;
  const options = {
    body: notifBody,
    icon: notifImg,
  };
  new Notification(notifTitle, options);
  setTimeout(randomNotification, 30000);
}



const total = computed(()=>{
  let result = 0
  //console.log('assets',assets.value)
  //console.log('balances',balances.value)
   if (assets.value.length>0){
    for (let asset of assets.value){
      try {
        result  += balances.value[asset.key][0][1] * asset.course
      }catch (e){
        console.log('balance error',e)
      }
    }
   }
  return result
})





</script>
<style lang="sass">
.top-buttons
  display: grid
  grid-template-columns: repeat(5,1fr)
  grid-gap: 40px
  padding: 0 8px
.tokens-tab
  border-top-left-radius: 10px
  border-top-right-radius: 10px
  &--wrapper
    background: lighten($primary,30%)

</style>
