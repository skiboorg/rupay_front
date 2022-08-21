<template>
  <q-page padding>
    <section class="">
      <div class="container">
        <div class="main-grid">
          <div class="main-grid__text_top">
            <h3 class="main-grid__text_top_heading">
              <span>Блокчейн </span><br />
              платформа.
            </h3>
            <p class="main-grid__text_top_paragraph">
              Данный сайт является WEB-клиентом блокчейн-платформы RUpay.

            </p>
          </div>


          <div class="auth-card">
            <div class="auth-card__buttons flex items-center justify-center ">
              <q-btn @click="loginActive=true" unelevated no-caps :class="{'not-active':!loginActive}" :color="[loginActive ? 'primary' : '']" class="text-bold auth-card__button q-mr-xl " size="26px" label="Авторизация"/>
              <q-btn @click="loginActive=false" unelevated no-caps :class="{'not-active':loginActive}" :color="[!loginActive ? 'primary' : '']" class="text-bold auth-card__button" size="26px" label="Регистрация"/>
            </div>

            <Login v-if="loginActive" @seedGood="setSeed"/>



            <Register v-if="!loginActive " @openLogin="openLogin"/>
          </div>




        </div>
      </div>





    </section>

  </q-page>
</template>
<script>

import Login from "components/Auth/Login";
import Register from "components/Auth/Register";


import {ref} from "vue";
export default {
  name: 'IndexPage',
  components: {Register, Login},

  preFetch ({ redirect,router }) {
    const seed = localStorage.getItem('seed')
    if (seed){
      //redirect({ path: '/wallet/index' })

    }
  },

  setup(){
    const loginActive = ref(true)
    const is_seed_good = ref(false)
    const hash = localStorage.getItem('hash')

    function setSeed(val){
      is_seed_good.value  = val.val
    }
    function openLogin(val){
      is_seed_good.value  = false
      loginActive.value = true
    }

    return{
      loginActive,
      is_seed_good,
      hash,
      setSeed,
      openLogin
    }
  }
}
</script>
<style lang="sass">
.not-active
  background: #D6D9F2
  opacity: 0.95
  backdrop-filter: blur(25px)
.auth-card
  background: linear-gradient(112.73deg, rgba(185, 215, 234, 0.5) 43.11%, rgba(185, 215, 234, 0.2) 84.4%)
  backdrop-filter: blur(25px)
  border-radius: 30px
  width: 630px
  padding: 60px 20px 20px 20px
  position: relative
  &__button
    border-radius: 12px

  &__buttons
    top: -30px
    position: absolute
    left: 0
    right: 0
.logo
  text-align: center
  img
    width: 200px
    height: 200px
    object-fit: contain
    transition: all .2s linear
  &.logo-small
    img
      width: 100px
      height: 100px

</style>
