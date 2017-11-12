export default class Mediator {
  constructor() {
    this.chanels = {};
  }

  subscribe(chanel, cls) {
    if(!this.chanels[chanel]) this.chanels[chanel] = [];

    this.chanels[chanel].push(cls);
  }

  publish(chanel, type, ...args) {
    if(!this.chanels[chanel]) return false;

    this.chanels[chanel].forEach((chanelItem) => {
      chanelItem.reseive(type, ...args);
    });
  }
};