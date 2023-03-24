import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

import media from '../ts/functions/media'

const init = () => {

  const sliderExpo = new Swiper('.expo-slider .swiper', {

    pagination: {

      el: '.expo-slider .swiper-pagination',
      clickable: true

    },

    navigation: {

      prevEl: '.expo-slider .swiper-button-prev',
      nextEl: '.expo-slider .swiper-button-next'

    },

    slidesPerView: 1.2,
    slidesPerGroup: 1,
    spaceBetween: 28,
    speed: 1000,
    grabCursor: true,

    breakpoints: {

      [media.md]: {

        slidesPerView: 2

      },

      [media.lg]: {

        slidesPerView: 3

      }

    }

  })

  window.Swiper = Swiper

}

export default { init }