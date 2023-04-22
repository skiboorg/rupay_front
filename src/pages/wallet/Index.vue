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

         <q-item>
    <q-item-section side>
      <q-btn color="primary" @click="$router.push({name:'p2p_user'})" no-caps unelevated label="Настройки P2P"/>
    </q-item-section>
           <q-item-section side>
             <q-btn  flat round dense icon="las la-bell" @click="$router.push({name:'notifications'})" class="q-ml-md" >
               <q-badge v-if="showP2PWarningNotificaton" rounded floating color="negative"><q-icon size="10px" name="priority_high"/></q-badge>
             </q-btn>
           </q-item-section>
    <q-item-section></q-item-section>
         </q-item>
         <q-item v-if="!person" class="block ">
           <q-item-section>
             <p class="text-negative text-bold q-mb-sm">Ваш счет является анонимным. Для разблокировки всего функционала создайте персону и верифицируйте счет</p>
             <div class="q-gutter-md q-mb-md">
               <q-btn size="13px" label="Верификация с пригласителем" color="blue-7" class=" " @click="$router.push({name:'create_person'})"  no-caps unelevated/>
               <q-btn size="13px" label="Верификация без пригласителя" class="" color="blue-7" @click="$router.push({name:'create_person_alt'})" no-caps unelevated/>
             </div>

           </q-item-section>
         <q-item-section>
             <q-item-label overline>
               <p class="text-caption q-mb-none ellipsis">{{current_address}}</p>
             </q-item-label>
             <q-item-label @click="copyAddress" caption
                           style="text-decoration: underline" class="cursor-pointer">Скопировать адрес кошелька</q-item-label>
           </q-item-section>

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

         <q-btn stack @click="$router.push({name: 'p2p_index'})" color="primary" unelevated no-caps>
           <q-icon color="white" size="22px" name="las la-users"/>
           <p class="no-margin text-caption lh100">P2P</p>
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
          <q-tab  no-caps class="bg-white" name="functions" :label="$t('applications')" />

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
        <q-tab-panel name="functions">
          <q-scroll-area style="height: 50vh;">
            <div class="functions-grid">
              <div class="functions-grid-item" >
                <a style="color: inherit;text-decoration: none" href="https://doxod24.net/1097802" target="_blank">
                  <img src="~assets/zb.png" alt="">
                  <p class="text-caption text-center no-margin lh100">Заработок без вложений</p>
                </a>
              </div>

              <div class="functions-grid-item" >
                <a style="color: inherit;text-decoration: none" href="https://fastref.ru/1097802" target="_blank">
                  <img src="~assets/br.png" alt="">
                  <p class="text-caption text-center no-margin lh100">Быстрый набор рефералов</p>
                </a>
              </div>

              <div class="functions-grid-item" >
                <a style="color: inherit;text-decoration: none" href="https://adv24.pro/1097802" target="_blank">
                  <img src="~assets/rv.png" alt="">
                  <p class="text-caption text-center no-margin lh100">Рекламные возможности SurfEarner</p>
                </a>
              </div>


              <div class="functions-grid-item" >
                <a style="color: inherit;text-decoration: none" href="https://t.me/rupayPRO" target="_blank">
                  <img src="~assets/tg.png" alt="">
                  <p class="text-caption text-center no-margin lh100">{{$t('app_chat')}}</p>
                </a>
              </div>

              <div class="functions-grid-item" @click="$router.push({name:'documents'})">
                <img src="~assets/docs.png" alt="">
                <p class="text-caption text-center no-margin lh100">{{$t('app_docs')}}</p>
              </div>
              <div class="functions-grid-item" @click="$router.push({name:'our_games'})">
                <img src="~assets/game.png" alt="">
                <p class="text-caption text-center no-margin lh100">{{$t('app_games')}}</p>
              </div>
              <div class="functions-grid-item" @click="$router.push({name:'ido'})">
                <img src="~assets/ido.png" alt="">
                <p class="text-caption text-center no-margin lh100">{{$t('app_ido')}}</p>
              </div>
              <div class="functions-grid-item" >
                <a style="color: inherit;text-decoration: none" href="https://oneunion.ru" target="_blank">
                  <img src="~assets/ou.png" alt="">
                  <p class="text-caption text-center no-margin lh100">{{$t('app_union')}}</p>
                </a>
              </div>
              <div class="functions-grid-item" @click="$router.push({name:'vip_club'})">
                <img src="~assets/vip.png" alt="">
                <p class="text-caption text-center no-margin lh100">{{$t('app_vip')}}</p>
              </div>
              <div class="functions-grid-item" >
                <a style="color: inherit;text-decoration: none" href="https://scan.rupay.pro/index/main.html" target="_blank">
                  <img src="~assets/scan.png" alt="">
                  <p class="text-caption text-center no-margin lh100">{{$t('app_scan')}}</p>
                </a>
              </div>

              <div class="functions-grid-item" >
                <a style="color: inherit;text-decoration: none" href="https://t.me/money_from_space" target="_blank">
                  <img src="~assets/aim.png" alt="">
                  <p class="text-caption text-center no-margin lh100">{{$t('app_aim')}}</p>
                </a>
              </div>

              <div class="functions-grid-item" >
                <a style="color: inherit;text-decoration: none" href="https://xn--h1aeefgah.xn--p1ai/" target="_blank">
                  <img src="~assets/coop.png" alt="">
                  <p class="text-caption text-center no-margin lh100">{{$t('app_coop')}}</p>
                </a>
              </div>
              <div class="functions-grid-item" >
                <a style="color: inherit;text-decoration: none" href="https://t.me/Pure_Net_bot?start=1975902007" target="_blank">
                  <img src="~assets/pnet.png" alt="">
                  <p class="text-caption text-center no-margin lh100">{{$t('app_pnet')}}</p>
                </a>
              </div>
              <div class="functions-grid-item" >
                <a style="color: inherit;text-decoration: none" href="https://x-car.ru" target="_blank">
                  <img src="~assets/xcar.jpg" alt="">
                  <p class="text-caption text-center no-margin lh100">{{$t('app_xcar')}}</p>
                </a>
              </div>
              <div class="functions-grid-item" >
                <a style="color: inherit;text-decoration: none" href="https://t.me/+ZH4XwL9gJjAxNTJi" target="_blank">
                  <img src="~assets/tree.jpeg" alt="">
                  <p class="text-caption text-center no-margin lh100">Дерево жизни</p>
                </a>
              </div>

            </div>
          </q-scroll-area>


        </q-tab-panel>
      </q-tab-panels>
  </q-page>
</template>
<script setup>
import {computed, ref, onBeforeMount} from "vue";
import { useAccountStore } from 'stores/account'
const accountStore = useAccountStore()
const API_URL = process.env.API_URL
const tab = ref('tokens')
const selectedAssetId = ref(undefined)
import {copyClipBoard} from "src/helpers/utils"
import { useP2PStore } from 'stores/p2p'
const p2pStore = useP2PStore()

const user = computed(()=>{
  return p2pStore.user
})

const p2p_notifications = computed(()=>{
  return p2pStore.notifications
})

onBeforeMount( async ()=>{
  await p2pStore.get_notifications()
  await p2pStore.get_user()
})

const current_address = computed(()=>{
  return accountStore.addresses[accountStore.currentAddressIdx].address
})

const showP2PWarningNotificaton = computed(()=>{
  return p2p_notifications.value.filter(x=>x.is_new).length>0
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
.functions-grid
  display: grid
  grid-template-columns: 1fr 1fr 1fr 1fr
  grid-template-rows: 120px
  grid-gap: 20px
  &-item
    display: flex
    flex-direction: column
    align-items: center
    a
      display: flex
      flex-direction: column
      align-items: center

    img
      width: 100px
      height: 100px
      margin-bottom: 5px
      border-radius: 20px

.text-caption
  font-size: 10px
.top-buttons
  display: grid
  grid-template-columns: repeat(6,1fr)
  grid-gap: 10px
  padding: 0 8px
.tokens-tab
  border-top-left-radius: 10px
  border-top-right-radius: 10px
  &--wrapper
    background: lighten($primary,30%)

</style>
