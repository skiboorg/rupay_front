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
            <router-link class="nav-menu__list_li_link" to="/wallet">
              <p :class="$route.path === '/wallet' ? 'active' : ''">RUpay Wallet</p>
            </router-link>

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

      <div class="container">
        <div style="padding-top: 0" class="main-grid wallet">
          <div class="main-grid__text_top full-width">
            <q-page-container>
              <router-view />
            </q-page-container>
          </div>

          <div class="main-grid__img_container">
            <svg viewBox="0 0 372 306" fill="none" xmlns="http://www.w3.org/2000/svg" class="main-grid__img_container_svg-1">
              <path d="M2.60003 102.531C15.351 87.2324 35.8436 62.6461 44.496 52.2653" stroke="black" stroke-width="6"/>
              <path d="M2.60003 52.2653C15.351 36.9672 35.8436 12.3809 44.496 2.00004" stroke="#002FCC" stroke-width="6"/>
              <path d="M56.684 102.531C69.435 87.2324 89.9276 62.6461 98.58 52.2653" stroke="black" stroke-width="6"/>
              <path d="M56.684 52.2653C69.435 36.9671 89.9276 12.3809 98.58 2.00001" stroke="#002FCC" stroke-width="6"/>
              <path d="M110.768 102.531C123.519 87.2324 144.012 62.6461 152.664 52.2653" stroke="black" stroke-width="6"/>
              <path d="M110.768 52.2653C123.519 36.9671 144.012 12.3809 152.664 2.00001" stroke="#002FCC" stroke-width="6"/>
              <path d="M164.852 102.531C177.603 87.2324 198.096 62.6461 206.748 52.2653" stroke="black" stroke-width="6"/>
              <path d="M164.852 52.2653C177.603 36.9672 198.096 12.3809 206.748 2.00004" stroke="#002FCC" stroke-width="6"/>
              <path d="M218.936 303.592C231.687 288.293 252.18 263.707 260.832 253.326" stroke="black" stroke-width="6"/>
              <path d="M218.936 253.326C231.687 238.028 252.18 213.442 260.832 203.061" stroke="#002FCC" stroke-width="6"/>
              <path d="M218.936 203.061C231.687 187.763 252.18 163.177 260.832 152.796" stroke="black" stroke-width="6"/>
              <path d="M218.936 152.796C231.687 137.498 252.18 112.911 260.832 102.53" stroke="#002FCC" stroke-width="6"/>
              <path d="M218.936 102.531C231.687 87.2324 252.18 62.6461 260.832 52.2653" stroke="black" stroke-width="6"/>
              <path d="M218.936 52.2652C231.687 36.9671 252.18 12.3808 260.832 1.99998" stroke="#002FCC" stroke-width="6"/>
              <path d="M273.02 303.592C285.771 288.293 306.264 263.707 314.916 253.326" stroke="black" stroke-width="6"/>
              <path d="M273.02 253.326C285.771 238.028 306.264 213.442 314.916 203.061" stroke="#002FCC" stroke-width="6"/>
              <path d="M273.02 203.061C285.771 187.763 306.263 163.177 314.916 152.796" stroke="black" stroke-width="6"/>
              <path d="M273.02 152.796C285.771 137.498 306.263 112.911 314.916 102.53" stroke="#002FCC" stroke-width="6"/>
              <path d="M273.02 102.531C285.771 87.2324 306.263 62.6461 314.916 52.2653" stroke="black" stroke-width="6"/>
              <path d="M273.02 52.2653C285.771 36.9672 306.263 12.3809 314.916 2.00004" stroke="#002FCC" stroke-width="6"/>
              <path d="M327.104 303.592C339.855 288.293 360.348 263.707 369 253.326" stroke="black" stroke-width="6"/>
              <path d="M327.104 253.326C339.855 238.028 360.348 213.442 369 203.061" stroke="#002FCC" stroke-width="6"/>
              <path d="M327.104 203.061C339.855 187.763 360.348 163.177 369 152.796" stroke="black" stroke-width="6"/>
              <path d="M327.104 152.796C339.855 137.498 360.348 112.911 369 102.53" stroke="#002FCC" stroke-width="6"/>
              <path d="M327.104 102.531C339.855 87.2324 360.348 62.6461 369 52.2653" stroke="black" stroke-width="6"/>
            </svg>

            <img draggable="false"

                 class="main-grid__img_container_pic"
                 src="~assets/new/mm.png"
                 alt=""
            />
            <svg viewBox="0 0 223 184" fill="none" xmlns="http://www.w3.org/2000/svg"                     class="main-grid__img_container_svg-2"
            >
              <path d="M220.628 121.619C213.055 130.706 200.883 145.309 195.743 151.475" stroke="black" stroke-width="6"/>
              <path d="M220.628 151.475C213.055 160.561 200.883 175.165 195.743 181.33" stroke="#002FCC" stroke-width="6"/>
              <path d="M188.504 121.619C180.931 130.706 168.759 145.309 163.62 151.475" stroke="black" stroke-width="6"/>
              <path d="M188.504 151.475C180.931 160.561 168.759 175.165 163.62 181.33" stroke="#002FCC" stroke-width="6"/>
              <path d="M156.38 121.619C148.807 130.706 136.635 145.309 131.496 151.475" stroke="black" stroke-width="6"/>
              <path d="M156.38 151.475C148.807 160.561 136.635 175.165 131.496 181.33" stroke="#002FCC" stroke-width="6"/>
              <path d="M124.256 121.619C116.683 130.706 104.511 145.309 99.3717 151.475" stroke="black" stroke-width="6"/>
              <path d="M124.256 151.475C116.683 160.561 104.511 175.165 99.3717 181.33" stroke="#002FCC" stroke-width="6"/>
              <path d="M92.1325 2.19618C84.5589 11.2827 72.387 25.886 67.2478 32.0519" stroke="black" stroke-width="6"/>
              <path d="M92.1324 32.0519C84.5588 41.1384 72.387 55.7418 67.2478 61.9076" stroke="#002FCC" stroke-width="6"/>
              <path d="M92.1325 61.9076C84.5589 70.9941 72.387 85.5974 67.2478 91.7633" stroke="black" stroke-width="6"/>
              <path d="M92.1325 91.7633C84.5589 100.85 72.387 115.453 67.2478 121.619" stroke="#002FCC" stroke-width="6"/>
              <path d="M92.1325 121.619C84.5589 130.706 72.387 145.309 67.2478 151.475" stroke="black" stroke-width="6"/>
              <path d="M92.1325 151.475C84.5589 160.561 72.387 175.165 67.2478 181.33" stroke="#002FCC" stroke-width="6"/>
              <path d="M60.0086 2.19618C52.435 11.2827 40.2632 25.886 35.1239 32.0519" stroke="black" stroke-width="6"/>
              <path d="M60.0086 32.0519C52.435 41.1384 40.2632 55.7418 35.124 61.9076" stroke="#002FCC" stroke-width="6"/>
              <path d="M60.0087 61.9076C52.4351 70.9941 40.2632 85.5974 35.124 91.7633" stroke="black" stroke-width="6"/>
              <path d="M60.0087 91.7633C52.4351 100.85 40.2632 115.453 35.124 121.619" stroke="#002FCC" stroke-width="6"/>
              <path d="M60.0087 121.619C52.4351 130.706 40.2632 145.309 35.124 151.475" stroke="black" stroke-width="6"/>
              <path d="M60.0087 151.475C52.4351 160.561 40.2632 175.165 35.124 181.33" stroke="#002FCC" stroke-width="6"/>
              <path d="M27.8847 2.19618C20.3111 11.2827 8.13923 25.886 3 32.0519" stroke="black" stroke-width="6"/>
              <path d="M27.8847 32.0519C20.3111 41.1384 8.13924 55.7418 3.00002 61.9076" stroke="#002FCC" stroke-width="6"/>
              <path d="M27.8847 61.9076C20.3111 70.9941 8.13926 85.5974 3.00003 91.7633" stroke="black" stroke-width="6"/>
              <path d="M27.8847 91.7633C20.3111 100.85 8.13926 115.453 3.00003 121.619" stroke="#002FCC" stroke-width="6"/>
              <path d="M27.8847 121.619C20.3111 130.706 8.13926 145.309 3.00003 151.475" stroke="black" stroke-width="6"/>
            </svg>

          </div>


        </div>
      </div>



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
.q-page-container
  padding: 0 !important
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
