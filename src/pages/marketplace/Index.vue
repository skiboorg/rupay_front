<template>
  <q-page padding>
    <div class="container marketplace">
    <h3 class="main-grid__text_top_heading">
      <span>Маркетплейс</span>

    </h3>


<!--      <div class="buisness-token">  </div>-->
<!--      buisness-token__grid-->

        <div class="row q-col-gutter-md">
          <div class="col-12 col-sm-6 col-md-3 flex items-center justify-center"> <router-link to="/marketplace/olf" class="buisness-token__grid_item">
            <img src="~assets/new/olf-token.png" alt="" class="buisness-token__grid_item_pic" />
          </router-link>         </div>

          <div class="col-12 col-sm-6 col-md-3 flex items-center justify-center"> <router-link  to="/marketplace/rupay" class="buisness-token__grid_item">
            <img src="~assets/new/rulogo.png" alt="" class="buisness-token__grid_item_pic" />
          </router-link> </div>
          <div class="col-12 col-sm-6 col-md-3 flex items-center justify-center"> <router-link  to="/marketplace/vip" class="buisness-token__grid_item">
            <img src="~assets/market/vip/1048619.png" alt="" class="buisness-token__grid_item_pic" />
          </router-link> </div>
          <div class="col-12 col-sm-6 col-md-3 flex items-center justify-center"><router-link to="/marketplace/blago" class="buisness-token__grid_item">
            <img  src="~assets/market/bb.png" alt="" class="buisness-token__grid_item_pic image q-mb-xs" />
            <p class="no-margin">Токен Благо</p>
          </router-link> </div>

          <div class="col-12 col-sm-6 col-md-3 flex items-center justify-center"> <router-link to="/marketplace/chikenbro" class="buisness-token__grid_item">
            <img src="~assets/new/chicken-bro.png" alt="" class="buisness-token__grid_item_pic" />
          </router-link>
          </div>

<!--       -->
<!--          <div class="col-6 col-sm-3 text-center">   <router-link to="/marketplace/sky" class="buisness-token__grid_item">-->
<!--            <img  src="~assets/market/sky.jpeg" alt="" class="buisness-token__grid_item_pic image " />-->

<!--          </router-link>       </div>-->
<!--          <div class="col-6 col-sm-3 text-center">  <router-link to="/marketplace/broker" class="buisness-token__grid_item">-->
<!--            <img  src="~assets/market/broker.jpeg" alt="" class="buisness-token__grid_item_pic image q-mb-xs" />-->
<!--            <p class="no-margin">Токен Ваш Брокер</p>-->
<!--          </router-link>         </div>-->

<!--          <div class="col-6 col-sm-3 text-center">-->
<!--            <a  class="buisness-token__grid_item">-->
<!--              <img src="~assets/new/SOON.png" alt="" class="buisness-token__grid_item_pic"/>-->
<!--            </a>-->
<!--          </div>-->







          <!--          <img src="~assets/new/marketplace-dot-circle.svg" alt="" class="buisness-token__grid_dot-circle">-->
        </div>
      </div>



<!--    <section class="row q-col-gutter-lg marketplace">-->

<!--      -->
<!--      -->
<!--      <div class="col-12 col-md-6">-->
<!--        <div class="real-estate-token">-->
<!--          <h3 class="real-estate-token__heading">Токены, обеспеченные <br> недвижимостью:</h3>-->
<!--          <div class="real-estate-token__grid">-->
<!--            <router-link to="/marketplace/a700" class="real-estate-token__grid_item">-->
<!--              <img src="~assets/new/ApartAv-token.png" alt="" class="real-estate-token__grid_item_pic" />-->
<!--            </router-link>-->

<!--            <a  class="real-estate-token__grid_item"-->
<!--          ><img src="~assets/new/SOON.png" alt="" class="real-estate-token__grid_item_pic" /></a-->
<!--          ><a  class="real-estate-token__grid_item"-->
<!--          ><img src="~assets/new/SOON.png" alt="" class="real-estate-token__grid_item_pic" /></a-->
<!--          ><a  class="real-estate-token__grid_item"-->
<!--          ><img src="~assets/new/SOON.png" alt="" class="real-estate-token__grid_item_pic"-->
<!--          /></a>-->
<!--            <img src="~assets/new/marketplace-dot-circle.svg" alt="" class="real-estate-token__grid_dot-circle">-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->


<!--    </section>-->

  </q-page>

</template>
<script setup>

</script>
<style lang="sass">
.marketplace
  padding-top: 0px
.image
  width: 50%
  height: auto
  object-fit: cover
  border-radius: 20px

</style>
