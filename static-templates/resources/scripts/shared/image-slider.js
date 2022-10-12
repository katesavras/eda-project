class ImageSlider {
    constructor(section) {
        this.section = section;
        this.navItems = this.section.querySelectorAll('.img-slider__nav-item');
        this.navImages = this.section.querySelectorAll('.img-slider__nav-image-wrap');
        this.images = this.section.querySelectorAll('.img-slider__image-wrap');
        this.activeClass = 'active';
        this.activeItemIndex = 0;
        this.bindAction = this.bindAction.bind(this);
        this.setActiveSlide = this.setActiveSlide.bind(this);
        this.changeSlide = this.changeSlide.bind(this);
        this.removeActiveClass = this.removeActiveClass.bind(this);
        this.init();
    }

    removeActiveClass(index) {
        this.navItems[index].classList.remove(
            this.activeClass
        );
        this.navImages[index].classList.remove(
            this.activeClass
        );
        this.images[index].classList.remove(
            this.activeClass
        );
    }

    setActiveSlide(index) {
        this.navItems[index].classList.add(
            this.activeClass
        );
        this.navImages[index].classList.add(
            this.activeClass
        );
        this.images[index].classList.add(
            this.activeClass
        );
    }

    changeSlide(index) {
        this.removeActiveClass(this.activeItemIndex)
        this.activeItemIndex = index;
        this.setActiveSlide(this.activeItemIndex)
    }

    bindAction(item, index) {
        item.addEventListener("click", () => {
            if (this.activeItemIndex !== index) {
                this.changeSlide(index)
            }
        });
    }

    init() {
        this.navItems.forEach(this.bindAction);
        this.navImages.forEach(this.bindAction);
    }
}

export default ImageSlider;