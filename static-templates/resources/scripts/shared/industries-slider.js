import { Swiper, Navigation } from 'swiper';

export default class IndustriesSlider {
  constructor() {
    this.init();
  }

  initSwiper(el) {
    const slider = el.querySelector('.swiper');
    const [nextEl, prevEl] = [
      el.querySelector('.industries-slider__button.next'),
      el.querySelector('.industries-slider__button.prev'),
    ];

    new Swiper(slider, {
      modules: [Navigation],
      slidesPerView: 1,
      navigation: {
        nextEl,
        prevEl,
        disabledClass: 'disabled',
      },
      breakpoints: {
        992: {
          slidesPerView: 2.2,
          spaceBetween: 20,
        },
      },
    });
  }

  init() {
    document.querySelectorAll('.industries-slider').forEach(this.initSwiper);
  }
}
