class AnimatedSlider {
    constructor(section) {
        this.section = section;
        this.navigationItems = this.section.querySelectorAll('.navigation-item');
        this.descriptionItems = this.section.querySelectorAll('.description-item');
        this.animatedSlide = this.section.querySelectorAll('.animated-slide');
        this.activeNavigationClass = 'navigation-item-active';
        this.activeDescriptionClass = 'description-item-active';
        this.activeSlideClass = 'animated-slide-active';
        this.activeItemIndex = 0;
        this.intervalId = null;
        this.delay = 5000;
        this.bindAction = this.bindAction.bind(this);
        this.setActiveSlide = this.setActiveSlide.bind(this);
        this.changeSlide = this.changeSlide.bind(this);
        this.removeActiveClass = this.removeActiveClass.bind(this);
        this.initInterval = this.initInterval.bind(this);
        this.init();
    }

    removeActiveClass(index) {
        this.navigationItems[index].classList.remove(
            this.activeNavigationClass
        );
        this.descriptionItems[index].classList.remove(
            this.activeDescriptionClass
        );
        this.animatedSlide[index].classList.remove(
            this.activeSlideClass
        );
    }

    setActiveSlide(index) {
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

    changeSlide(index) {
        this.removeActiveClass(this.activeItemIndex)
        if(isNaN(index)){
            this.activeItemIndex === this.animatedSlide.length - 1 ? this.activeItemIndex = 0 : this.activeItemIndex++;
        }else{
            this.activeItemIndex = index;
        }
        this.setActiveSlide(this.activeItemIndex)
    }

    initInterval() {
        clearInterval(this.intervalId);
        this.intervalId = setInterval(this.changeSlide, this.delay);
    }

    bindAction(item, index) {
        item.addEventListener("click", () => {
            if (this.activeItemIndex !== index) {
                this.changeSlide(index)
                this.initInterval();
            }
        });
    }

    init() {
        this.initInterval();
        this.navigationItems.forEach(this.bindAction);
    }
}

export default AnimatedSlider;