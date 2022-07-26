<template>
  <q-layout view="lHh Lpr lFf">
    <q-header  class="q-px-lg q-py-sm bg-primary text-blue-grey-2">
      <div  class=" flex items-center justify-between">
        <img class="logo" src="~assets/logo_t.png">
        <q-tabs class="gt-sm"  indicator-color="transparent"
                active-color="white"
                v-model="curLink">

          <q-route-tab  no-caps
                        :ripple="false"
                        v-for="(tab,index) in menuItems"
                        :key="tab.title"
                        :name="index"
                        :label="tab.title"
                        :to="tab.link" />
          <q-route-tab  no-caps
                        :ripple="false"
                        target="_blank"
                        label="RuPay Scan"
                        href="https://scan.rupay.pro" />
           <q-route-tab  no-caps
                        :ripple="false"
                        target="_blank"
                        label="RuPay Wallet"
                        href="https://wallet.rupay.pro" />
          <q-btn
            flat
            dense
            href="https://vk.com/pypay"
            target="_blank"
            round
            icon="lab la-vk"
          />
          <q-btn
            flat
            dense
            href="https://t.me/rypay_pro"
            round
            target="_blank"
            icon="lab la-telegram"
          />
          <q-btn
            flat
            dense
            href="https://youtube.com/channel/UCCPCsBr7zUmKknyZryNFDJA"
            target="_blank"
            round
            icon="lab la-youtube"
          />

        </q-tabs>
<!--        <div class="gt-sm q-gutter-sm">-->
<!--          <q-btn-->
<!--            flat-->
<!--            dense-->
<!--            round-->
<!--            icon="lab la-vk"-->
<!--          />-->
<!--          <q-btn-->
<!--            flat-->
<!--            dense-->
<!--            round-->
<!--            icon="lab la-telegram"-->
<!--          />-->
<!--          <q-btn-->
<!--            flat-->
<!--            dense-->
<!--            round-->
<!--            icon="lab la-youtube"-->
<!--          />-->

<!--        </div>-->
        <q-btn
          flat
          dense
          round
          class="lt-md"
          icon="menu"
          aria-label="Menu"
          @click="mobileMenuActive = !mobileMenuActive"
        />

      </div>



    </q-header>

    <q-drawer
      v-model="mobileMenuActive"
      behavior="mobile"
      bordered
      side="right"
    >
      <div class="q-py-lg text-center"> <img class="logo" src="~assets/logo.png"></div>

       <q-list  >
      <q-item ><router-link to="/">Главная</router-link></q-item>
      <q-item ><router-link to="/node">Нода</router-link></q-item>
      <q-item ><router-link to="/apps">Мобильные приложения</router-link></q-item>
      <q-item ><router-link to="/tokens">Токенизация активов</router-link></q-item>
      <q-item ><router-link to="/marketplace">Маркетплейс</router-link></q-item>

      <q-item > <a  href="https://scan.rupay.pro">RuPay Scan</a></q-item>
      <q-item > <a href="https://wallet.rupay.pro">RuPay Wallet</a></q-item>


    </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <footer class="bg-grey-9 q-py-lg text-white">
      <div class="container">
        <div class="row q-col-gutter-lg q-mb-lg">
          <div class="col-12 col-sm-6">
            <img class="q-mb-md logo" src="~assets/logo_t.png">
            <div class="q-gutter-sm">
              <q-btn
                flat
                dense
                href="https://vk.com/pypay"
                target="_blank"
                round
                icon="lab la-vk"
              />
              <q-btn
                flat
                dense
                href="https://t.me/rypay_pro"
                round
                target="_blank"
                icon="lab la-telegram"
              />
              <q-btn
                flat
                dense
                href="https://youtube.com/channel/UCCPCsBr7zUmKknyZryNFDJA"
                target="_blank"
                round
                icon="lab la-youtube"
              />

            </div>
          </div>
          <div class="col-12 col-sm-6">
            <div class="footer-grid">
              <p class="no-margin" v-for="tab in menuItems" :key="tab.title">
                <router-link class="text-caption"  :to="tab.link">{{tab.title}}</router-link>
              </p>
              <p class="no-margin">
                <a class="text-caption" href="https://scan.rupay.pro">RuPay Scan</a>
              </p>
               <p class="no-margin">
                <a class="text-caption" href="https://wallet.rupay.pro">RuPay Wallet</a>
              </p>
            </div>

          </div>

        </div>
        <q-separator dark spaced="lg"/>
        <p class="q-mb-sm">2022 (С) Потребительский кооператив по развитию гражданских инициатив РОЛФ</p>
        <p class="q-mb-sm">ИНН: 2366034781 | ОГРН : 1222300016223</p>
        <p class="text-caption q-mb-none">Cайт и сервисы rupay.pro доступны только пайщикам кооператива, как действующим так и ассоциированным</p>
      </div>
    </footer>
  </q-layout>
</template>

<script setup>

import {ref} from "vue";

const mobileMenuActive=ref(false)
const curLink=ref('index')

const menuItems = [
  {
    title: 'Главная',
    link: '/',
    is_external_link:false


  },
  {
    title: 'Нода',
    link: '/node',
    is_external_link:false
  },
  {
    title: 'Мобильные приложения',
    link: '/apps',
    is_external_link:false
  },

  {
    title: 'Токенизация активов',
    link: '/tokens'
  },
  {
    title: 'Маркетплейс',
    link: '/marketplace'
  },
  // {
  //   title: 'Как это работает',
  //   link: '/'
  // },
  // {
  //   title: 'Переводы',
  //   link: '/'
  // },
  // {
  //   title: 'Обменник',
  //   link: '/'
  // },
  // {
  //   title: 'Решения для бизнеса',
  //   link: '/'
  // },
  // {
  //   title: 'Спец. предложение для НКО',
  //   link: '/'
  // }
]


</script>
<style lang="sass">
.footer-grid
  display: grid
  grid-template-columns: 1fr
  grid-gap: 5px
.logo
  width: 100px
  height: auto
  object-fit: contain
</style>
