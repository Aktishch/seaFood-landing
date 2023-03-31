import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

import media from '../ts/functions/media'

const newsDetail = () => {

  const sliderNewsDetail = new Swiper('.news-detail-slider .swiper', {

    pagination: {

      el: '.news-detail-slider .swiper-pagination',
      clickable: true

    },

    navigation: {

      prevEl: '.news-detail-slider .swiper-button-prev',
      nextEl: '.news-detail-slider .swiper-button-next'

    },

    slidesPerView: 1.2,
    slidesPerGroup: 1,
    spaceBetween: 16,
    speed: 500,
    grabCursor: true,

    breakpoints: {

      [media.md]: {

        slidesPerView: 2,
        spaceBetween: 20,

      },

      [media.lg]: {

        slidesPerView: 3,
        spaceBetween: 24

      },

      [media.xl]: {

        slidesPerView: 4,
        spaceBetween: 30

      }

    }

  })

}

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
    loop: false,

    breakpoints: {

      [media.sm]: {

        slidesPerView: 1.5

      },

      [media.md]: {

        slidesPerView: 2

      },

      [media.lg]: {

        slidesPerView: 3

      },

      2000: {

        slidesPerView: 3,
        loop: true

      }

    }

  })

  const sliderNews = new Swiper('.news-slider .swiper', {

    pagination: {

      el: '.news-slider .swiper-pagination',
      clickable: true

    },

    navigation: {

      prevEl: '.news-slider .swiper-button-prev',
      nextEl: '.news-slider .swiper-button-next'

    },

    slidesPerView: 1.2,
    slidesPerGroup: 1,
    spaceBetween: 16,
    speed: 500,
    grabCursor: true,
    loop: false,

    breakpoints: {

      [media.sm]: {

        slidesPerView: 1.5,
        spaceBetween: 16,

      },

      [media.md]: {

        slidesPerView: 2,
        spaceBetween: 20,

      },

      [media.lg]: {

        slidesPerView: 2.5,
        spaceBetween: 24,

      },

      [media.xl]: {

        slidesPerView: 3,
        spaceBetween: 28,

      },

      2000: {

        slidesPerView: 3,
        spaceBetween: 28,
        loop: true

      }

    }

  })

  window.Swiper = Swiper

}

export default { init, newsDetail }