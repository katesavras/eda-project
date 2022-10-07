class TabSlider {
    constructor(section) {
        this.section = section;
        this.tagItems = this.section.querySelectorAll('.tag');
        this.tabItems = this.section.querySelectorAll('.tab');
        this.tabSlide = this.section.querySelectorAll('.tab-slide');
        this.navButtons = this.section.querySelectorAll('.tab-slider__btn');
        this.prevButton = this.section.querySelector('.prev');
        this.nextButton = this.section.querySelector('.next');
        this.colors = ['#BEED60', '#AEE856', '#9EE24B', '#94D841', '#89CD37', '#7FC22D', '#6BAD19', '#60A20F'];
        this.activeSlideClass = 'active';
        this.activeItemIndex = 0;
        this.bindAction = this.bindAction.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.setActiveSlide = this.setActiveSlide.bind(this);
        this.changeSlide = this.changeSlide.bind(this);
        this.removeActiveClass = this.removeActiveClass.bind(this);
        this.setColors = this.setColors.bind(this);
        this.init();
    }

    setColors(index) {
        this.tabSlideItems = this.tabSlide[index].querySelectorAll('.tab-slide__item');
        this.tabSlideItems.forEach((item, i) => {
            item.style.setProperty('--main-color', this.colors[i]);
            item.style.setProperty('--next-color', this.colors[i + 1]);
        })
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
        this.setColors(index)
    }


    changeSlide(index, btn) {
        this.removeActiveClass(this.activeItemIndex)
        if (index === null) {
            btn === "next" ? this.activeItemIndex++ : this.activeItemIndex--;
        } else {
            this.activeItemIndex = index;
        }
        if (this.activeItemIndex === this.tabItems.length - 1) {
            this.nextButton.classList.remove(
                this.activeSlideClass
            )
        } else {
            this.nextButton.classList.add(
                this.activeSlideClass
            )
        }
        if (this.activeItemIndex === 0) {
            this.prevButton.classList.remove(
                this.activeSlideClass
            )
        } else {
            this.prevButton.classList.add(
                this.activeSlideClass
            )
        }
        this.setActiveSlide(this.activeItemIndex)
    }

    bindAction(item, index) {
        item.addEventListener("click", () => {
            if (this.activeItemIndex !== index) {
                this.changeSlide(index)
            }
        });
    }

    handleBtnClick(item) {
        item.addEventListener("click", (e) => {
            if (e.target.classList.contains('next')) {
                if (this.activeItemIndex === this.tabItems.length - 2) {
                    this.changeSlide(null, "next")
                    this.nextButton.classList.remove(
                        this.activeSlideClass
                    )
                } else {
                    this.changeSlide(null, "next")
                }
            } else if (e.target.classList.contains('prev')) {
                if (this.activeItemIndex === 1) {
                    this.changeSlide(null, "prev")
                    this.prevButton.classList.remove(
                        this.activeSlideClass
                    )
                } else {
                    this.changeSlide(null, "prev")
                }
            }
        });
    }


    init() {
        this.setColors(this.activeItemIndex)
        this.tabItems.forEach(this.bindAction);
        this.tagItems.forEach(this.bindAction);
        this.navButtons.forEach(this.handleBtnClick);
    }
}

export default TabSlider;