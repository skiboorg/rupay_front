<template>
  <q-page padding>

      <div class="flex items-center justify-center">
        <router-link  to="/marketplace/rupay" class="buisness-token__grid_item">
          <img src="~assets/new/rulogo.png" alt="" class="buisness-token__grid_item_pic" />
        </router-link>
      </div>


    <section class="row q-col-gutter-lg marketplace">

      <div class="col-12 col-md-6">
        <div class="buisness-token">
          <h3 class="buisness-token__heading">Токены, обеспеченные <br> бизнесом:</h3>
          <div class="buisness-token__grid">
            <router-link to="/marketplace/chikenbro" class="buisness-token__grid_item">
              <img src="~assets/new/chicken-bro.png" alt="" class="buisness-token__grid_item_pic" />
            </router-link>
            <router-link to="/marketplace/olf" class="buisness-token__grid_item">
              <img src="~assets/new/olf-token.png" alt="" class="buisness-token__grid_item_pic" />
            </router-link>

            <a  class="buisness-token__grid_item"
            ><img src="~assets/new/SOON.png" alt="" class="buisness-token__grid_item_pic" /></a
            ><a  class="buisness-token__grid_item"
          ><img src="~assets/new/SOON.png" alt="" class="buisness-token__grid_item_pic"
          /></a>
            <img src="~assets/new/marketplace-dot-circle.svg" alt="" class="buisness-token__grid_dot-circle">
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="real-estate-token">
          <h3 class="real-estate-token__heading">Токены, обеспеченные <br> недвижимостью:</h3>
          <div class="real-estate-token__grid">
            <router-link to="/marketplace/a700" class="real-estate-token__grid_item">
              <img src="~assets/new/ApartAv-token.png" alt="" class="real-estate-token__grid_item_pic" />
            </router-link>

            <a  class="real-estate-token__grid_item"
          ><img src="~assets/new/SOON.png" alt="" class="real-estate-token__grid_item_pic" /></a
          ><a  class="real-estate-token__grid_item"
          ><img src="~assets/new/SOON.png" alt="" class="real-estate-token__grid_item_pic" /></a
          ><a  class="real-estate-token__grid_item"
          ><img src="~assets/new/SOON.png" alt="" class="real-estate-token__grid_item_pic"
          /></a>
            <img src="~assets/new/marketplace-dot-circle.svg" alt="" class="real-estate-token__grid_dot-circle">
          </div>
        </div>
      </div>


    </section>

  </q-page>

</template>
<script setup>

</script>
<style lang="sass">
.marketplace
  padding-top: 0px
</style>
