export default class Element {
  constructor(selector) {
    this.HTMLElement = document.querySelector(selector);
  }

  show() {
    this.HTMLElement.style.display = 'block';
  }
  
  hide() {
    this.HTMLElement.style.display = 'none';
  }
}