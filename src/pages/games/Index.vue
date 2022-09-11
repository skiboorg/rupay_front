<template>
  <q-page padding>
    <section class="marketplace">
      <div class="container">


            <h3 class="game__heading">Игры, обеспеченные реальным бизнесом<br>
             <span class="text-primary">Играй и зарабатывай!</span>
            </h3>

            <div class="game__grid">
              <div @click="$router.push('/games/chiken_bro')" class="game__grid__item">
                <img src="~assets/game1.jpeg" alt="">
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
  padding-top: 100px
.game__heading
  font-family: "Montserrat"
  font-style: normal
  font-weight: 600
  font-size: 36px
  line-height: 44px
  color: #000000
.game__grid
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))
  grid-gap: 15px
  &__item
    cursor: pointer
    img
      width: 100%
      height: 100%
      object-fit: contain
      border-radius: 50px
      display: block
      transform: scale(1)
      transition: all .2s linear
      &:hover
        transform: scale(1.1)


</style>
