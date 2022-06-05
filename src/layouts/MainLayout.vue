<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="q-px-lg q-py-sm bg-white text-dark">
      <div  class=" flex items-center justify-between">
        <img class="logo" src="~assets/logo.webp">
        <q-tabs class="gt-sm"  indicator-color="transparent"
                active-color="red-13"
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

        </q-tabs>
        <div class="gt-sm q-gutter-sm">
          <q-btn
            flat
            dense
            round
            icon="lab la-vk"
          />
          <q-btn
            flat
            dense
            round
            icon="lab la-telegram"
          />
          <q-btn
            flat
            dense
            round
            icon="lab la-youtube"
          />

        </div>
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
      <div class="q-py-lg text-center"> <img class="logo" src="~assets/logo.webp"></div>

       <q-list  >
      <q-item ><router-link to="/">Главная</router-link></q-item>
      <q-item ><router-link to="/node">Нода</router-link></q-item>

      <q-item > <a  href="https://scan.rupay.pro">RuPay Scan</a></q-item>
      <q-item > <a href="https://wallet.rupay.pro">RuPay Wallet</a></q-item>


    </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <footer class="bg-grey-9 q-py-lg text-white">
      <div class="container">
        <div class="row q-col-gutter-lg">
          <div class="col-12 col-sm-6">
            <img class="q-mb-md logo" src="~assets/logo.webp">
            <div class="q-gutter-sm">
              <q-btn
                flat
                dense
                round
                icon="lab la-vk"
              />
              <q-btn
                flat
                dense
                round
                icon="lab la-telegram"
              />
              <q-btn
                flat
                dense
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
  }

  // {
  //   title: 'Преимущества',
  //   link: '/'
  // },
  // {
  //   title: 'FAQ',
  //   link: '/'
  // },
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
