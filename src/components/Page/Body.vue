<template>
  <div class="page-body">

    <slot/>
    <router-view v-slot="{ Component }">
      <transition
        appear
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>

</template>
<script>
export default ({
  name: 'PageBody',

  props: ['background'],

  setup () {

  }
})
</script>
<style lang="sass">
.page-body
  background-size: cover !important
  background-repeat: no-repeat !important
  background-position: center !important
</style>
