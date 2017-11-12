import Element from './Element.js';

export default class Base {
  constructor(mediator) {
    this.mediator = mediator;
    this.mediator.subscribe('update', this);

    this.baseHTML = new Element('.base');
    this.baseHTML.HTMLElement.addEventListener('change', e => this.changeComment(e))
  }

  reseive(type, data) {
    switch(type) {
      case 'update':
        if(!data.isAnalyze) {
          this.baseHTML.show();
          return;
        }
      default:
        this.baseHTML.hide();
        return null;
    }
  }

  changeComment({ target }) {
    this.mediator.publish('base', 'baseChange', { value: target.value })
  }
}