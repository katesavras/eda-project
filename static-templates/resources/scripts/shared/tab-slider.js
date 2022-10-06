class TabSlider {
    constructor(section) {
        this.section = section;
        this.tagItems = this.section.querySelectorAll('.tag');
        this.tabItems = this.section.querySelectorAll('.tab');
        this.tabSlide = this.section.querySelectorAll('.tab-slide');
        this.navButtons = this.section.querySelectorAll('.tab-slider__btn');
        this.prevButton = this.section.querySelectorAll('.tab-slider__btn_prev');
        this.nextButton = this.section.querySelectorAll('.tab-slider__btn_next');
        this.activeSlideClass = 'active';
        this.activeItemIndex = 0;
        this.bindAction = this.bindAction.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.setActiveSlide = this.setActiveSlide.bind(this);
        this.changeSlide = this.changeSlide.bind(this);
        this.removeActiveClass = this.removeActiveClass.bind(this);
        this.init();
    }

    removeActiveClass(index) {
        this.tagItems[index].classList.remove(
            this.activeSlideClass
        );
        this.tabItems[index].classList.remove(
            this.activeSlideClass
        );
        this.tabSlide[index].classList.remove(
            this.activeSlideClass
        );
    }

    setActiveSlide(index) {
        this.tagItems[index].classList.add(
            this.activeSlideClass
        );
        this.tabItems[index].classList.add(
            this.activeSlideClass
        );
        this.tabSlide[index].classList.add(
            this.activeSlideClass
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

    handleBtnClick(item, index) {
        item.addEventListener("click", () => {
            console.log("click")
        });
    }


    init() {
        this.tabItems.forEach(this.bindAction);
        this.navButtons.forEach(this.handleBtnClick);
    }
}

export default TabSlider;