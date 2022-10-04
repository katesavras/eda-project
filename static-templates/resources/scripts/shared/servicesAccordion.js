import Accordion from "./accordion";

class ServicesAccordion {
  constructor() {
    this.init();
  }

  init() {
    new Accordion(".accordion-item", ".accordion-item__header-btn");
  }
}

export default ServicesAccordion;
