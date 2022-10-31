<template>
  <q-page padding>
    <main>
      <div class="container">
        <h3 class="main-grid__text_top_heading"><span>Токен: Ваш Брокер </span></h3>
<p class="text-body1">
  Средства, собранные с реализации данного токена направляются на покупку Акций различных компаний.
  Таким образом и формируется ликвидность данного токена. <br><br>Токен доступен к моментальной покупке и продаже.
  Когда пользователь площадки Рупей приобретает данный токен, на средства вырученные с продажи покупаются Акции
  (отчет о купленных акциях публикуется на лендинговой странице в разделе маркет Плейс посвящённый данному токену).<br><br>
  Совокупная цена акций делится на общее количество реализованных токенов, таким образом формируется цена моментального откупа данного токена.
  В случае продажи пользователем данного токена обратно, на данную сумму продаются и акции для покрытия откупа данного токена.
</p>
        <div class="">

          <q-list bordered separator>
            <q-item v-for="item in data" :key="item.id">
              <q-item-section avatar>
                <q-avatar rounded>
                  <img :src="item.icon">
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label > <span class="text-bold">{{item.name}}</span> <span class="gt-sm"> | {{item.amount}}шт - {{item.price}} руб</span></q-item-label>
                <q-item-label class="lt-md" caption>{{item.amount}}шт - {{item.price}} руб</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-item-label ><span class="text-dark text-bold">{{item.amount * item.price}} руб </span>
                <span class="gt-sm" :class="[item.change[0]==='-' ? 'text-red' : 'text-green']">  {{item.change}} </span>
                </q-item-label>
                <q-item-label caption class="lt-md" :class="[item.change[0]==='-' ? 'text-red' : 'text-green']">{{item.change}}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </main>
  </q-page>
</template>
<script setup>
import {onBeforeMount,ref} from "vue";
import {api} from "boot/axios";

let data = ref([])

onBeforeMount( async ()=> {
  const resp = await api.get('/api/settings/broker')
  data.value=resp.data

})
</script>
