<template>
  <q-page padding>
    <main>
      <h1 class="title">ApartAVToken</h1>
      <div class="token-description">
        <img
          src="~assets/market/a700/image154.png"
          alt="ЖК АВЕНЮ АПАРТ на Дыбенко"
          class="token-description__img"
        />
        <p class="token-description__paragraph">
          ApartAVToken - это токен обеспеченный реальным недвижимым имуществом,
          а именно двухкомнатными Апартаментами в ЖК АВЕНЮ АПАРТ на Дыбенко,
          площадью 47,46 кв.м., принадлежащие по договору участия долевого
          строительства №СН-3-33-ИП от 24 февраля 2021 года. Права собственности
          по договору принадлежат Козлову Александру Юрьевичу 17.08.1989 года.
          Подробную документацию и договор обеспечения и выпуска токена, можно
          найти на сайте RuPay.pro в разделе, токены обеспеченные недвижимостью.
          Рыночная стоимость на моменты выпуска токена 8200000 рублей.
          Собственник выпустил 8 200 000 токенов ориентируясь на текущий курс.
          При выкупе данных токенов собственником, рыночная стоимость
          (обеспеченной) недвижимости делится на общее количество токенов, таким
          образом и формируется курс выпускаемого токена.
        </p>
      </div>
      <div class="token-dynamic">
        <h2 class="token-dynamic__title">
          Динамика средней цены за квадратный метр
        </h2>
        <img src="~assets/market/a700/image145.png" alt="" class="token-dynamic__img" />
        <p class="token-dynamic__paragraph">
          Расположение для апарт-отеля выбрано удачное - это Невский район
          Петербурга. Поблизости нет вредных производств и дорог федерального
          значения, рядом метро. Часть территории вокруг апарт-отеля
          зарезервирована под IT-парк.
        </p>
        <p class="token-dynamic__paragraph">
          Из минусов можно назвать отсутствие возможности получить постоянную
          регистрацию, при покупке нежилых помещений в комплексе оформляется
          только временная. Удаленность от центра - комплекс расположен на
          последней станции оранжевой линии метро.
        </p>
      </div>
    </main>
    <footer>
      <div class="token-emission">
        <img
          src="~assets/market/a700/system-uicons_document-justified.svg"
          alt=""
          class="token-emission__icon"
        />
        <p class="token-emission__paragraph">
          <a href="apart_t.pdf" target="_blank">Договор о выпуске цифрового токена</a>

        </p>
      </div>
      <a href="#" class="document-link">
        <p class="document-link__paragraph">
          <a href="apart_d.pdf" target="_blank">Документы, подтверждающие право на собственность</a>

        </p>
      </a>
    </footer>

  </q-page>

</template>
<script setup>

</script>
<style lang="scss" scoped>


main {
  background: linear-gradient(180deg, #003e91 0%, rgba(255, 255, 255, 0) 100%);
}
.title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 116px;
  text-align: center;
  color: #e6eaf3;
  text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  margin-bottom: 50px;
  padding-top: 50px;
  @media screen and (max-width: 660px) {
    font-size: 64px;
    margin-bottom: 30px;
    line-height: 50px;
    padding-top: 30px;
  }
  @media screen and (max-width: 425px) {
    font-size: 32px;
    margin-bottom: 25px;
    padding-top: 25px;
    line-height: 40px;
  }
}
.token-description {
  display: flex;
  justify-content: space-evenly;
  margin: 0 5% 90px 5%;
  &__paragraph {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    display: flex;
    align-items: center;
    color: #ffffff;
    width: 45%;
  }
  &__img {
    border-radius: 16px;
    width: 45%;
    object-fit: contain;
    max-width: 707px;
  }
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 45px;
    &__img {
      width: 85%;
      margin-bottom: 10px;
    }
    &__paragraph {
      width: 85%;
      text-align: center;
      @media screen and (max-width: 426px) {
        font-size: 18px;
      }
    }
  }
}
.token-dynamic {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10% 90px 10%;
  &__title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    display: flex;
    align-items: center;
    text-align: center;
    color: rgba(0, 0, 0, 0.85);
    margin-bottom: 50px;
  }
  &__img {
    max-width: 70%;
    margin-bottom: 100px;
    @media screen and (max-width: 900px) {
      max-width: 100%;
      margin-bottom: 50px;
    }
  }
  &__paragraph {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    text-align: center;
    color: rgba(0, 0, 0, 0.85);
    margin-bottom: 30px;
  }
  @media screen and (max-width: 769px) {
    &__title {
      font-size: 24px;
      line-height: 29px;
    }
    &__paragraph {
      font-size: 18px;
    }
  }
}
.token-emission {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 35px;
  &__icon {
    width: 48px;
    height: 48px;
  }
  &__paragraph {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    display: flex;
    align-items: center;
    text-align: center;
    color: rgba(0, 0, 0, 0.85);
  }
  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    font-size: 20px;
  }
}
.document-link {
  &__paragraph {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #1a406f;
    margin-bottom: 120px;
  }
}
</style>
