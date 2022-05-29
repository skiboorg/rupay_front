<template>
  <q-page>
    <section class="node">
      <div class="container full-height">
        <div class="flex column items-center justify-between full-height">

            <h1 class="text-white text-h4 text-bold text-center">Поддержи развитие блокчейна RUPAY<br>
              Установи себе НОДУ и получи дополнительный доход от форжинга
            </h1>
          <div class="">
            <div class="q-mb-md">
              <q-btn class="bg-white full-width" href="https://scan.rupay.pro" target="_blank" label="RuPay Scan"/>
            </div>
            <div class="q-mb-md">
              <q-btn class="bg-white full-width" href="/RUPAY.zip" label="УСТАНОВИТЬ"/>
            </div>
            <div class="">
              <q-btn class="bg-white full-width" @click="videoModal=true" label="ВИДЕО ИНСТРУКЦИЯ"/>
            </div>

          </div>
          <p></p>



        </div>
      </div>
    </section>

  </q-page>
  <q-dialog
    v-model="videoModal"
  >
    <q-card style="width: 700px; max-width: 80vw;">
        <q-video
          :ratio="16/9"
          src="https://www.youtube.com/embed/pmYPtmMMHGQ?rel=0"
        />
    </q-card>
  </q-dialog>
</template>
<script setup>
import {ref} from "vue";

const videoModal=ref(false)
</script>
<style lang="sass">
.node
  height: calc(100vh - 64px)
  background: url(~assets/node.webp) no-repeat center
  background-size: cover

</style>
