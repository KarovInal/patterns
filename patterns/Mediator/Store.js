export default class Store {
  constructor(mediator) {
    this.store = {
      base: '',
      isAnalyze: true,
      isBigDeal: true
    };

    this.mediator = mediator;

    this.mediator.subscribe('selected', this);
    this.mediator.subscribe('base', this);
    this.mediator.publish('update', 'update', this.store);
  }

  reseive(type, data) {
    switch(type) {
      case 'analyze': {
        this.store = Object.assign(this.store, {
          isAnalyze: (data.id != 2),
          isBigDeal: (data.id == 1)
        });
        this.mediator.publish('update', 'update', this.store);
        break;
      }
      case 'baseChange': {
        this.store.base = data.value;
        break;
      }
    }

    this.log();
  }

  log() {
    console.log(this.store);
  }
}