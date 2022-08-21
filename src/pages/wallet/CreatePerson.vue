<template>
  <page>
    <page-body class="q-px-md">
      <page-header ></page-header>
      <div class="" style="height: 60px"></div>
<!--      v-if="!shared && !verify_sent"-->
      <div v-if="!shared" class="">

        <div class="flex items-center justify-start q-mb-lg">
          <q-avatar size="150px" class="relative-position q-mr-md">
            <img :src="person.imageUrl ? person.imageUrl :  '/noavatar.png'" alt="">
            <label class="absolute-bottom-right cursor-pointer" for="take_img">
              <q-icon size="sm" color="white" class="bg-primary round q-pa-sm" name="photo_camera"></q-icon>
              <input id="take_img" ref="photo" @change="handleUpload" style="display: none" type="file">
            </label>
          </q-avatar>
          <p>Фото *</p>
        </div>
        <q-input v-model="person.firstName"  rounded label="Имя*" outlined clearable  class="q-mb-md"/>
        <q-input v-model="person.lastName" rounded label="Фамилия *" outlined clearable  class="q-mb-md"/>
        <q-input v-model="person.middleName" rounded label="Отчество" outlined clearable  class="q-mb-md"/>

        <q-input label="Дата рождения*" outlined clearable rounded  v-model="person.birthday" mask="date" :rules="['date']">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="person.birthday">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Выбрать" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <p class="q-mb-none">Пол*</p>
        <div class="q-gutter-sm q-mb-lg">
          <q-radio v-model="person.gender" :val="0" label="Мужской" />
          <q-radio v-model="person.gender" :val="1" label="Женский" />

        </div>
        <btn label="Создать код" :disabled="can_create" :loading="is_loading" @click="createPerson" :outline="false"></btn>

      </div>
      <div v-show="shared">
        <p class="text-center text-weight-medium">Ожидайте верификацию</p>
        <p v-if="file_for_download" class="text-center text-weight-medium">Ваш файл подтверждения -
          <a style="" id="d_link" :href="file_for_download">скачать</a></p>
      </div>
    </page-body>
  </page>
</template>
<script setup>
import {EraChain} from 'erachain-js-api'
import {useNotify} from "src/helpers/utils";
import { useEraStore } from 'stores/eraChain'
const eraStore = useEraStore()
import { useAccountStore } from 'stores/account'
const accountStore = useAccountStore()
import {ref,computed} from "vue"

const photo  = ref(null)

const MAX_WIDTH = 320
const MAX_HEIGHT = 200
const MIME_TYPE = "image/jpeg"
const QUALITY = 1
const verify_sent = localStorage.getItem('verify_sent')

let is_loading = ref(false)
let shared = ref(false)
let file_for_download = ref(null)

const person = ref({
  firstName: null,
  lastName: null,
  middleName: null,
  birthday: null,
  gender:0,
  userPhoto: null,
  imageUrl: null,
})

const can_create = computed(()=>{
  return !person.value.firstName || !person.value.lastName || !person.value.birthday || !person.value.userPhoto
})

const public_key = computed(()=>{
  return accountStore.addresses[accountStore.currentAddressIdx].publicKey
})

const current_address = computed(()=>{
  return accountStore.addresses[accountStore.currentAddressIdx].address
})

const handleUpload = async () => {
  let file = photo.value.files[0]

  const blobURL = URL.createObjectURL(file);
  const img = new Image();
  img.src = blobURL;
  img.onerror = function () {
    URL.revokeObjectURL(this.src);
    // Handle the failure properly
    console.log("Cannot load image");
  };
  img.onload = function () {
    URL.revokeObjectURL(this.src);
    const [newWidth, newHeight] = calculateSize(img, MAX_WIDTH, MAX_HEIGHT);
    const canvas = document.createElement("canvas");
    canvas.width = newWidth;
    canvas.height = newHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, newWidth, newHeight);
    canvas.toBlob(
      (blob) => {
        // Handle the compressed image. es. upload or save in local state
        console.log('Original file', file);
        console.log('Compressed file', blob);
        if (blob.size > 1000000){
          useNotify('negative','Выберите другое изображение<br>это слишком большое')
          return
        }

        if (blob.size < 11000){
          useNotify('negative','Выберите другое изображение<br>это слишком маленькое')
          return
        }else {
          person.value.userPhoto = new File([blob], 'image.jpg', {type: blob.type});
          person.value.imageUrl = URL.createObjectURL(person.value.userPhoto)
        }

      },
      MIME_TYPE,
      QUALITY
    );
  };
};

function calculateSize(img, maxWidth, maxHeight) {
  let width = img.width;
  let height = img.height;

  if (width > height) {
    if (width > maxWidth) {
      height = Math.round((height * maxWidth) / width);
      width = maxWidth;
    }
  } else {
    if (height > maxHeight) {
      width = Math.round((width * maxHeight) / height);
      height = maxHeight;
    }
  }
  return [width, height];
}

function getFio(){
  if (person.value.middleName){
    return person.value.firstName + ' ' + person.value.lastName + ' '+ person.value.middleName
  }else {
    return person.value.firstName + ' ' + person.value.lastName
  }

}

const createPerson = async () => {
  is_loading.value = !is_loading.value
  const keyPair = await eraStore.getKeyPair()
  const account = new EraChain.Type.PublicKeyAccount(keyPair.publicKey)
  const imageB64 = new Int8Array(await person.value.userPhoto.arrayBuffer())
  const personObj = await new EraChain.Type.PersonHuman(
    account,
    getFio(),
    new Date(person.value.birthday).getTime(),
    new Date(person.value.birthday).getTime(),
    person.value.gender,
    '', // Раса
    0, // Широта
    0, // Долгота
    '', // Цвет кожи
    '', // Цвет глаз
    '', // Цвет волос
    0, // Рост,
    new Int8Array(0), // Иконка
    imageB64,
    ''
);
  const raw = await personObj.raw64(keyPair.secretKey);
  const txt_file = new Blob([raw], {type: 'text/plain'});
  const file = new File([txt_file], `${current_address.value}.txt`, { type: 'text/plain' });
  console.log(txt_file)
  file_for_download.value = URL.createObjectURL(file)
  is_loading.value = !is_loading.value

  shared.value = true
  let link = document.getElementById('d_link')
  link.href = URL.createObjectURL(file)
  link.setAttribute("download", "raw.txt");
  localStorage.setItem('verify_sent',true)

}



</script>
<style lang="sass">
.round
  border-radius: 100%
</style>
