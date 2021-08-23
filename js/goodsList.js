export const createGoodsList = () => {
  
  return `<section class="goods">
      <div class="container container--no-padding goods__inner">
        <h2 class="heading goods__heading">
          Популярные товары
        </h2>
        <div class="slider goods__slider">
          <div class="slider__controls">
            <button class="slider__button slider__button--prev" type="button">
              <svg width="24" height="24" viewbox="0 0 24 24" fill="#6C63FF" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7903 4.3871L10.7071 4.29289C10.3466 3.93241 9.77939 3.90468 9.3871 4.2097L9.29289 4.29289L2.29289 11.2929L2.2515 11.3369L2.19633 11.4047L2.12467 11.5159L2.07123 11.6287L2.03585 11.734L2.00691 11.8819L2 12L2.00279 12.0752L2.02024 12.2007L2.04974 12.3121L2.09367 12.4232L2.146 12.5207L2.21969 12.6254L2.29289 12.7071L9.29289 19.7071C9.68342 20.0976 10.3166 20.0976 10.7071 19.7071C11.0676 19.3466 11.0953 18.7794 10.7903 18.3871L10.7071 18.2929L5.416 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H5.414L10.7071 5.70711C11.0676 5.34662 11.0953 4.77939 10.7903 4.3871L10.7071 4.29289L10.7903 4.3871Z"/>
              </svg>
              <span class="visually-hidden">
                Посмотреть предыдущие 5 товаров
              </span>
            </button>
            <button class="slider__button slider__button--next" type="button">
              <svg width="24" height="24" viewbox="0 0 24 24" fill="#6C63FF" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2097 19.6129L13.2929 19.7071C13.6534 20.0676 14.2206 20.0953 14.6129 19.7903L14.7071 19.7071L21.7071 12.7071L21.7485 12.6631L21.8037 12.5953L21.8753 12.4841L21.9288 12.3713L21.9642 12.266L21.9931 12.1181L22 12L21.9972 11.9248L21.9798 11.7993L21.9503 11.6879L21.9063 11.5768L21.854 11.4793L21.7803 11.3746L21.7071 11.2929L14.7071 4.29289C14.3166 3.90237 13.6834 3.90237 13.2929 4.29289C12.9324 4.65338 12.9047 5.22061 13.2097 5.6129L13.2929 5.70711L18.584 11L3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13L18.586 13L13.2929 18.2929C12.9324 18.6534 12.9047 19.2206 13.2097 19.6129L13.2929 19.7071L13.2097 19.6129Z"/>
              </svg>
              <span class="visually-hidden">
                Посмотреть следующие 5 товаров
              </span>
            </button>
          </div>
          <div class="slider__wrapper">
            <ul class="goods__list slider__list">
            
            </ul>
          </div>
        </div>
      </div>
    </section>`
}