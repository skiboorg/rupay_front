<template>

  <main>
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="white"
      ref="carousel"
      padding
      navigation
      class="slider"
    >
      <q-carousel-slide :name="1" >
        <div class="main-grid">
          <div class="main-grid__text_top">
            <h3 class="main-grid__text_top_heading">
              <span>Блокчейн </span><br />
              технологии.
            </h3>
            <p class="main-grid__text_top_paragraph">
              Это эволюция в сфере интернет-транзакций, достигаемая
              применением новых технологий. Всё это на собственном
              блокчейне, который обеспечивает прозрачность и безопасность.
            </p>
          </div>

          <div class="main-grid__img_container">
            <svg viewBox="0 0 372 306" fill="none" xmlns="http://www.w3.org/2000/svg" class="main-grid__img_container_svg-1">
              <path d="M2.60003 102.531C15.351 87.2324 35.8436 62.6461 44.496 52.2653" stroke="black" stroke-width="6"/>
              <path d="M2.60003 52.2653C15.351 36.9672 35.8436 12.3809 44.496 2.00004" stroke="#002FCC" stroke-width="6"/>
              <path d="M56.684 102.531C69.435 87.2324 89.9276 62.6461 98.58 52.2653" stroke="black" stroke-width="6"/>
              <path d="M56.684 52.2653C69.435 36.9671 89.9276 12.3809 98.58 2.00001" stroke="#002FCC" stroke-width="6"/>
              <path d="M110.768 102.531C123.519 87.2324 144.012 62.6461 152.664 52.2653" stroke="black" stroke-width="6"/>
              <path d="M110.768 52.2653C123.519 36.9671 144.012 12.3809 152.664 2.00001" stroke="#002FCC" stroke-width="6"/>
              <path d="M164.852 102.531C177.603 87.2324 198.096 62.6461 206.748 52.2653" stroke="black" stroke-width="6"/>
              <path d="M164.852 52.2653C177.603 36.9672 198.096 12.3809 206.748 2.00004" stroke="#002FCC" stroke-width="6"/>
              <path d="M218.936 303.592C231.687 288.293 252.18 263.707 260.832 253.326" stroke="black" stroke-width="6"/>
              <path d="M218.936 253.326C231.687 238.028 252.18 213.442 260.832 203.061" stroke="#002FCC" stroke-width="6"/>
              <path d="M218.936 203.061C231.687 187.763 252.18 163.177 260.832 152.796" stroke="black" stroke-width="6"/>
              <path d="M218.936 152.796C231.687 137.498 252.18 112.911 260.832 102.53" stroke="#002FCC" stroke-width="6"/>
              <path d="M218.936 102.531C231.687 87.2324 252.18 62.6461 260.832 52.2653" stroke="black" stroke-width="6"/>
              <path d="M218.936 52.2652C231.687 36.9671 252.18 12.3808 260.832 1.99998" stroke="#002FCC" stroke-width="6"/>
              <path d="M273.02 303.592C285.771 288.293 306.264 263.707 314.916 253.326" stroke="black" stroke-width="6"/>
              <path d="M273.02 253.326C285.771 238.028 306.264 213.442 314.916 203.061" stroke="#002FCC" stroke-width="6"/>
              <path d="M273.02 203.061C285.771 187.763 306.263 163.177 314.916 152.796" stroke="black" stroke-width="6"/>
              <path d="M273.02 152.796C285.771 137.498 306.263 112.911 314.916 102.53" stroke="#002FCC" stroke-width="6"/>
              <path d="M273.02 102.531C285.771 87.2324 306.263 62.6461 314.916 52.2653" stroke="black" stroke-width="6"/>
              <path d="M273.02 52.2653C285.771 36.9672 306.263 12.3809 314.916 2.00004" stroke="#002FCC" stroke-width="6"/>
              <path d="M327.104 303.592C339.855 288.293 360.348 263.707 369 253.326" stroke="black" stroke-width="6"/>
              <path d="M327.104 253.326C339.855 238.028 360.348 213.442 369 203.061" stroke="#002FCC" stroke-width="6"/>
              <path d="M327.104 203.061C339.855 187.763 360.348 163.177 369 152.796" stroke="black" stroke-width="6"/>
              <path d="M327.104 152.796C339.855 137.498 360.348 112.911 369 102.53" stroke="#002FCC" stroke-width="6"/>
              <path d="M327.104 102.531C339.855 87.2324 360.348 62.6461 369 52.2653" stroke="black" stroke-width="6"/>
            </svg>

            <img draggable="false"
              class="main-grid__img_container_pic"
              src="~assets/new/girl.png"
              alt=""
            />
            <svg viewBox="0 0 223 184" fill="none" xmlns="http://www.w3.org/2000/svg"                     class="main-grid__img_container_svg-2"
            >
              <path d="M220.628 121.619C213.055 130.706 200.883 145.309 195.743 151.475" stroke="black" stroke-width="6"/>
              <path d="M220.628 151.475C213.055 160.561 200.883 175.165 195.743 181.33" stroke="#002FCC" stroke-width="6"/>
              <path d="M188.504 121.619C180.931 130.706 168.759 145.309 163.62 151.475" stroke="black" stroke-width="6"/>
              <path d="M188.504 151.475C180.931 160.561 168.759 175.165 163.62 181.33" stroke="#002FCC" stroke-width="6"/>
              <path d="M156.38 121.619C148.807 130.706 136.635 145.309 131.496 151.475" stroke="black" stroke-width="6"/>
              <path d="M156.38 151.475C148.807 160.561 136.635 175.165 131.496 181.33" stroke="#002FCC" stroke-width="6"/>
              <path d="M124.256 121.619C116.683 130.706 104.511 145.309 99.3717 151.475" stroke="black" stroke-width="6"/>
              <path d="M124.256 151.475C116.683 160.561 104.511 175.165 99.3717 181.33" stroke="#002FCC" stroke-width="6"/>
              <path d="M92.1325 2.19618C84.5589 11.2827 72.387 25.886 67.2478 32.0519" stroke="black" stroke-width="6"/>
              <path d="M92.1324 32.0519C84.5588 41.1384 72.387 55.7418 67.2478 61.9076" stroke="#002FCC" stroke-width="6"/>
              <path d="M92.1325 61.9076C84.5589 70.9941 72.387 85.5974 67.2478 91.7633" stroke="black" stroke-width="6"/>
              <path d="M92.1325 91.7633C84.5589 100.85 72.387 115.453 67.2478 121.619" stroke="#002FCC" stroke-width="6"/>
              <path d="M92.1325 121.619C84.5589 130.706 72.387 145.309 67.2478 151.475" stroke="black" stroke-width="6"/>
              <path d="M92.1325 151.475C84.5589 160.561 72.387 175.165 67.2478 181.33" stroke="#002FCC" stroke-width="6"/>
              <path d="M60.0086 2.19618C52.435 11.2827 40.2632 25.886 35.1239 32.0519" stroke="black" stroke-width="6"/>
              <path d="M60.0086 32.0519C52.435 41.1384 40.2632 55.7418 35.124 61.9076" stroke="#002FCC" stroke-width="6"/>
              <path d="M60.0087 61.9076C52.4351 70.9941 40.2632 85.5974 35.124 91.7633" stroke="black" stroke-width="6"/>
              <path d="M60.0087 91.7633C52.4351 100.85 40.2632 115.453 35.124 121.619" stroke="#002FCC" stroke-width="6"/>
              <path d="M60.0087 121.619C52.4351 130.706 40.2632 145.309 35.124 151.475" stroke="black" stroke-width="6"/>
              <path d="M60.0087 151.475C52.4351 160.561 40.2632 175.165 35.124 181.33" stroke="#002FCC" stroke-width="6"/>
              <path d="M27.8847 2.19618C20.3111 11.2827 8.13923 25.886 3 32.0519" stroke="black" stroke-width="6"/>
              <path d="M27.8847 32.0519C20.3111 41.1384 8.13924 55.7418 3.00002 61.9076" stroke="#002FCC" stroke-width="6"/>
              <path d="M27.8847 61.9076C20.3111 70.9941 8.13926 85.5974 3.00003 91.7633" stroke="black" stroke-width="6"/>
              <path d="M27.8847 91.7633C20.3111 100.85 8.13926 115.453 3.00003 121.619" stroke="#002FCC" stroke-width="6"/>
              <path d="M27.8847 121.619C20.3111 130.706 8.13926 145.309 3.00003 151.475" stroke="black" stroke-width="6"/>
            </svg>

          </div>

          <div class="main-grid__text_bottom">
            <h3 class="main-grid__text_top_heading">
              <span>Регистрируйся,</span><br />будь в теме.
            </h3>
            <p class="main-grid__text_top_paragraph">
              Многие люди игнорируют прогресс. Сейчас то время, когда
              цифровые финансовые активы начинают интегрироваться в нашу
              жизнь. Не упусти свою возможность одним из первых узреть
              новую революционную технологию.
            </p>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" >
        <div class="second-grid">
          <div class="second-grid__text_top">
            <h3 class="second-grid__text_top_heading">
              <span>Нода </span><br />
              и её влияние.
            </h3>
            <p class="second-grid__text_top_paragraph">
              Нодой в контексте блокчейна обычно называется компьютер,
              который установил программное обеспечение под конкретную
              криптовалюту для участия в одноранговой сети. Каждая
              установка ноды ускоряет наш блокчейн. Вы получаете
              возможность создать свой узел в этой большой сети. Ваш
              компьютер сможет помогать обрабатывать транзакции в данном
              блокчейне. Вы можете внести свой вклад в развитие нашего
              проекта. Это довольно просто, а также очень важно для нас.
            </p>

          </div>
          <p class="second-grid__paragraph-mobile">
            Нодой в контексте блокчейна обычно называется компьютер,
            который установил программное обеспечение под конкретную
            криптовалюту для участия в одноранговой сети.
          </p>
          <div class="second-grid__img_container">
            <svg viewBox="0 0 372 306" fill="none" xmlns="http://www.w3.org/2000/svg" class="second-grid__img_container_svg-1">
              <path d="M2.60003 102.531C15.351 87.2324 35.8436 62.6461 44.496 52.2653" stroke="black" stroke-width="6"/>
              <path d="M2.60003 52.2653C15.351 36.9672 35.8436 12.3809 44.496 2.00004" stroke="#002FCC" stroke-width="6"/>
              <path d="M56.684 102.531C69.435 87.2324 89.9276 62.6461 98.58 52.2653" stroke="black" stroke-width="6"/>
              <path d="M56.684 52.2653C69.435 36.9671 89.9276 12.3809 98.58 2.00001" stroke="#002FCC" stroke-width="6"/>
              <path d="M110.768 102.531C123.519 87.2324 144.012 62.6461 152.664 52.2653" stroke="black" stroke-width="6"/>
              <path d="M110.768 52.2653C123.519 36.9671 144.012 12.3809 152.664 2.00001" stroke="#002FCC" stroke-width="6"/>
              <path d="M164.852 102.531C177.603 87.2324 198.096 62.6461 206.748 52.2653" stroke="black" stroke-width="6"/>
              <path d="M164.852 52.2653C177.603 36.9672 198.096 12.3809 206.748 2.00004" stroke="#002FCC" stroke-width="6"/>
              <path d="M218.936 303.592C231.687 288.293 252.18 263.707 260.832 253.326" stroke="black" stroke-width="6"/>
              <path d="M218.936 253.326C231.687 238.028 252.18 213.442 260.832 203.061" stroke="#002FCC" stroke-width="6"/>
              <path d="M218.936 203.061C231.687 187.763 252.18 163.177 260.832 152.796" stroke="black" stroke-width="6"/>
              <path d="M218.936 152.796C231.687 137.498 252.18 112.911 260.832 102.53" stroke="#002FCC" stroke-width="6"/>
              <path d="M218.936 102.531C231.687 87.2324 252.18 62.6461 260.832 52.2653" stroke="black" stroke-width="6"/>
              <path d="M218.936 52.2652C231.687 36.9671 252.18 12.3808 260.832 1.99998" stroke="#002FCC" stroke-width="6"/>
              <path d="M273.02 303.592C285.771 288.293 306.264 263.707 314.916 253.326" stroke="black" stroke-width="6"/>
              <path d="M273.02 253.326C285.771 238.028 306.264 213.442 314.916 203.061" stroke="#002FCC" stroke-width="6"/>
              <path d="M273.02 203.061C285.771 187.763 306.263 163.177 314.916 152.796" stroke="black" stroke-width="6"/>
              <path d="M273.02 152.796C285.771 137.498 306.263 112.911 314.916 102.53" stroke="#002FCC" stroke-width="6"/>
              <path d="M273.02 102.531C285.771 87.2324 306.263 62.6461 314.916 52.2653" stroke="black" stroke-width="6"/>
              <path d="M273.02 52.2653C285.771 36.9672 306.263 12.3809 314.916 2.00004" stroke="#002FCC" stroke-width="6"/>
              <path d="M327.104 303.592C339.855 288.293 360.348 263.707 369 253.326" stroke="black" stroke-width="6"/>
              <path d="M327.104 253.326C339.855 238.028 360.348 213.442 369 203.061" stroke="#002FCC" stroke-width="6"/>
              <path d="M327.104 203.061C339.855 187.763 360.348 163.177 369 152.796" stroke="black" stroke-width="6"/>
              <path d="M327.104 152.796C339.855 137.498 360.348 112.911 369 102.53" stroke="#002FCC" stroke-width="6"/>
              <path d="M327.104 102.531C339.855 87.2324 360.348 62.6461 369 52.2653" stroke="black" stroke-width="6"/>
            </svg>

            <img draggable="false"
              class="second-grid__img_container_pic"
              src="~assets/new/hand.png"
              alt=""
            />
            <svg viewBox="0 0 223 184" fill="none" xmlns="http://www.w3.org/2000/svg" class="second-grid__img_container_svg-2">
              <path d="M220.628 121.619C213.055 130.706 200.883 145.309 195.743 151.475" stroke="black" stroke-width="6"/>
              <path d="M220.628 151.475C213.055 160.561 200.883 175.165 195.743 181.33" stroke="#002FCC" stroke-width="6"/>
              <path d="M188.504 121.619C180.931 130.706 168.759 145.309 163.62 151.475" stroke="black" stroke-width="6"/>
              <path d="M188.504 151.475C180.931 160.561 168.759 175.165 163.62 181.33" stroke="#002FCC" stroke-width="6"/>
              <path d="M156.38 121.619C148.807 130.706 136.635 145.309 131.496 151.475" stroke="black" stroke-width="6"/>
              <path d="M156.38 151.475C148.807 160.561 136.635 175.165 131.496 181.33" stroke="#002FCC" stroke-width="6"/>
              <path d="M124.256 121.619C116.683 130.706 104.511 145.309 99.3717 151.475" stroke="black" stroke-width="6"/>
              <path d="M124.256 151.475C116.683 160.561 104.511 175.165 99.3717 181.33" stroke="#002FCC" stroke-width="6"/>
              <path d="M92.1325 2.19618C84.5589 11.2827 72.387 25.886 67.2478 32.0519" stroke="black" stroke-width="6"/>
              <path d="M92.1324 32.0519C84.5588 41.1384 72.387 55.7418 67.2478 61.9076" stroke="#002FCC" stroke-width="6"/>
              <path d="M92.1325 61.9076C84.5589 70.9941 72.387 85.5974 67.2478 91.7633" stroke="black" stroke-width="6"/>
              <path d="M92.1325 91.7633C84.5589 100.85 72.387 115.453 67.2478 121.619" stroke="#002FCC" stroke-width="6"/>
              <path d="M92.1325 121.619C84.5589 130.706 72.387 145.309 67.2478 151.475" stroke="black" stroke-width="6"/>
              <path d="M92.1325 151.475C84.5589 160.561 72.387 175.165 67.2478 181.33" stroke="#002FCC" stroke-width="6"/>
              <path d="M60.0086 2.19618C52.435 11.2827 40.2632 25.886 35.1239 32.0519" stroke="black" stroke-width="6"/>
              <path d="M60.0086 32.0519C52.435 41.1384 40.2632 55.7418 35.124 61.9076" stroke="#002FCC" stroke-width="6"/>
              <path d="M60.0087 61.9076C52.4351 70.9941 40.2632 85.5974 35.124 91.7633" stroke="black" stroke-width="6"/>
              <path d="M60.0087 91.7633C52.4351 100.85 40.2632 115.453 35.124 121.619" stroke="#002FCC" stroke-width="6"/>
              <path d="M60.0087 121.619C52.4351 130.706 40.2632 145.309 35.124 151.475" stroke="black" stroke-width="6"/>
              <path d="M60.0087 151.475C52.4351 160.561 40.2632 175.165 35.124 181.33" stroke="#002FCC" stroke-width="6"/>
              <path d="M27.8847 2.19618C20.3111 11.2827 8.13923 25.886 3 32.0519" stroke="black" stroke-width="6"/>
              <path d="M27.8847 32.0519C20.3111 41.1384 8.13924 55.7418 3.00002 61.9076" stroke="#002FCC" stroke-width="6"/>
              <path d="M27.8847 61.9076C20.3111 70.9941 8.13926 85.5974 3.00003 91.7633" stroke="black" stroke-width="6"/>
              <path d="M27.8847 91.7633C20.3111 100.85 8.13926 115.453 3.00003 121.619" stroke="#002FCC" stroke-width="6"/>
              <path d="M27.8847 121.619C20.3111 130.706 8.13926 145.309 3.00003 151.475" stroke="black" stroke-width="6"/>
            </svg>

          </div>

          <p class="second-grid__paragraph-mobile">
            Каждая
            установка ноды ускоряет наш блокчейн. Вы получаете
            возможность создать свой узел в этой большой сети. Ваш
            компьютер сможет помогать обрабатывать транзакции в данном
            блокчейне. Вы можете внести свой вклад в развитие нашего
            проекта. Это довольно просто, а также очень важно для нас.
          </p>

          <div class="second-grid__text_links q-gutter-md">
            <q-btn label="Установить" href="/RUPAY.zip" size="20px" no-caps unelevated icon-right="file_download" class="full-width"  color="primary"/>
            <q-btn label="Инструкция" @click="videoModal=true" size="20px" outline no-caps unelevated :class="$q.screen.lt.sm ? 'full-width' : ''"   color="primary"/>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" >
        <div class="third">
          <div class="third__top_text">
            <h3 class="third__top_text_heading">
              <span>Токенизация</span> <br />
              активов и бизнеса.
            </h3>
            <p class="third__top_text_paragraph">
              Это создание цифровой записи в блокчейне для определенного,
              реального актива. Токенизация помогает повысить ликвидность
              активов и является инструментом привлечения финансирования
              для бизнесов, которые находятся на ранних стадиях развития и
              уже успешно развивающегося предприятия.
            </p>
          </div>
          <div class="third__top_image">
            <svg viewBox="0 0 290 235" fill="none" xmlns="http://www.w3.org/2000/svg" class="third__top_image_svg-1">
              <path d="M2.66456 155.873C12.5738 167.581 28.4995 186.397 35.2236 194.342" stroke="black" stroke-width="6"/>
              <path d="M2.66456 194.341C12.5738 206.049 28.4995 224.865 35.2236 232.81" stroke="#002FCC" stroke-width="6"/>
              <path d="M44.6943 155.873C54.6036 167.581 70.5293 186.397 77.2534 194.342" stroke="black" stroke-width="6"/>
              <path d="M44.6943 194.341C54.6036 206.049 70.5293 224.865 77.2534 232.81" stroke="#002FCC" stroke-width="6"/>
              <path d="M86.7256 155.873C96.6349 167.581 112.561 186.397 119.285 194.342" stroke="black" stroke-width="6"/>
              <path d="M86.7256 194.341C96.6349 206.049 112.561 224.865 119.285 232.81" stroke="#002FCC" stroke-width="6"/>
              <path d="M128.756 155.873C138.665 167.581 154.591 186.397 161.315 194.342" stroke="black" stroke-width="6"/>
              <path d="M128.756 194.341C138.665 206.049 154.591 224.865 161.315 232.81" stroke="#002FCC" stroke-width="6"/>
              <path d="M170.787 1.99969C180.696 13.7075 196.622 32.5235 203.346 40.4681" stroke="black" stroke-width="6"/>
              <path d="M170.787 40.4681C180.696 52.1758 196.622 70.9919 203.346 78.9364" stroke="#002FCC" stroke-width="6"/>
              <path d="M170.787 78.9364C180.696 90.6441 196.622 109.46 203.346 117.405" stroke="black" stroke-width="6"/>
              <path d="M170.787 117.405C180.696 129.113 196.622 147.929 203.346 155.873" stroke="#002FCC" stroke-width="6"/>
              <path d="M170.787 155.873C180.696 167.581 196.622 186.397 203.346 194.342" stroke="black" stroke-width="6"/>
              <path d="M170.787 194.341C180.696 206.049 196.622 224.865 203.346 232.81" stroke="#002FCC" stroke-width="6"/>
              <path d="M212.818 1.99969C222.728 13.7075 238.653 32.5235 245.377 40.4681" stroke="black" stroke-width="6"/>
              <path d="M212.818 40.4681C222.728 52.1758 238.653 70.9919 245.377 78.9364" stroke="#002FCC" stroke-width="6"/>
              <path d="M212.818 78.9364C222.728 90.6441 238.653 109.46 245.377 117.405" stroke="black" stroke-width="6"/>
              <path d="M212.818 117.405C222.728 129.113 238.653 147.929 245.377 155.873" stroke="#002FCC" stroke-width="6"/>
              <path d="M212.818 155.873C222.728 167.581 238.653 186.397 245.377 194.342" stroke="black" stroke-width="6"/>
              <path d="M212.818 194.341C222.728 206.049 238.653 224.865 245.377 232.81" stroke="#002FCC" stroke-width="6"/>
              <path d="M254.849 1.99969C264.758 13.7075 280.684 32.5235 287.408 40.4681" stroke="black" stroke-width="6"/>
              <path d="M254.849 40.4681C264.758 52.1758 280.684 70.9919 287.408 78.9364" stroke="#002FCC" stroke-width="6"/>
              <path d="M254.849 78.9364C264.758 90.6441 280.684 109.46 287.408 117.405" stroke="black" stroke-width="6"/>
              <path d="M254.849 117.405C264.758 129.113 280.684 147.929 287.408 155.873" stroke="#002FCC" stroke-width="6"/>
              <path d="M254.849 155.873C264.758 167.581 280.684 186.397 287.408 194.342" stroke="black" stroke-width="6"/>
            </svg>

            <img draggable="false"
              class="third__top_image_pic"
              src="~assets/new/shake_hands.png"
              alt=""
            />

            <svg viewBox="0 0 239 194" fill="none" xmlns="http://www.w3.org/2000/svg" class="third__top_image_svg-2">
              <path d="M236.406 65.0652C228.283 55.4684 215.229 40.0448 209.717 33.5326" stroke="black" stroke-width="6"/>
              <path d="M236.406 33.5327C228.283 23.9358 215.229 8.51221 209.717 2.00004" stroke="#002FCC" stroke-width="6"/>
              <path d="M201.953 65.0652C193.831 55.4684 180.776 40.0448 175.265 33.5326" stroke="black" stroke-width="6"/>
              <path d="M201.953 33.5327C193.831 23.9358 180.776 8.51218 175.265 2.00001" stroke="#002FCC" stroke-width="6"/>
              <path d="M167.5 65.0652C159.377 55.4684 146.323 40.0448 140.811 33.5326" stroke="black" stroke-width="6"/>
              <path d="M167.5 33.5327C159.377 23.9358 146.323 8.51218 140.811 2.00001" stroke="#002FCC" stroke-width="6"/>
              <path d="M133.047 65.0652C124.925 55.4684 111.87 40.0448 106.358 33.5326" stroke="black" stroke-width="6"/>
              <path d="M133.047 33.5327C124.925 23.9358 111.87 8.51218 106.358 2.00001" stroke="#002FCC" stroke-width="6"/>
              <path d="M98.5945 191.196C90.4719 181.599 77.4176 166.175 71.9058 159.663" stroke="black" stroke-width="6"/>
              <path d="M98.5945 159.663C90.4719 150.066 77.4176 134.643 71.9058 128.13" stroke="#002FCC" stroke-width="6"/>
              <path d="M98.5945 128.131C90.4719 118.534 77.4176 103.11 71.9058 96.5979" stroke="black" stroke-width="6"/>
              <path d="M98.5945 96.5978C90.4719 87.0009 77.4176 71.5774 71.9058 65.0652" stroke="#002FCC" stroke-width="6"/>
              <path d="M98.5945 65.0652C90.4719 55.4683 77.4176 40.0447 71.9058 33.5325" stroke="black" stroke-width="6"/>
              <path d="M98.5945 33.5325C90.4719 23.9356 77.4176 8.51206 71.9058 1.99988" stroke="#002FCC" stroke-width="6"/>
              <path d="M64.1419 191.196C56.0192 181.599 42.9649 166.175 37.4531 159.663" stroke="black" stroke-width="6"/>
              <path d="M64.1419 159.663C56.0192 150.066 42.9649 134.643 37.4531 128.13" stroke="#002FCC" stroke-width="6"/>
              <path d="M64.1419 128.131C56.0192 118.534 42.9649 103.11 37.4531 96.5979" stroke="black" stroke-width="6"/>
              <path d="M64.1419 96.5979C56.0192 87.001 42.9649 71.5774 37.4531 65.0652" stroke="#002FCC" stroke-width="6"/>
              <path d="M64.1419 65.0652C56.0192 55.4683 42.9649 40.0447 37.4531 33.5325" stroke="black" stroke-width="6"/>
              <path d="M64.1419 33.5327C56.0192 23.9358 42.9649 8.51218 37.4531 2.00001" stroke="#002FCC" stroke-width="6"/>
              <path d="M29.6888 191.196C21.5661 181.599 8.51181 166.175 3 159.663" stroke="black" stroke-width="6"/>
              <path d="M29.6888 159.663C21.5661 150.066 8.51181 134.643 3 128.13" stroke="#002FCC" stroke-width="6"/>
              <path d="M29.6888 128.131C21.5661 118.534 8.51181 103.11 3 96.5979" stroke="black" stroke-width="6"/>
              <path d="M29.6888 96.5978C21.5661 87.0009 8.51181 71.5774 3 65.0652" stroke="#002FCC" stroke-width="6"/>
              <path d="M29.6888 65.0652C21.5661 55.4683 8.51181 40.0447 3 33.5325" stroke="black" stroke-width="6"/>
            </svg>

          </div>
          <div class="third__bottom">
            <div class="third__bottom_container">
              <img draggable="false"
                src="~assets/new/text-p3-1.svg"
                alt=""
                class="third__bottom_container_img"
              />
              <p class="third__bottom_container_p border-left-top">
                Огромное количество активов можно токенизировать и сделать
                доступными для торговли на бирже: недвижимость, ценные
                бумаги, драгоценные металлы, произведения искусства, земля и
                т.д.
              </p>
            </div>
            <div class="third__bottom_container down">
              <img draggable="false"
                src="~assets/new/text-p3-2.svg"
                alt=""
                class="third__bottom_container_img"
              />
              <p class="third__bottom_container_p border-left-bottom">
                Бизнес, которому необходимы инвестиции, выпускает токены,
                которые являются записями в распределенном реестре
                блокчейна.
              </p>
            </div>
            <div class="third__bottom_container">
              <img draggable="false"
                src="~assets/new/text-p3-3.svg"
                alt=""
                class="third__bottom_container_img"
              />
              <p class="third__bottom_container_p border-right-top">
                В сравнении с эмиссией активов на рынке традиционных
                финансов, бизнесу не нужны посредники: банк-платежный агент,
                депозитарий и т.д. Компания выпускает токены и передает их
                непосредственно инвесторам, предоставляющим капитал.
              </p>
            </div>
            <div class="third__bottom_container down">
              <img draggable="false"
                src="~assets/new/text-p3-4.svg"
                alt=""
                class="third__bottom_container_img"
              />
              <p class="third__bottom_container_p border-right-bottom">
                Токен хранится в кошельке, а право собственности защищено
                смартконтрактом. 100% безопасности и прозрачности.
              </p>
            </div>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" >
        <div class="fourth">
          <div class="fourth__top">
            <h3 class="fourth__top_heading">
              <span>Преимущества</span> <br />
              токенизации активов.
            </h3>
            <p class="fourth__top_paragraph">
              Токенизация бизнес-активов набирает популярность благодаря
              ряду преимуществ:
            </p>
          </div>
          <div class="fourth__middle">
            <div class="fourth__middle_container">
              <img draggable="false"
                src="~assets/new/text-p4-1.svg"
                alt=""
                class="fourth__middle_container_img"
              />
              <p class="fourth__middle_container_p">
                <b> Повышение эффективности управления — </b> <br />
                учет всех активов в блокчейне гарантирует полную
                прозрачность.
              </p>
            </div>
            <div class="fourth__middle_container">
              <img draggable="false"
                src="~assets/new/text-p4-2.svg"
                alt=""
                class="fourth__middle_container_img"
              />
              <p class="fourth__middle_container_p">
                <b> Защита права собственности — </b><br />
                в отличие от обычных реестров, блокчейн-данные невозможно
                отредактировать без разрешения владельца или выполнения
                условий смарт-контракта.
              </p>
            </div>
            <div class="fourth__middle_container">
              <img draggable="false"
                src="~assets/new/text-p4-3.svg"
                alt=""
                class="fourth__middle_container_img"
              />
              <p class="fourth__middle_container_p">
                <b> Выход на новые рынки — </b> <br />
                токен проще и дешевле распространять и популяризировать, чем
                физический товар или услугу, в обход традиционных рекламных
                инструментов.
              </p>
            </div>
            <div class="fourth__middle_container">
              <img draggable="false"
                src="~assets/new/text-p4-4.svg"
                alt=""
                class="fourth__middle_container_img"
              />
              <p class="fourth__middle_container_p">
                <b> Повышение ликвидности — </b> <br />
                благодаря токенам можно “дробить” ценность таких объектов,
                как недвижимость или предметы роскоши, не разделяя сам
                объект, что позволяет быстрее и проще привлекать инвестиции.
              </p>
            </div>
          </div>
          <div class="fourth__bottom">
            <q-btn color="primary" @click="tokenModal=true" class="text-bold q-pa-md" no-caps unelevated size="20px" label="Токенизировать актив" >
              <img draggable="false"  src="~assets/new/tokenize-btn.svg" alt="" />
            </q-btn>

          </div>
        </div>
      </q-carousel-slide>


    </q-carousel>

    <div class="slider-arrows">
      <div v-if="slide>1" class="swiper-button-prev" @click="$refs.carousel.previous()"></div>
      <div v-if="slide<4" class="swiper-button-next" @click="$refs.carousel.next()"></div>
    </div>







  </main>
  <q-dialog
    v-model="videoModal"
  >
    <q-card style="width: 700px; max-width: 100vw;">
      <q-video
        :ratio="16/9"
        src="https://www.youtube.com/embed/pmYPtmMMHGQ?rel=0"
      />
    </q-card>
  </q-dialog>
  <q-dialog
    v-model="tokenModal"
  >
    <q-card style="width: 1024px; max-width: 100vw;">
      <q-card-section>
        <div class="token-modal">
          <div class="tokenization-popup__left-part">
            <h3 class="tokenization-popup__left-part_heading">
              Как токенизировать бизнес-активы: технический аспект.
            </h3>
            <p class="tokenization-popup__left-part_p">
              Блокчейн позволяет токенизировать практически любой объект, данные о
              котором можно сохранить в цифровом виде. Это может быть как право
              собственности на недвижимость, так и конкретная услуга, к примеру
              юридическая консультация. Таким образом, можно токенизировать все
              активы бизнеса — от производственной базы и помещения — до товара
              или услуги.
            </p>
            <h3 class="tokenization-popup__left-part_heading">
              Типы токена для различных организаций.
            </h3>
            <p class="tokenization-popup__left-part_p">
              Очень важно правильно подобрать тип токена под каждый объект. В США
              и Европе была разработана унифицированная таксономия,
              предусматривающая разделение токенов на:
            </p>
            <ul class="tokenization-popup__left-part_ul">
              <li class="tokenization-popup__left-part_ul_li">
                <img draggable="false"
                     src="~assets/new/popup-left-1.svg"
                     alt=""
                     class="tokenization-popup__left-part_ul_li_img"
                />
                <p class="tokenization-popup__left-part_ul_li_paragraph">
                  <b>Инвестиционные </b> (они же Security tokens) — предназначены
                  для получения дивидендов;
                </p>
              </li>
              <li class="tokenization-popup__left-part_ul_li">
                <img draggable="false"
                     src="~assets/new/popup-left-2.svg"
                     alt=""
                     class="tokenization-popup__left-part_ul_li_img"
                />
                <p class="tokenization-popup__left-part_ul_li_paragraph">
                  <b>Функциональные </b>(или Utility tokens) — дают право на
                  доступ к определенному товару, объекту или услуге;
                </p>
              </li>
              <li class="tokenization-popup__left-part_ul_li">
                <img draggable="false"
                     src="~assets/new/popup-left-3.svg"
                     alt=""
                     class="tokenization-popup__left-part_ul_li_img"
                />
                <p class="tokenization-popup__left-part_ul_li_paragraph">
                  <b>Платежные </b> (Payment tokens) — имеют схожие черты с
                  криптовалютами, но отличаются ограниченной областью применения.
                </p>
              </li>
            </ul>
          </div>
          <div class="tokenization-popup__right-part">

            <h3 class="tokenization-popup__right-part_heading">
              Процесс токенизации можно разделить на 4 этапа:
            </h3>
            <div class="tokenization-popup__right-part_grid">
              <div class="tokenization-popup__right-part_grid_div">
                <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="tokenization-popup__right-part_grid_div_img">
                  <rect width="30" height="30" rx="10" fill="#2B60EB"/>
                  <path d="M14.432 23V8.7L15.686 9.998H11.176V7.6H17.292V23H14.432Z" fill="#F7FBFC"/>
                </svg>

                <p class="tokenization-popup__right-part_grid_div_paragraph">
                  Выбор активов;
                </p>
              </div>
              <div class="tokenization-popup__right-part_grid_div">
                <svg  viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="tokenization-popup__right-part_grid_div_img">
                  <rect width="30" height="30" rx="10" fill="#2B60EB"/>
                  <path d="M9.77 22V20.086L15.886 14.278C16.3993 13.794 16.7807 13.3687 17.03 13.002C17.2793 12.6353 17.4407 12.298 17.514 11.99C17.602 11.6673 17.646 11.3667 17.646 11.088C17.646 10.384 17.404 9.84133 16.92 9.46C16.436 9.064 15.7247 8.866 14.786 8.866C14.038 8.866 13.356 8.998 12.74 9.262C12.1387 9.526 11.618 9.92933 11.178 10.472L9.176 8.932C9.77733 8.12533 10.584 7.502 11.596 7.062C12.6227 6.60733 13.7667 6.38 15.028 6.38C16.1427 6.38 17.1107 6.56333 17.932 6.93C18.768 7.282 19.406 7.788 19.846 8.448C20.3007 9.108 20.528 9.89267 20.528 10.802C20.528 11.3007 20.462 11.7993 20.33 12.298C20.198 12.782 19.9487 13.2953 19.582 13.838C19.2153 14.3807 18.68 14.9893 17.976 15.664L12.718 20.658L12.124 19.58H21.122V22H9.77Z" fill="#F7FBFC"/>
                </svg>

                <p class="tokenization-popup__right-part_grid_div_paragraph">
                  Определение типа токена;
                </p>
              </div>
              <div class="tokenization-popup__right-part_grid_div">
                <svg  viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="tokenization-popup__right-part_grid_div_img">
                  <rect width="30" height="30" rx="10" fill="#2B60EB"/>
                  <path d="M15.2367 22.6486C14.1514 22.6486 13.088 22.4946 12.0467 22.1866C11.02 21.8639 10.1547 21.4239 9.45071 20.8666L10.6827 18.6446C11.24 19.0992 11.9147 19.4659 12.7067 19.7446C13.4987 20.0232 14.3274 20.1626 15.1927 20.1626C16.2194 20.1626 17.0187 19.9572 17.5907 19.5466C18.1627 19.1212 18.4487 18.5492 18.4487 17.8306C18.4487 17.1266 18.1847 16.5692 17.6567 16.1586C17.1287 15.7479 16.278 15.5426 15.1047 15.5426H13.6967V13.5846L18.0967 8.34856L18.4707 9.42656H10.1987V7.02856H20.6927V8.94256L16.2927 14.1786L14.7967 13.2986H15.6547C17.5467 13.2986 18.962 13.7239 19.9007 14.5746C20.854 15.4106 21.3307 16.4886 21.3307 17.8086C21.3307 18.6739 21.1107 19.4732 20.6707 20.2066C20.2307 20.9399 19.556 21.5339 18.6467 21.9886C17.752 22.4286 16.6154 22.6486 15.2367 22.6486Z" fill="#F7FBFC"/>
                </svg>
                <p class="tokenization-popup__right-part_grid_div_paragraph">
                  Генерация токена;
                </p>
              </div>
              <div class="tokenization-popup__right-part_grid_div">
                <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="tokenization-popup__right-part_grid_div_img">
                  <rect width="30" height="30" rx="10" fill="#2B60EB"/>
                  <path d="M7.748 18.502V16.522L15.338 6.6H18.396L10.916 16.522L9.486 16.082H21.696V18.502H7.748ZM16.196 22V18.502L16.284 16.082V12.98H18.968V22H16.196Z" fill="#F7FBFC"/>
                </svg>

                <p class="tokenization-popup__right-part_grid_div_paragraph">
                  Распространение токена и создание сопутствующего ПО.
                </p>
              </div>
            </div>
            <h3 class="tokenization-popup__right-part_heading">
              Токенизация вашего бизнеса с RUpay.
            </h3>
            <p class="tokenization-popup__right-part_p">
              Одним из направлений деятельности проекта RUpay является платформа
              для токенизации активов. Мы стремимся создать удобный инструмент,
              который бы позволил предпринимателям создавать и выводить на биржу
              собственные токены. С помощью RUpay вы сможете:
            </p>
            <ul class="tokenization-popup__right-part_ul">
              <li class="tokenization-popup__right-part_ul_li">
                <img draggable="false"
                     src="~assets/new/popup-right-tick.svg"
                     alt=""
                     class="tokenization-popup__right-part_ul_li_img"
                />
                <p class="tokenization-popup__right-part_ul_li_paragraph">
                  Запустить собственный токен;
                </p>
              </li>
              <li class="tokenization-popup__right-part_ul_li">
                <img draggable="false"
                     src="~assets/new/popup-right-tick.svg"
                     alt=""
                     class="tokenization-popup__right-part_ul_li_img"
                />
                <p class="tokenization-popup__right-part_ul_li_paragraph">
                  Получить инфраструктуру для управления токеном;
                </p>
              </li>
              <li class="tokenization-popup__right-part_ul_li">
                <img draggable="false"
                     src="~assets/new/popup-right-tick.svg"
                     alt=""
                     class="tokenization-popup__right-part_ul_li_img"
                />
                <p class="tokenization-popup__right-part_ul_li_paragraph">
                  Привлечь инвесторов;
                </p>
              </li>
              <li class="tokenization-popup__right-part_ul_li">
                <img draggable="false"
                     src="~assets/new/popup-right-tick.svg"
                     alt=""
                     class="tokenization-popup__right-part_ul_li_img"
                />
                <p class="tokenization-popup__right-part_ul_li_paragraph">
                  Залистить токен на бирже.
                </p>
                <button @click="formModal=true" class="tokenization-popup__right-part_ul_li_btn">
                  Оставить заявку
                </button>
              </li>
            </ul>
          </div>
        </div>
      </q-card-section>

    </q-card>
  </q-dialog>
  <q-dialog
    v-model="formModal"
  >
    <q-card style="width: 700px; max-width: 100vw;">
      <q-card-section>
        <q-input  outlined  dense v-model="name" label="Ваше имя" class="q-mb-md"/>
        <q-input outlined dense v-model="org" label="Название организации*" class="q-mb-md"/>
        <q-input outlined dense v-model="phone" prefix="+7" mask="(###) ###-##-##" class="q-mb-md" fill-mask="_" label="Контактный телефон*"/>
        <q-input outlined class="q-mb-lg" v-model="text" dense type="textarea"  label="Комментарий"/>
        <div class="text-center">
          <q-btn no-caps :loading="is_loading" :disable="!org || !phone" unelevated color="dark" label="Жду звонка" @click="sendMsg"/>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import {ref} from "vue";
import axios from 'axios'
import { Notify } from 'quasar'
const videoModal=ref(false)
const tokenModal=ref(false)
const formModal=ref(false)
const slide =ref(1)


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
  Организация: ${org.value}%0A
  Текст: ${text.value ? text.value : "Не указан"}`)
  Notify.create({
    message: 'Сообщение отправлено',
    color:'positive'
  })
  name.value=null
  org.value=null
  phone.value=null
  text.value=null
  formModal.value = false
  is_loading.value = !is_loading.value

}
</script>



<style lang="sass">
.slider
  background: transparent
  width: 100%
  height: 100%
  &-arrows
    position: absolute
    top: 40vh
    width: 100%
    & .swiper-button-prev
      position: fixed
      cursor: pointer
    & .swiper-button-next
      position: fixed
      right: 20px
      cursor: pointer
      &:hover
        right: 10px
.token-modal
  display: grid
  grid-template-columns: 1fr 1fr

@media screen and (max-width: 1024px)
  .token-modal
    grid-template-columns: 1fr
</style>
