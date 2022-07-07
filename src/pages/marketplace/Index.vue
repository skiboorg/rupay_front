<template>
  <q-page padding>
    <section class="">
      <div class="container">
        <p class="text-h3 text-bold q-mb-xl text-center">Маркетплейс</p>

        <div class="row q-col-gutter-lg">
          <div class="col-16 col-sm-6">
            <p class="text-h6 text-bold ">Бизнес токены</p>
            <q-separator class="q-mb-md"/>
            <div class="row q-col-gutter-md">
              <div class="col-12 col-sm-6 ">
                <router-link to="/marketplace/chikenbro">
                  <q-img fit="contain" src="~assets/market/ch.png"/>
                </router-link>
              </div>

            </div>
          </div>
          <div class="col-16 col-sm-6">
            <p class="text-h6 text-bold  ">Токены, обеспеченные недвижимостью</p>
            <q-separator class="q-mb-md"/>
            <div class="row q-col-gutter-md">
              <div class="col-12 col-sm-6 ">
                <router-link to="/marketplace/a700">
                  <q-img fit="contain" src="~assets/market/a700/thumb.jpeg"/>
                </router-link>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>

  </q-page>

</template>
<script setup>

</script>
<style lang="sass">

</style>
