export class Iphone {
  get info() {
    return {
      model: 'Iphone X',
      os: 'ios',
      price: '91 990'
    }
  }

  touch() {
    return 'touch on display';
  }

  zoom() {
    return 'zoom image';
  }

  swipe() {
    return 'swiper display';
  }

  select() {
    return 'select item';
  }
}

export class Hand {
  constructor(device) {
    this.device = device;
  }

  touch() {
    return this.device.touch();
  }

  pinch() {
    return this.device.zoom();
  }

  swipe() {
    return this.device.swipe();
  }

  doubleTap() {
    return this.device.zoom();
  }

  hold() {
    return this.device.select();
  }

  getDeviceInfo() {
    return this.device.info;
  }
}

let iphone = new Iphone;
let hand = new Hand(iphone);

hand.hold();
hand.touch();
hand.swipe();

hand.getDeviceInfo();