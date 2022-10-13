import { Swiper, Navigation, EffectFade, Pagination } from 'swiper';

class ImgSlider {
    // constructor(section) {
    //     this.section = section;
    //     this.navItems = this.section.querySelectorAll('.img-slider__nav-item');
    //     this.navImages = this.section.querySelectorAll('.img-slider__nav-image-wrap');
    //     this.images = this.section.querySelectorAll('.img-slider__image-wrap');
    //     this.activeClass = 'active';
    //     this.activeItemIndex = 0;
    //     this.bindAction = this.bindAction.bind(this);
    //     this.setActiveSlide = this.setActiveSlide.bind(this);
    //     this.changeSlide = this.changeSlide.bind(this);
    //     this.removeActiveClass = this.removeActiveClass.bind(this);
    //     this.init();
    // }

    constructor() {
        this.init();
    }

    initSwiper(el) {
        const slider = el.querySelector('.swiper');

        new Swiper(slider, {
            modules: [Pagination],
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                type: 'bullets',
                // el: '.swiper-pagination',
                // clickable: true,
                // renderBullet: function (index, className) {
                //     return `<span class="img-slider__nav-item">${index}</span>`;
                // },
            },
            slidesPerView: 1,

            // breakpoints: {
            //     992: {
            //         slidesPerView: 2.2,
            //         spaceBetween: 20,
            //     },
            // },
        });
    }


    init() {
        document.querySelectorAll('.img-slider').forEach(this.initSwiper);
    }
}

export default ImgSlider;