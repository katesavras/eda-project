import { Swiper, Navigation, EffectFade, Pagination } from 'swiper';

export default class PortfolioSlider {
    constructor() {
        this.init();
    }

    initSwiper(el) {
        const slider = el.querySelector('.swiper');
        const [prevEl, nextEl] = [
            el.querySelector('.portfolio-slider__nav.prev'),
            el.querySelector('.portfolio-slider__nav.next'),
        ];

        new Swiper(slider, {
            modules: [Navigation, EffectFade, Pagination],
            autoplay: {
                delay: 100,
            },
            slidesPerView: 1,
            navigation: {
                nextEl,
                prevEl,
                disabledClass: 'swiper-button-disabled',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                type: 'bullets',
            },
            loop: true,
            effect: 'fade',
            speed: 500,
            // breakpoints: {
            //     992: {
            //         slidesPerView: 1,
            //         spaceBetween: 20,
            //     },
            // },
        });
    }

    init() {
        document.querySelectorAll('.portfolio-slider').forEach(this.initSwiper);
    }
}
