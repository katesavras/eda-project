class AnimatedSlider {
    constructor() {
        this.navigationItems = document.querySelectorAll('.navigation-item');
        this.descriptionItems = document.querySelectorAll('.description-item');
        this.animatedSlide = document.querySelectorAll('.animated-slide');
        this.animatedSlides = document.querySelector('.animated-slider__slides');
        this.activeNavigationClass = 'navigation-item-active';
        this.activeDescriptionClass = 'description-item-active';
        this.activeSlideClass = 'animated-slide-active';
        this.activeSlideFirstClass = 'animated-slider__slides-first';
        this.activeSlideSecondClass = 'animated-slider__slides-second';
        this.activeSlideThirdClass = 'animated-slider__slides-third';
        this.activeItemIndex = 0;
        this.intervalId = null;
        this.delay = 3000;
        this.bindAction = this.bindAction.bind(this);
        this.setActiveSlide = this.setActiveSlide.bind(this);
        this.updateSlideByClick = this.updateSlideByClick.bind(this);
        this.autoChangeSlide = this.autoChangeSlide.bind(this);
        // this.removeActiveClass = this.removeActiveClass.bind(this);
        this.init();
    }

    updateSlideByClick(index) {
        if (this.activeItemIndex === index) {
            return;
        } else {
            if (this.activeItemIndex !== index) {
                this.navigationItems[this.activeItemIndex].classList.remove(
                    this.activeNavigationClass
                );
                this.descriptionItems[this.activeItemIndex].classList.remove(
                    this.activeDescriptionClass
                );
                this.animatedSlide[this.activeItemIndex].classList.remove(
                    this.activeSlideClass
                );
            }
            this.activeItemIndex = index;

            if (this.activeItemIndex === 0) {
                this.animatedSlides.classList.remove(
                    this.activeSlideSecondClass
                );
                this.animatedSlides.classList.remove(
                    this.activeSlideThirdClass
                );
                this.animatedSlides.classList.add(
                    this.activeSlideFirstClass
                );
            } else if (this.activeItemIndex === 1) {
                this.animatedSlides.classList.remove(
                    this.activeSlideFirstClass
                );
                this.animatedSlides.classList.remove(
                    this.activeSlideThirdClass
                );
                this.animatedSlides.classList.add(
                    this.activeSlideSecondClass
                );
            } else if (this.activeItemIndex === 2) {
                this.animatedSlides.classList.remove(
                    this.activeSlideFirstClass
                );
                this.animatedSlides.classList.remove(
                    this.activeSlideSecondClass
                );
                this.animatedSlides.classList.add(
                    this.activeSlideThirdClass
                );
            }

            this.navigationItems[this.activeItemIndex].classList.add(
                this.activeNavigationClass
            );
            this.descriptionItems[this.activeItemIndex].classList.add(
                this.activeDescriptionClass
            );
            this.animatedSlide[this.activeItemIndex].classList.add(
                this.activeSlideClass
            );
        }
    }

    setActiveSlide(index) {
        if (index === 0) {
            this.animatedSlides.classList.remove(
                this.activeSlideSecondClass
            );
            this.animatedSlides.classList.remove(
                this.activeSlideThirdClass
            );
            this.animatedSlides.classList.add(
                this.activeSlideFirstClass
            );
        } else if (index === 1) {
            this.animatedSlides.classList.remove(
                this.activeSlideFirstClass
            );
            this.animatedSlides.classList.remove(
                this.activeSlideThirdClass
            );
            this.animatedSlides.classList.add(
                this.activeSlideSecondClass
            );
        } else if (index === 2) {
            this.animatedSlides.classList.remove(
                this.activeSlideFirstClass
            );
            this.animatedSlides.classList.remove(
                this.activeSlideSecondClass
            );
            this.animatedSlides.classList.add(
                this.activeSlideThirdClass
            );
        }

        this.navigationItems[index].classList.add(
            this.activeNavigationClass
        );
        this.descriptionItems[index].classList.add(
            this.activeDescriptionClass
        );
        this.animatedSlide[index].classList.add(
            this.activeSlideClass
        );
    }

    autoChangeSlide() {
        let prevIndex = this.activeItemIndex;
        this.navigationItems[prevIndex].classList.remove(
            this.activeNavigationClass
        );
        this.descriptionItems[prevIndex].classList.remove(
            this.activeDescriptionClass
        );
        this.animatedSlide[prevIndex].classList.remove(
            this.activeSlideClass
        );
        if (this.activeItemIndex === 2) {
            this.activeItemIndex = 0;
        } else {
            this.activeItemIndex++;
        }
        this.setActiveSlide(this.activeItemIndex)
        this.intervalId = setTimeout(this.autoChangeSlide, this.delay);
    }

    bindAction(item, index) {
        item.addEventListener("click", (e) => {
            this.updateSlideByClick(index)
            clearTimeout(this.intervalId);
            this.intervalId = setTimeout(this.autoChangeSlide, this.delay);
        });
    }

    init() {
        this.intervalId = setTimeout(this.autoChangeSlide, this.delay);
        this.navigationItems.forEach(this.bindAction);
    }
}

export default AnimatedSlider;