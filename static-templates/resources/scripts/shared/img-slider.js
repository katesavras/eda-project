import {Swiper, Pagination, Thumbs} from 'swiper';

class ImgSlider {
    constructor() {
        this.init();
    }

    initSwiper(el) {
        const slider = el.querySelector('.gallery-image');
        const gallery = el.querySelector('.gallery-images');
        const gallerySwiper = new Swiper(gallery, {
            modules: [Pagination],
            spaceBetween: 10,
            slidesPerView: 4,
        });
        const sliderSwiper = new Swiper(slider, {
            modules: [Pagination, Thumbs],
            slidesPerView: 1,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                type: "bullets",
            },
            thumbs: {
                swiper: gallerySwiper,
            },
        });
    }


    init() {
        document.querySelectorAll('.img-slider').forEach(this.initSwiper);
    }
}

export default ImgSlider;