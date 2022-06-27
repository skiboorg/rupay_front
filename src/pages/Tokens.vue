<template>
  <q-page padding>
    <section class="">
      <div class="container">
        <div class="row q-mb-lg">
          <div class="col-12 col-md-6">
            <p class="text-h3 text-bold">Токенизация активов и бизнеса</p>
            <p class="text-h6">Это создание цифровой записи в блокчейне для определенного, реального актива.
              Токенизация помогает повысить ликвидность активов и является инструментом
              привлечения финансирования для бизнесов, которые находятся на ранних стадиях
              развития и уже успешно развивающегося предприятия.</p>



          </div>
          <div class="col-12 col-md-6">
            <q-img src="~assets/token.webp"/>
          </div>
        </div>

        <div class="row q-col-gutter-md q-mb-xl">
          <div class="col-12 col-sm-6 col-md-3 ">

              <q-icon class="q-mb-md" size="60px" color="primary" name="las la-exchange-alt"/>


            <p class="no-margin">Огромное количество активов можно токенизировать и сделать
              доступными для торговли на бирже: недвижимость, ценные бумаги,
              драгоценные металлы, произведения искусства, земля и т.д.</p>
          </div>
          <div class="col-12 col-sm-6 col-md-3">
            <q-icon class="q-mb-md" size="60px" color="primary" name="las la-coins"/>
            <p class="no-margin">Бизнес, которому необходимы инвестиции, выпускает токены, которые
              являются записями в распределенном реестре блокчейна.</p>
          </div>
          <div class="col-12 col-sm-6 col-md-3">
            <q-icon class="q-mb-md" size="60px" color="primary" name="las la-hand-holding-usd"/>
            <p class="no-margin">В отличие от эмиссии активов на рынке традиционных финансов, бизнесу
              не нужны посредники: банк-платежный агент, депозитарий и т.д. Компания
              выпускает токены и передает их непосредственно инвесторам,
              предоставляющим капитал</p>
          </div>
          <div class="col-12 col-sm-6 col-md-3">
            <q-icon class="q-mb-md" size="60px" color="primary" name="las la-file-contract"/>
            <p class="no-margin">Токен хранится в кошельке, а право собственности защищено смартконтрактом.</p>
          </div>
        </div>






        <p class="text-h3 text-bold">Преимущества токенизации активов</p>

        <p class="text-h6">Токенизация бизнес-активов набирает популярность благодаря ряду
          преимуществ:</p>


        <div class="row q-col-gutter-md q-mb-xl">
          <div class="col-12 col-sm-6 col-md-3 ">
            <q-icon class="q-mb-md" size="60px" color="primary" name="las la-chart-line"/>
            <p class="no-margin"><span class="text-bold">Повышение эффективности управления</span>  — учет всех активов в
              блокчейне гарантирует полную прозрачность</p>
          </div>
          <div class="col-12 col-sm-6 col-md-3 ">
            <q-icon class="q-mb-md" size="60px" color="primary" name="las la-shield-alt"/>
            <p class="no-margin"><span class="text-bold">Защита права собственности</span> — в отличие от обычных реестров,
            блокчейн-данные невозможно отредактировать без разрешения
            владельца или выполнения условий смарт-контракта.  </p>
          </div>
          <div class="col-12 col-sm-6 col-md-3 ">
            <q-icon class="q-mb-md" size="60px" color="primary" name="las la-comments-dollar"/>
            <p class="no-margin"><span class="text-bold">Выход на новые рынки</span> — токен проще и дешевле
            распространять и популяризировать, чем физический товар или
            услугу, в обход традиционных рекламных инструментов.  </p>
          </div>
          <div class="col-12 col-sm-6 col-md-3 ">
            <q-icon class="q-mb-md" size="60px" color="primary" name="las la-search-dollar"/>
            <p class="no-margin"><span class="text-bold">Повышение ликвидности</span> — благодаря токенам можно “дробить”
              ценность таких объектов, как недвижимость или предметы роскоши,
              не разделяя сам объект, что позволяет быстрее и проще привлекать
              инвестиции.  </p>
          </div>
        </div>




        <p class="text-h3 text-bold">Как токенизировать бизнес-активы: технический аспект</p>
        <p class="text-h6">Блокчейн позволяет токенизировать практически любой объект, данные о
          котором можно сохранить в цифровом виде. Это может быть как право
          собственности на недвижимость, так и конкретная услуга, к примеру
          юридическая консультация. Таким образом, можно токенизировать  все
          активы бизнеса — от производственной базы и помещения — до товара
          или услуги.</p>
        <p>Процесс токенизации можно разделить на 4 этапа:</p>

        <div class="flex items-center q-mb-sm no-wrap">
          <q-icon color="primary" class="q-mr-sm" name="looks_one"/>
          <p class="no-margin">Выбор активов</p>
        </div>
        <div class="flex items-center q-mb-sm no-wrap">
          <q-icon color="primary" class="q-mr-sm" name="looks_two"/>
          <p class="no-margin">Определение типа токена</p>
        </div>
        <div class="flex items-center q-mb-sm no-wrap">
          <q-icon color="primary" class="q-mr-sm" name="looks_3"/>
          <p class="no-margin">Генерация токена</p>
        </div>
        <div class="flex items-center q-mb-lg no-wrap">
          <q-icon color="primary" class="q-mr-sm" name="looks_4"/>
          <p class="no-margin">Распространение токена и создание сопутствующего ПО.</p>
        </div>
        <p class="text-h6">Очень важно правильно подобрать тип токена под каждый объект. В США
          и Европе была разработана унифицированная таксономия,
          предусматривающая разделение токенов на:</p>

        <div class="flex items-center q-mb-sm no-wrap">
          <q-icon color="primary" class="q-mr-sm" name="security"/>
          <p class="no-margin">Инвестиционные (они же Security tokens) — предназначены для
            получения дивидендов</p>
        </div>

        <div class="flex items-center q-mb-sm no-wrap">
          <q-icon color="primary" class="q-mr-sm" name="sell"/>
          <p class="no-margin">Функциональные (или Utility tokens) — дают право на доступ к
            определенному товару, объекту или услуге</p>
        </div>

        <div class="flex items-center q-mb-xl no-wrap">
          <q-icon color="primary" class="q-mr-sm" name="paid"/>
          <p class="no-margin">Платежные (Payment tokens) — имеют схожие черты с
            криптовалютами, но отличаются ограниченной областью применения</p>
        </div>

        <p class="text-h3 text-bold">Токенизация вашего бизнеса с Рупей</p>
        <p class="text-h6">Одним из направлений деятельности проекта Рупей является платформа
          для токенизации активов. Мы стремимся создать удобный инструмент,
          который бы позволил предпринимателям создавать и выводить на биржу
          собственные токены. С помощью Рупей вы сможете:</p>


        <div class="flex items-center q-mb-sm no-wrap">
          <q-icon color="primary" class="q-mr-sm" name="check_circle_outline"/>
          <p class="no-margin">Запустить собственный токен</p>
        </div>
        <div class="flex items-center q-mb-sm no-wrap">
          <q-icon color="primary" class="q-mr-sm" name="check_circle_outline"/>
          <p class="no-margin">Получить инфраструктуру для управления токеном </p>
        </div>
        <div class="flex items-center q-mb-sm no-wrap">
          <q-icon color="primary" class="q-mr-sm" name="check_circle_outline"/>
          <p class="no-margin">Привлечь инвесторов</p>
        </div>
        <div class="flex items-center q-mb-xl no-wrap">
          <q-icon color="primary" class="q-mr-sm" name="check_circle_outline"/>
          <p class="no-margin">Залистить токен на бирже</p>
        </div>

        <div class="bg-primary q-pa-xl text-white">
          <div class="row q-col-gutter-lg items-center">
            <div class="col-12 col-md-6">
              <p class="text-h5 text-bold">Уже готовы привлечь дополнительные финансы в ваш бизнес без кредитов и долгов?</p>
              <p class="no-margin text-h6">Наш менеджер готов Вам в этом помочь</p>
            </div>
            <div class="col-12 col-md-6">
              <q-input  dark  dense v-model="name" label="Ваше имя"/>
              <q-input dark dense v-model="org" label="Название организации*"/>
              <q-input dark dense v-model="phone" prefix="+7" mask="(###) ###-##-##" fill-mask="_" label="Контактный телефон*"/>
              <q-input dark class="q-mb-lg" v-model="text" dense type="textarea" label="Комментарий"/>
              <div class="text-center">
                <q-btn no-caps :loading="is_loading" :disable="!org || !phone" unelevated color="dark" label="Жду звонка" @click="sendMsg"/>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>

  </q-page>

</template>
<script setup>
import {ref} from "vue";
import axios from 'axios'
import { Notify } from 'quasar'

const name=ref(null)
const org=ref(null)
const phone=ref(null)
const text=ref(null)
const is_loading=ref(false)

async function sendMsg (){
  is_loading.value = !is_loading.value
  await axios.get(`https://api.telegram.org/bot${process.env.BOT_KEY}/sendMessage?chat_id=${process.env.CHAT_ID}
  &text=Имя : ${name.value ? name.value : "Не указано"}%0A
  Телефон ${phone.value}%0A
  Организация: ${phone.value}%0A
  Текст: ${text.value ? text.value : "Не указан"}`)
  Notify.create({
    message: 'Сообщение отправлено',
    color:'positive'
  })
   name.value=null
   org.value=null
   phone.value=null
   text.value=null
  is_loading.value = !is_loading.value

}
</script>
<style lang="sass">

</style>
