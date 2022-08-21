<template>
    <q-dialog
      v-model="globalStore.transactionInfoModalVisible"
      persistent

    >
      <q-card style="width: 900px; max-width: 100vw;">
        <q-header style="position: unset"  class="text-white q-py-sm items-center flex justify-between">
          <q-btn label="Назад" no-caps v-close-popup icon="las la-angle-left" unelevated/>
          <p class="q-mb-none q-mr-sm">Транзакция #{{transactionInfo.seqNo}}</p>
        </q-header>
        <div class="" style="height: 60px"></div>
        <q-card-section class="q-pt-none">
          <p class="text-right">
            <a class="text-dark text-weight-medium"
               :href="`https://scan.rupay.pro/index/blockexplorer.html?tx=${transactionInfo.seqNo}&lang=ru`"
               target="_blank">
              Открыть в блок-эксплорере</a>
          </p>
          <q-list dense separator>
            <q-item class="no-padding">
              <q-item-section side class="text-weight-medium text-dark">Дата</q-item-section>
              <q-item-section class="text-caption">{{transactionInfo.fullDate}}</q-item-section>
            </q-item>
            <q-item class="no-padding">
              <q-item-section side class="text-weight-medium text-dark">Создатель</q-item-section>
              <q-item-section class="text-caption">
                <span style="max-width: 90%" class="ellipsis">{{transactionInfo.creator}}</span>
                {{transactionInfo.creator_name ? `${transactionInfo.creator_name}` : ''}}
              </q-item-section>
            </q-item>

            <q-item class="no-padding">
              <q-item-section side class="text-weight-medium text-dark">Подтверждений</q-item-section>
              <q-item-section class="text-caption">{{transactionInfo.confirmations}}</q-item-section>
            </q-item>
            <q-item class="no-padding">
              <q-item-section side class="text-weight-medium text-dark">Размер</q-item-section>
              <q-item-section class="text-caption">{{transactionInfo.size}}</q-item-section>
            </q-item>
            <q-item class="no-padding">
              <q-item-section side class="text-weight-medium text-dark">Подпись</q-item-section>
              <q-item-section class="text-caption"><span style="max-width: 100%" class="ellipsis">{{transactionInfo.signature}}</span></q-item-section>
            </q-item>
            <q-item class="no-padding">
              <q-item-section side class="text-weight-medium text-dark">Получатель</q-item-section>
              <q-item-section class="text-caption">
                <span style="max-width: 90%" class="ellipsis">{{transactionInfo.recipient}}</span>
                {{transactionInfo.recipient_name ? `${transactionInfo.recipient_name}` : ''}}
              </q-item-section>
            </q-item>
            <q-item class="no-padding">
              <q-item-section side class="text-weight-medium text-dark">Сумма</q-item-section>
              <q-item-section class="text-caption">{{transactionInfo.amount}} {{transactionInfo.asset_name}}</q-item-section>
            </q-item>
            <q-item class="no-padding">
              <q-item-section side class="text-weight-medium text-dark">Статус</q-item-section>
              <q-item-section class="text-caption"><q-badge color="positive" text-color="white"  style="width: 30%">Выполнена</q-badge></q-item-section>
            </q-item>
            <q-item class="no-padding bg-grey-3">
              <q-item-section side class="text-weight-medium text-dark">Все данные транзакции</q-item-section>
            </q-item>
            <q-item class="no-padding" v-for="(val,key) in transactionInfo" :key="key">
              <q-item-section side class="text-weight-medium text-dark">{{ key }}</q-item-section>
              <q-item-section class="text-caption"><span style="word-break: break-all" class="">{{val}}</span></q-item-section>
            </q-item>


          </q-list>


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

</script>
