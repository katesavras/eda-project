export default class InitInstance {
  constructor(selector, classInstance) {
    this.selector = selector;
    this.classInstance = classInstance;
    this.init();
  }

  init() {
    document
      .querySelectorAll(this.selector)
      .forEach((el) => new this.classInstance(el));
  }
}
