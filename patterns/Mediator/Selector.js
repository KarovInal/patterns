export default class Selector {
  constructor(mediator) {
    this.mediator = mediator;
    this.mediator.subscribe('update', this);

    this.selectorHTML = document.getElementsByClassName('selector')[0];
    this.selectorHTML.addEventListener('change', e => this.onSelected(e));
  }

  onSelected({ target }) {
    this.mediator.publish('selected', 'analyze', { id: target.value });
  }

  reseive(type, data) {
  }
};