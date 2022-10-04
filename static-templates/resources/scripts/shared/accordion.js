class Accordion {
  constructor(itemClass, btnClass) {
    this.accordionItems = document.querySelectorAll(`${itemClass}`);
    this.accordionBtns = document.querySelectorAll(`${btnClass}`);
    this.activeAccordionClass = "active";
    this.activeItemIndex = 0;
    this.bindAction = this.bindAction.bind(this);
    this.init();
  }

  bindAction(item, index) {
    item.addEventListener("click", (e) => {
      if (this.activeItemIndex === index) {
        this.accordionItems[this.activeItemIndex].classList.remove(
          this.activeAccordionClass
        );
        this.activeItemIndex = null;
      } else {
        if (this.activeItemIndex !== null) {
          this.accordionItems[this.activeItemIndex].classList.remove(
            this.activeAccordionClass
          );
        }
        this.activeItemIndex = index;
        this.accordionItems[this.activeItemIndex].classList.add(
          this.activeAccordionClass
        );
      }
    });
  }

  init() {
    this.accordionBtns.forEach(this.bindAction);
  }
}

export default Accordion;
