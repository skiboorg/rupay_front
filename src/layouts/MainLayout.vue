<template>
  <q-layout view="lHh Lpr lFf">
<!--    <q-header  class="q-px-lg q-py-sm bg-primary text-blue-grey-2">-->
<!--      <div  class=" flex items-center justify-between">-->
<!--        <img class="logo" src="~assets/logo_t.png">-->
<!--        <q-tabs class="gt-sm"  indicator-color="transparent"-->
<!--                active-color="white"-->
<!--                v-model="curLink">-->

<!--          <q-route-tab  no-caps-->
<!--                        :ripple="false"-->
<!--                        v-for="(tab,index) in menuItems"-->
<!--                        :key="tab.title"-->
<!--                        :name="index"-->
<!--                        :label="tab.title"-->
<!--                        :to="tab.link" />-->
<!--          <q-route-tab  no-caps-->
<!--                        :ripple="false"-->
<!--                        target="_blank"-->
<!--                        label="RuPay Scan"-->
<!--                        href="https://scan.rupay.pro" />-->
<!--           <q-route-tab  no-caps-->
<!--                        :ripple="false"-->
<!--                        target="_blank"-->
<!--                        label="RuPay Wallet"-->
<!--                        href="https://wallet.rupay.pro" />-->
<!--          <q-btn-->
<!--            flat-->
<!--            dense-->
<!--            href="https://vk.com/pypay"-->
<!--            target="_blank"-->
<!--            round-->
<!--            icon="lab la-vk"-->
<!--          />-->
<!--          <q-btn-->
<!--            flat-->
<!--            dense-->
<!--            href="https://t.me/rypay_pro"-->
<!--            round-->
<!--            target="_blank"-->
<!--            icon="lab la-telegram"-->
<!--          />-->
<!--          <q-btn-->
<!--            flat-->
<!--            dense-->
<!--            href="https://youtube.com/channel/UCCPCsBr7zUmKknyZryNFDJA"-->
<!--            target="_blank"-->
<!--            round-->
<!--            icon="lab la-youtube"-->
<!--          />-->

<!--        </q-tabs>-->
<!--&lt;!&ndash;        <div class="gt-sm q-gutter-sm">&ndash;&gt;-->
<!--&lt;!&ndash;          <q-btn&ndash;&gt;-->
<!--&lt;!&ndash;            flat&ndash;&gt;-->
<!--&lt;!&ndash;            dense&ndash;&gt;-->
<!--&lt;!&ndash;            round&ndash;&gt;-->
<!--&lt;!&ndash;            icon="lab la-vk"&ndash;&gt;-->
<!--&lt;!&ndash;          />&ndash;&gt;-->
<!--&lt;!&ndash;          <q-btn&ndash;&gt;-->
<!--&lt;!&ndash;            flat&ndash;&gt;-->
<!--&lt;!&ndash;            dense&ndash;&gt;-->
<!--&lt;!&ndash;            round&ndash;&gt;-->
<!--&lt;!&ndash;            icon="lab la-telegram"&ndash;&gt;-->
<!--&lt;!&ndash;          />&ndash;&gt;-->
<!--&lt;!&ndash;          <q-btn&ndash;&gt;-->
<!--&lt;!&ndash;            flat&ndash;&gt;-->
<!--&lt;!&ndash;            dense&ndash;&gt;-->
<!--&lt;!&ndash;            round&ndash;&gt;-->
<!--&lt;!&ndash;            icon="lab la-youtube"&ndash;&gt;-->
<!--&lt;!&ndash;          />&ndash;&gt;-->

<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--        <q-btn-->
<!--          flat-->
<!--          dense-->
<!--          round-->
<!--          class="lt-md"-->
<!--          icon="menu"-->
<!--          aria-label="Menu"-->
<!--          @click="mobileMenuActive = !mobileMenuActive"-->
<!--        />-->

<!--      </div>-->



<!--    </q-header>-->
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
          <li class="nav-menu__list_li">
            <router-link class="nav-menu__list_li_link" to="/marketplace">
              <p :class="$route.path === '/marketplace' ? 'active' : ''">Маркетплейс</p>
            </router-link>


          </li>
          <li class="nav-menu__list_li">
            <a href="https://scan.rupay.pro/index/main.html?blocks" target="_blank" class="nav-menu__list_li_link"
            ><p>RUPAY Scan</p></a
            >
          </li>
          <li class="nav-menu__list_li">
            <a href="https://wallet.rupay.pro/dashboard" target="_blank" class="nav-menu__list_li_link"
            ><p>RUPAY Wallet</p></a
            >
          </li>
        </ul>

<!--        <div class="nav-menu__buttons">-->
<!--          <button class="nav-menu__buttons_btn readress">-->
<!--            <svg-->
<!--              width="40"-->
<!--              height="40"-->
<!--              viewBox="0 0 58 58"-->
<!--              fill="none"-->
<!--              xmlns="http://www.w3.org/2000/svg"-->
<!--            >-->
<!--              <circle cx="29" cy="29" r="23" />-->
<!--              <path-->
<!--                d="M46.4519 40.3281C45.4152 38.5398 43.9275 37.0546 42.1373 36.021C40.3471 34.9873 38.3171 34.4413 36.25 34.4375H21.75C19.6828 34.4413 17.6528 34.9873 15.8627 36.021C14.0725 37.0546 12.5848 38.5398 11.5481 40.3281C11.4852 40.4313 11.4435 40.546 11.4256 40.6655C11.4077 40.785 11.4138 40.9068 11.4437 41.0239C11.4736 41.141 11.5265 41.2509 11.5995 41.3472C11.6725 41.4435 11.764 41.5242 11.8686 41.5846C11.9732 41.6451 12.0889 41.684 12.2087 41.699C12.3286 41.7141 12.4503 41.7051 12.5666 41.6724C12.683 41.6398 12.7916 41.5842 12.8861 41.509C12.9807 41.4338 13.0592 41.3404 13.1171 41.2344C13.9946 39.7212 15.2535 38.4646 16.7683 37.59C18.2831 36.7154 20.0008 36.2534 21.75 36.25H36.25C37.9991 36.2534 39.7168 36.7154 41.2317 37.59C42.7465 38.4646 44.0054 39.7212 44.8828 41.2344C44.9408 41.3404 45.0193 41.4338 45.1138 41.509C45.2084 41.5842 45.317 41.6398 45.4333 41.6724C45.5497 41.7051 45.6714 41.7141 45.7912 41.699C45.9111 41.684 46.0268 41.6451 46.1314 41.5846C46.236 41.5242 46.3275 41.4435 46.4005 41.3472C46.4734 41.2509 46.5264 41.141 46.5563 41.0239C46.5861 40.9068 46.5923 40.785 46.5744 40.6655C46.5564 40.546 46.5148 40.4313 46.4519 40.3281Z"-->
<!--              />-->
<!--              <path-->
<!--                d="M29 32.625C31.1509 32.625 33.2534 31.9872 35.0418 30.7922C36.8302 29.5973 38.2241 27.8988 39.0472 25.9117C39.8703 23.9245 40.0857 21.7379 39.666 19.6284C39.2464 17.5189 38.2107 15.5811 36.6898 14.0602C35.1689 12.5393 33.2312 11.5036 31.1216 11.084C29.0121 10.6644 26.8255 10.8797 24.8383 11.7028C22.8512 12.5259 21.1527 13.9198 19.9578 15.7082C18.7628 17.4966 18.125 19.5991 18.125 21.75C18.1282 24.6332 19.275 27.3975 21.3138 29.4362C23.3525 31.475 26.1168 32.6218 29 32.625ZM29 12.6875C30.7924 12.6875 32.5445 13.219 34.0349 14.2148C35.5252 15.2106 36.6867 16.626 37.3727 18.2819C38.0586 19.9379 38.238 21.7601 37.8884 23.518C37.5387 25.276 36.6756 26.8907 35.4082 28.1582C34.1407 29.4256 32.526 30.2887 30.768 30.6384C29.0101 30.9881 27.1879 30.8086 25.5319 30.1227C23.876 29.4367 22.4606 28.2752 21.4648 26.7849C20.469 25.2945 19.9375 23.5424 19.9375 21.75C19.9402 19.3473 20.8959 17.0438 22.5949 15.3449C24.2938 13.6459 26.5973 12.6902 29 12.6875Z"-->
<!--              />-->
<!--              <path-->
<!--                d="M29 4.53125C24.1605 4.53125 19.4298 5.96632 15.4059 8.65498C11.382 11.3436 8.24582 15.1651 6.39383 19.6362C4.54185 24.1073 4.05729 29.0271 5.00142 33.7736C5.94555 38.5201 8.27598 42.88 11.698 46.302C15.12 49.724 19.4799 52.0545 24.2264 52.9986C28.9729 53.9427 33.8927 53.4582 38.3638 51.6062C42.8349 49.7542 46.6564 46.618 49.345 42.5941C52.0337 38.5702 53.4688 33.8395 53.4688 29C53.4614 22.5128 50.8811 16.2933 46.2939 11.7061C41.7067 7.11896 35.4873 4.53864 29 4.53125ZM29 51.6562C24.519 51.6562 20.1387 50.3275 16.4129 47.838C12.6871 45.3485 9.78316 41.8101 8.06837 37.6702C6.35357 33.5303 5.9049 28.9749 6.77909 24.58C7.65329 20.1851 9.81109 16.1481 12.9796 12.9796C16.1482 9.81108 20.1851 7.65328 24.58 6.77908C28.9749 5.90489 33.5303 6.35356 37.6702 8.06835C41.8101 9.78315 45.3485 12.6871 47.838 16.4129C50.3275 20.1387 51.6563 24.519 51.6563 29C51.6495 35.0067 49.2604 40.7655 45.013 45.0129C40.7655 49.2604 35.0068 51.6495 29 51.6562Z"-->
<!--              />-->
<!--            </svg>-->
<!--            <div class="readress__container">-->
<!--              <div class="readress__container_dropdown">-->
<!--                <a href="" class="readress__container_dropdown_a"-->
<!--                >RUpay Wallet.</a-->
<!--                >-->
<!--                <a href="" class="readress__container_dropdown_a"-->
<!--                >RUpay Scan.</a-->
<!--                >-->
<!--              </div>-->
<!--            </div>-->
<!--          </button>-->
<!--&lt;!&ndash;          <button class="nav-menu__buttons_btn theme">&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="nav-menu__buttons_btn_container">&ndash;&gt;-->
<!--&lt;!&ndash;              <img height="20" src="~assets/new/White_theme.svg" alt="" />&ndash;&gt;-->
<!--&lt;!&ndash;              <p>Светлая тема</p>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;          </button>&ndash;&gt;-->
<!--        </div>-->
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
