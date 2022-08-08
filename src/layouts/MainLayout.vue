<template>
  <q-layout view="lHh Lpr lFf">
    <header>
    <router-link to="/">
      <img class="logo" src="~assets/logo.svg" alt="">
    </router-link>


      <div class="nav-menu">
        <ul class="nav-menu__list">
          <li class="nav-menu__list_li">
            <router-link to="/" class="nav-menu__list_li_link">

              <p :class="$route.path === '/' ? 'active' : ''">Главная</p>
            </router-link>
          </li>
          <li class="nav-menu__list_li">
            <router-link to="/apps" class="nav-menu__list_li_link">

              <p :class="$route.path === '/apps' ? 'active' : ''">Приложение</p>
            </router-link>
          </li>

          <li class="nav-menu__list_li">
            <router-link class="nav-menu__list_li_link" to="/marketplace">
              <p :class="$route.path === '/marketplace' ? 'active' : ''">Маркетплейс</p>
            </router-link>
          </li>
          <li class="nav-menu__list_li">
            <router-link class="nav-menu__list_li_link" to="/games">
              <p :class="$route.path === '/games' ? 'active' : ''">RUpay cashGame</p>
            </router-link>
          </li>
          <li class="nav-menu__list_li">
            <router-link class="nav-menu__list_li_link" to="/ido">
              <p :class="$route.path === '/ido' ? 'active' : ''">IDO RUpay</p>
            </router-link>
          </li>

          <li class="nav-menu__list_li">
            <a href="https://scan.rupay.pro/index/main.html?blocks" target="_blank" class="nav-menu__list_li_link"
            ><p>RUpay Scan</p></a
            >
          </li>
          <li class="nav-menu__list_li">
            <a href="https://wallet.rupay.pro/dashboard" target="_blank" class="nav-menu__list_li_link"
            ><p>RUpay Wallet</p></a
            >
          </li>
          <li class="nav-menu__list_li contact">
            <a href="javascript:;" class="nav-menu__list_li_link">
              <p >
                Контакты
                <svg
                  width="18"
                  height="11"
                  viewBox="0 0 18 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.707107"
                    y1="1.29289"
                    x2="9.69564"
                    y2="10.2814"
                    stroke="#2B60EB"
                    stroke-width="2"
                  />
                  <line
                    y1="-1"
                    x2="12.7117"
                    y2="-1"
                    transform="matrix(-0.707107 0.707107 0.707107 0.707107 17.9904 2)"
                    stroke="#2B60EB"
                    stroke-width="2"
                  />
                </svg>
              </p>
              <div class="nav-menu__list_li_link_container">
                <div class="nav-menu__list_li_link_container_contact-dropdown">
                  <a href="https://t.me/rypay_pro" target="_blank" class="nav-menu__list_li_link_container_contact-dropdown_a">
                    Telegram</a
                  >
                  <a href="https://youtube.com/channel/UCCPCsBr7zUmKknyZryNFDJA" target="_blank" class="nav-menu__list_li_link_container_contact-dropdown_a">
                    YouTube
                  </a>
                  <a href="https://vk.com/rupay_pro" target="_blank" class="nav-menu__list_li_link_container_contact-dropdown_a">
                    ВКонтакте
                  </a>
                  <!--                  <a href="" target="_blank" class="nav-menu__list_li_link_container_contact-dropdown_a">-->
                  <!--                    Тех. Поддержка-->
                  <!--                  </a>-->
                </div>

              </div>
            </a>
          </li>
        </ul>
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
    </header>
    <q-drawer
      v-model="mobileMenuActive"
      behavior="mobile"
      bordered
      side="right"
    >
      <div class="q-py-lg text-center">
      <img class="logo" src="~assets/logo.svg">
      </div>

       <q-list  >
      <q-item ><router-link class="mobile-link" to="/">Главная</router-link></q-item>
         <q-item ><router-link class="mobile-link" to="/apps">Мобильные приложения</router-link></q-item>

      <q-item ><router-link class="mobile-link" to="/marketplace">Маркетплейс</router-link></q-item>
      <q-item ><router-link class="mobile-link" to="/games">RUpay cashGame</router-link></q-item>
      <q-item ><router-link class="mobile-link" to="/ido">IDO RUpay</router-link></q-item>


      <q-item > <a class="mobile-link" href="https://scan.rupay.pro">RuPay Scan</a></q-item>
      <q-item > <a class="mobile-link" href="https://wallet.rupay.pro">RuPay Wallet</a></q-item>


    </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
<!--    <footer class="bg-grey-9 q-py-lg text-white">-->
<!--      <div class="container">-->
<!--        <div class="row q-col-gutter-lg q-mb-lg">-->
<!--          <div class="col-12 col-sm-6">-->
<!--            <img class="q-mb-md logo" src="~assets/logo_t.png">-->
<!--            <div class="q-gutter-sm">-->
<!--              <q-btn-->
<!--                flat-->
<!--                dense-->
<!--                href="https://vk.com/pypay"-->
<!--                target="_blank"-->
<!--                round-->
<!--                icon="lab la-vk"-->
<!--              />-->
<!--              <q-btn-->
<!--                flat-->
<!--                dense-->
<!--                href="https://t.me/rypay_pro"-->
<!--                round-->
<!--                target="_blank"-->
<!--                icon="lab la-telegram"-->
<!--              />-->
<!--              <q-btn-->
<!--                flat-->
<!--                dense-->
<!--                href="https://youtube.com/channel/UCCPCsBr7zUmKknyZryNFDJA"-->
<!--                target="_blank"-->
<!--                round-->
<!--                icon="lab la-youtube"-->
<!--              />-->

<!--            </div>-->
<!--          </div>-->
<!--          <div class="col-12 col-sm-6">-->
<!--            <div class="footer-grid">-->
<!--              <p class="no-margin" v-for="tab in menuItems" :key="tab.title">-->
<!--                <router-link class="text-caption"  :to="tab.link">{{tab.title}}</router-link>-->
<!--              </p>-->
<!--              <p class="no-margin">-->
<!--                <a class="text-caption" href="https://scan.rupay.pro">RuPay Scan</a>-->
<!--              </p>-->
<!--               <p class="no-margin">-->
<!--                <a class="text-caption" href="https://wallet.rupay.pro">RuPay Wallet</a>-->
<!--              </p>-->
<!--            </div>-->

<!--          </div>-->

<!--        </div>-->
<!--        <q-separator dark spaced="lg"/>-->
<!--        <p class="q-mb-sm">2022 (С) Потребительский кооператив по развитию гражданских инициатив РОЛФ</p>-->
<!--        <p class="q-mb-sm">ИНН: 2366034781 | ОГРН : 1222300016223</p>-->
<!--        <p class="text-caption q-mb-none">Cайт и сервисы rupay.pro доступны только пайщикам кооператива, как действующим так и ассоциированным</p>-->
<!--      </div>-->
<!--    </footer>-->
    <footer>
      <p class="footer-txt">
        2022 © Потребительский кооператив по развитию гражданских инициатив
        РОЛФ.
      </p>
      <p class="footer-txt">
        ИНН: 2366034781 | ОГРН : 1222300016223
      </p>
      <p class="footer-txt">
        Cайт и сервисы rupay.pro доступны только пайщикам кооператива, как
        действующим так и ассоциированным.
      </p>
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
.mobile-link
  color: $dark
  text-decoration: none
  font-size: 18px

.footer-grid
  display: grid
  grid-template-columns: 1fr
  grid-gap: 5px
.logo
  width: 250px
  height: 40px
  object-fit: contain
</style>
