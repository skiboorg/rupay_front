<template>
  <q-dialog
    v-model="globalStore.pinCodeModalVisible"
    persistent
    maximized


  >
    <q-card class="bg-white fullscreen">
      <q-card-section class="flex column items-center justify-center fullscreen">
        <pin-code :showDigits="false" @pincode_ready="checkPincode"></pin-code>
        <q-btn class="q-mt-md" @click="globalStore.togglePinCodeModalVisible()" no-caps color="negative" label="Отмена"/>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script>
export default {
  props:['transactionInfo']
}
</script>
<script setup>
import { useGlobalStore } from 'stores/global'
const globalStore = useGlobalStore()
import {useNotify} from "src/helpers/utils";
import {decryptSeed} from "src/helpers/authHelpers"


const emit = defineEmits(
  ['pincode_ок']
)

function checkPincode(val){
  const hash = localStorage.getItem('hash')
  const encrypted_seed = decryptSeed({hash,password:val})
  console.log(encrypted_seed)
  if(encrypted_seed){
    emit('pincode_ок')
    globalStore.togglePinCodeModalVisible()
  }else {
    useNotify('negative', 'Неверный пинкод')
  }
}

</script>
