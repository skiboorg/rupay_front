<template>
  <q-page padding>
    <section class="">
      <div class="container">
        <h3 class="main-grid__text_top_heading">
          <span>Мобильное приложение </span><br />
          RUPAY
        </h3>


<!--        <div class="text-center q-mb-xl">-->
<!--          <q-btn-toggle-->
<!--            size="18px"-->
<!--            v-model="cur_app"-->
<!--            rounded-->
<!--            unelevated-->
<!--            toggle-color="primary"-->
<!--            color="grey-4"-->
<!--            text-color="dark"-->
<!--            :options="[-->
<!--          {value: 'iPhone', slot: 'one'},-->
<!--          {value: 'iPhone', slot: 'two'},-->

<!--        ]"-->
<!--          >-->
<!--            <template v-slot:one>-->
<!--              <div class="row items-center no-wrap">-->
<!--                <q-icon left name="lab la-apple" />-->
<!--                <div class="text-center">-->
<!--                  iPhone-->
<!--                </div>-->

<!--              </div>-->
<!--            </template>-->

<!--            <template v-slot:two>-->
<!--              <div class="row items-center no-wrap">-->
<!--                <div class="text-center">-->
<!--                  Android-->
<!--                </div>-->
<!--                <q-icon right name="lab la-android" />-->
<!--              </div>-->
<!--            </template>-->

<!--          </q-btn-toggle>-->
<!--        </div>-->
        <div v-if="cur_app==='iPhone'" class=" q-pa-lg">
          <div class="row q-col-gutter-md items-center">
            <div class="col-12 col-md-6">
              <p class="text-bold text-h6 text-primary">RUPAY-Онлайн</p>
              <p class="q-mb-xl">
                Мобильное приложение, которое работает на всех смартфонах.<br><br>
                Оно такое же, как приложение, только удобнее — его не надо скачивать,
                но можно установить на телефон и пользоваться не заходя на сайт.<br><br>
                После перехода на RuPay-Онлайн появится предложение установить приложение, если вы согласитесь на установку,
                то на экране Вашего устройства появится приложение RUPAY Wallet.
              </p>
              <div class="text-center">
                <q-btn size="18px" href="https://app.rupay.pro" label="Открыть RuPay-Онлайн" no-caps unelevated rounded color="primary"/>
              </div>

            </div>
            <div class="col-12 col-md-6">
              <q-img src="~assets/ia.png"/>
            </div>
          </div>
        </div>
        <div v-if="cur_app==='Android'" class="bg-grey-3 q-pa-lg">
          <div class="row q-col-gutter-md items-center">
            <div class="col-12 col-md-6">
              <p class="text-bold text-h6 text-primary">Мобильное приложение RUPAY Wallet</p>
              <p class="q-mb-xl">
                1. Скачивайте приложение только с сайта https://rupay.pro. На других могут быть мошенники.<br><br>

                2. При установке появится сообщение о ненадёжном источнике — это стандартное предупреждение. С приложением всё в порядке, не переживайте.<br><br>

                3. Нажмите Всё равно скачать, а потом — Разрешить установку.<br><br>
                4. Приложение установлено.<br><br>
                5. Если приложение сообщит о выходе новой версии, то необходимо удалить установленное приложение и начать с пункта 1
              </p>
              <div class="text-center">
              <q-btn size="18px" label="Скачать приложение" target="_blank" href="/rupay.apk" no-caps unelevated rounded color="primary"/>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <q-img src="~assets/a.png"/>
            </div>
          </div>
        </div>




      </div>
    </section>

  </q-page>

</template>
<script setup>
import axios from 'axios'
import {ref,onBeforeMount} from "vue";

let cur_app=ref('iPhone')
// onBeforeMount( async ()=> {
//   const app_version = await axios.post('https://xn--k1affs.xn--p1ai/api/settings/check_app_version', {version: process.env.APP_VERSION})
//   console.log('is need update', app_version.data)
// })
</script>
<style lang="sass">

</style>
