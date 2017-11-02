class Iphone {
  touch() {
    console.log('touch on display');
  }

  get info() {
    return {
      model: 'Iphone X',
      os: 'ios',
      price: '91 990'
    }
  }

  zoom() {
    console.log('zoom image')
  }

  swipe() {
    console.log('swiper display')
  }

  select() {
    console.log('select item')
  }
}

class Hand {
  constructor(device) {
    this.device = device;
  }

  touch() {
    this.device.touch();
    return this;
  }

  pinch() {
    this.device.zoom();
    return this;
  }

  swipe() {
    this.device.swipe();
    return this;
  }

  doubleTap() {
    this.device.zoom();
    return this;
  }

  hold() {
    this.device.select();
    return this;
  }

  getDeviceInfo() {
    let {
      model,
      os,
      price
    } = this.device.info;

    console.log(`
      Model: ${model}
      OS: ${os},
      Price: ${price}
    `);
  }
}

let iphone = new Iphone;
let hand = new Hand(iphone);

hand.hold()
    .touch()
    .swipe();

hand.getDeviceInfo();