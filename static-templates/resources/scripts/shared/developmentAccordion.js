import Accordion from "./accordion";

class DevelopmentAccordion {
  constructor() {
    this.init();
  }

  init() {
    new Accordion(".development-item", ".development-item__header-btn");
  }
}

export default DevelopmentAccordion;
