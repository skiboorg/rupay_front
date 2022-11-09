<template>
  <q-page class="full-width">
     <div class="flex column items-center justify-evenly">
       <q-list  class="full-width">
         <q-item   v-if="person">
           <q-item-section avatar>
             <q-avatar><img :src="API_URL+person.maker_image" ></q-avatar>
           </q-item-section>
           <q-item-section>
             <q-item-label>{{person.maker_name}}</q-item-label>
           </q-item-section>
           <q-item-section>
             <q-item-label overline>
               <p class="text-caption q-mb-none ellipsis">{{current_address}}</p>
             </q-item-label>
             <q-item-label @click="copyAddress" caption
                           style="text-decoration: underline" class="cursor-pointer">Скопировать адрес кошелька</q-item-label>
           </q-item-section>


         </q-item>
         <q-item v-if="!person" class="block ">
           <q-item-section>
             <p class="text-negative text-bold q-mb-sm">Ваш счет является анонимным. Для разблокировки всего функционала
               <router-link :to="{name:'create_person'}">создайте персону</router-link>
               и верифицируйте счет</p>
           </q-item-section>
         <q-item-section>
             <q-item-label overline>
               <p class="text-caption q-mb-none ellipsis">{{current_address}}</p>
             </q-item-label>
             <q-item-label @click="copyAddress" caption
                           style="text-decoration: underline" class="cursor-pointer">Скопировать адрес кошелька</q-item-label>
           </q-item-section>

         </q-item>
         <q-item v-if="!person" class="block ">
           <a class="q-btn q-btn-item non-selectable no-outline q-btn--unelevated q-btn--rectangle bg-blue-7 text-white q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase q-btn--active" tabindex="0" href="https://t.me/verify_RUpaybot" target="_blank"><span class="q-focus-helper" tabindex="-1"></span><span class="q-btn__content text-center col items-center q-anchor--skip justify-center row"><i class="q-icon on-left lab la-telegram" aria-hidden="true" role="img"> </i><span class="block">Бот для верификации</span></span></a>
         </q-item>
         <q-item v-if="person"  >

           <q-item-section ><router-link class="text-dark" :to="{name:'verify_person'}">Верифицировать пользователя</router-link> </q-item-section>
         </q-item>
       </q-list>
       <div class=" flex items-center text-center q-mb-xl">


         <p class="q-mb-none q-mr-md text-h5 text-bold" :class="{blur:$global.isBlur}">~ {{$filters.convertAmount(total)}} &#8381;</p>
         <q-btn :icon="$global.isBlur ? 'las la-low-vision' : 'las la-eye'" flat dense round @click="$global.toggleIsBlur()"/>
       </div>

       <div class="top-buttons">
         <q-btn stack @click="$router.push({name: 'wallet_own_assets'})" color="primary" unelevated no-caps>
             <q-icon color="white" size="22px" name="las la-upload"/>
           <p class="no-margin text-caption lh100">Отправить<br>в сети RUPAY</p>
         </q-btn>

         <q-btn stack @click="$router.push({name: 'wallet_select'})" color="primary" unelevated no-caps>
           <q-icon color="white" size="22px" name="las la-download"/>
           <p class="no-margin text-caption lh100">Получить<br>в сети RUPAY</p>
         </q-btn>

         <q-btn stack @click="$router.push({name: 'wallet_assets_for_buy'})" color="primary" unelevated no-caps>
           <q-icon color="white" size="22px" name="las la-tag"/>
           <p class="no-margin text-caption lh100">Получить</p>
         </q-btn>


         <q-btn stack @click="$router.push({name: 'wallet_exchange'})" color="primary" unelevated no-caps>
           <q-icon color="white" size="22px" name="las la-exchange-alt"/>
           <p class="no-margin text-caption lh100">Обмен</p>
         </q-btn>


         <q-btn stack @click="$router.push({name: 'withdraw'})" color="primary" unelevated no-caps>
           <q-icon color="white" size="22px" name="las la-wallet"/>
           <p class="no-margin text-caption lh100">Вывести</p>
         </q-btn>


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
import {copyClipBoard} from "src/helpers/utils"


const current_address = computed(()=>{
  return accountStore.addresses[accountStore.currentAddressIdx].address
})

const assets = computed(()=>{
  return accountStore.assets
})

const person = computed(()=>{
  return accountStore.verifyPersonData
})

const balances = computed(()=>{
  return accountStore.balances
})


async function copyAddress(){
  await copyClipBoard(current_address.value,'positive','Адрес кошелька скопирован')
}

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
  grid-gap: 10px
  padding: 0 8px
.tokens-tab
  border-top-left-radius: 10px
  border-top-right-radius: 10px
  &--wrapper
    background: lighten($primary,30%)

</style>
