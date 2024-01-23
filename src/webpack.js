// Libraries
import fancybox from './lib/fancybox'
import sliderSwiper from './lib/slider-swiper'

// Scripts
import scrollHeader from './ts/scroll-header'
import mobileMenu from './ts/mobile-menu'
import progressLine from './ts/progress-line'
import scrollTo from './ts/scroll-to'
import theme from './ts/theme'
import animation from './ts/animation'
import waved from './ts/waved'
import movement from './ts/movement'
import bubbles from './ts/bubbles'
import accordion from './ts/accordion'
import cookie from './ts/cookie'

// Style
import './scss/index.scss'

// Connection
window.addEventListener('DOMContentLoaded', () => {

  fancybox.init()
  sliderSwiper.init()
  scrollHeader.init()
  mobileMenu.init()
  progressLine.init()
  scrollTo.init()
  theme.init()
  animation.init()
  waved.init()
  movement.init()
  bubbles.init()
  accordion.init()
  cookie.init()

})