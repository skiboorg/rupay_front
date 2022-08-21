<template>
  <q-btn rounded unelevated no-caps color="primary" :loading="is_loading" class="q-py-md q-px-lg"  :outline="outline" :label="label"/>

</template>
<script>

export default {
  name: 'Button',
  props:{
    label: {
      type: String,
      required: true
    },
    is_loading: {
      type: Boolean,
      required: false,
      default:false
    },
    outline: {
      type: Boolean,
      required: false,
      default:true
    },
  }
}
</script>
