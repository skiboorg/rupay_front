<template>
  <q-page padding>
    <main>
      <div class="container">
        <img src="~assets/market/olf/Frame48096009.svg" alt="" class="container__icon" />
        <h1 class="container__title">Особенность инвестиций в Токен OLF</h1>
        <div class="container__description">
          <img
            src="~assets/market/olf/Frame48096013.svg"
            alt=""
            class="container__description_icon"
          />
          <p class="container__description_paragraph">
            Главная особенность токена в том, что он является основополагающим
            на блокчейне РуPay, а это значит, что любая транзакция в сети
            возможна только при наличии токена OLF. Ведь как и в любой
            децентрализованной сети, ни одной транзации не возможно провести без
            сжигания комиссии сети (Газа). Так вот в сети РуPay «газ» сжигается
            в OLF.
          </p>
          <img
            src="~assets/market/olf/Frame48096014.svg"
            alt=""
            class="container__description_icon"
          />
          <p class="container__description_paragraph">
            В сравнении с самой дешевой сетью TRC-20, где любая транзакция стоит
            1$, а по текущему курсу OLF 250 рублей, это всего лишь 39 копеек,
            даже при росте курса (а мы его ожидаем, так как эмиссия токена
            ограничена 25 млн) до 25000 рублей (в сто раз больше чем сейчас)
            транзакция будет стоить всего 39,75 рублей! Вне зависимости от суммы
            транзакции хоть 100 млн рублей все равно стоимость транзакции будет
            стоить не дороже 40 рублей!
          </p>
          <img
            src="~assets/market/olf/Frame48096015.svg"
            alt=""
            class="container__description_icon"
          />
          <p class="container__description_paragraph">
            И это далеко не весь плюс токена OLF, ведь в отличии от любой
            воздушной криптовалюты, которая обеспечена только спросом на нее,
            данный токен обеспечен всей собственностью Потребительского
            Кооператива по Развитию Гражданских инициатив РОЛФ, в собственность
            которой входят доли как в реальном бизнес секторе, так и в онлайн. В
            том числе ПКРГИ РОЛФ принадлежит контрольный пакет проекта РУПЕЙ!
          </p>
        </div>
        <div class="container__divider_big"></div>
        <a href="#" target="_blank" rel="noopener noreferrer" class="container__token-emission">
          <p class="container__token-emission_paragraph">
            Договор о выпуске цифрового токена
          </p>
          <img
            src="~assets/market/olf/document.svg"
            alt=""
            class="container__token-emission_icon"
          />
        </a>
        <div class="container__divider_small"></div>
        <div class="container__divider_big"></div>
      </div>
    </main>


  </q-page>

</template>
<script setup>

</script>
<style lang="sass" scoped>

main
  background: linear-gradient(180deg, #aeb2b8 0%, #eeaf3b 100%)

.container
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%)
  border-radius: 0px 600px 0px 0px
  display: flex
  flex-direction: column
  align-items: center
  padding: 0 5%

  &__icon
    margin: 80px 0 80px 0

  &__title
    font-family: "Montserrat"
    font-style: normal
    font-weight: 700
    font-size: 48px
    line-height: 77px
    text-align: center
    color: #29272b
    margin-bottom: 90px

  &__description
    display: flex
    flex-wrap: wrap
    align-items: center

    &_icon
      flex: 10%
      height: 70px

    &_paragraph
      flex: 90%
      font-family: "Roboto", sans-serif
      font-style: normal
      font-weight: 400
      font-size: 18px
      line-height: 29px
      display: flex
      align-items: center
      color: rgba(20, 22, 24, 0.85)
      margin: 15px 0

  &__divider_big
    background: #751a20
    height: 3px
    width: 80%
    max-width: 500px
    margin: 50px 0

  &__divider_small
    background: #751a20
    height: 3px
    width: 70%
    max-width: 300px

  &__token-emission
    display: flex
    flex-direction: column
    align-items: center
    margin-bottom: 50px
    text-decoration: none

    &_icon
      width: 30px

    &_paragraph
      font-family: "Roboto", sans-serif
      font-style: normal
      font-weight: 700
      font-size: 18px
      line-height: 29px
      display: flex
      align-items: center
      color: rgba(20, 22, 24, 0.85)
      margin-bottom: 10px

  @media screen and (max-width: 769px)
    &__icon
      margin: 50px 0 25px 0
      height: 70px

    &__title
      font-size: 20px
      margin-bottom: 45px
      line-height: 50px

    &__description
      &_paragraph
        font-size: 16px
        text-align: center

    &__token-emission
      text-align: center
</style>
