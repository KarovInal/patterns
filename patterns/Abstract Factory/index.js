class Button {
  constructor() {
    this.title = 'Default button';
  }

  onClick() {
    console.log(`click on ${this.title}`);
  }
}

class IOSButton extends Button {
  constructor() {
    super();

    this.title = 'IOS button';
  }
}

class WINButton extends Button {
  constructor() {
    super();

    this.title = 'WIN button';
  }
}

class ButtonFactory {
  constructor(type) {
    this.type = type;
  }

  create() {
    switch(this.type) {
      case 'ios':
        return new IOSButton;
      case 'win':
        return new WINButton;
      default:
        return new Button;
    }
  }
}

let CreatorIosButton = new ButtonFactory('ios');

let iosButton = CreatorIosButton.create();