<template>

    <q-inner-loading
      class="z-max"

      :showing="globalStore.is_loading"
      color="primary"
    >
      <q-spinner
        color="primary"
        size="4em"
      />
    </q-inner-loading>

  <p v-if="showDigits" class="text-center text-weight-medium ">{{currentMode === 'init' ? 'Придумайте пинкод' : 'Повторите пинкод'}}</p>
  <p v-else class="text-center text-weight-medium ">Введите пинкод</p>
  <div class="text-center q-gutter-md q-mb-lg">


    <q-btn v-if="showDigits" size="15px" round outline flat disable
           v-for="(item,index) in currentMode === 'init' ? code : repeat_code"
           :key="currentMode === 'init' ? index : index+30"
           :label="item===11? '&#x26AC;' : item"/>
    <q-btn v-else size="15px" flat round outline disable v-for="item1 in code" :key="item1" :label="item1===11? '&#x26AC;' : '&#x2733;'"/>
  </div>
  <div class="number-grid">
    <div class="number" v-for="item in numbers" :key="item" >
      <q-btn @click="addNumber(item)" size="18px"  round unelevated color="grey-3" text-color="dark" :label="item"/>
    </div>
    <div class="number">
      <q-btn @click="delNumber" size="18px" round  unelevated color="grey-9" flat icon="las la-backspace"/>
    </div>

  </div>

</template>
<script setup>
import {ref,computed} from 'vue'
import {useNotify} from "src/helpers/utils";
let code = ref([11,11,11,11])
let repeat_code = ref([11,11,11,11])
let currentDigit = ref(0)
let currentMode = ref('init')
const numbers = ref([1,2,3,4,5,6,7,8,9,0])

import { useGlobalStore } from 'stores/global'
const globalStore = useGlobalStore()

const props = defineProps({
  showDigits:Boolean
})

const emit = defineEmits(
  ['pincode_ready']
)

function delNumber(){

  if (currentDigit.value!==0){
    currentMode.value==='init' ? code.value[currentDigit.value-1] = 11 : repeat_code.value[currentDigit.value-1] = 11
    currentDigit.value -= 1
  }
}
function addNumber(number){
  console.log()
  if (currentDigit.value<=3){
    currentMode.value==='init' ? code.value[currentDigit.value] = number : repeat_code.value[currentDigit.value] = number
    currentDigit.value += 1
  }

    if (currentDigit.value===4) {
      if (props.showDigits){
        if (currentMode.value === 'init') {
          currentMode.value = 'repeat'
          currentDigit.value = 0
        } else {
          const code1 = code.value.join()
          const code2 = repeat_code.value.join()
          console.log(code1)
          console.log(code2)
          console.log(code1 === code2)
          if (code1 === code2){
            emit('pincode_ready',code.value.join().replaceAll(',',''))
          }else {
            currentMode.value = 'init'
            currentDigit.value = 0
            code.value = [11,11,11,11]
            repeat_code.value = [11,11,11,11]
            useNotify('negative','Пинкоды не совпадают')
          }

        }
      }else {
        emit('pincode_ready',code.value.join().replaceAll(',',''))
      }

    }


}

</script>
<style lang="sass">
.number-grid
  display: flex
  flex-wrap: wrap
  max-width: 280px
  align-items: center
  justify-content: flex-end
  align-self: center
  margin: 0 auto
.number
  width: calc(100% / 3) // one-third - two margins divided equally among 3 items
  //margin-right: 8px
  margin-bottom: 24px
  text-align: center

</style>
