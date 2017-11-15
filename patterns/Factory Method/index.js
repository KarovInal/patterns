export default class FactoryMail {
  constructor() {
    console.log('Вы инициализировали FactoryMail');
    console.log('Теперь вам доступен createMail метод, для отправки почты.');
  }

  createMail(type) {
    let mail;

    switch(type) {
      case 'land':
        mail = new MailLand;
        break;
      case 'sea':
        mail = new MailSea;
        break;        
      default:
        mail = new MailDefault;
        break;        
    }

    mail.getType = function() { console.log(this.type) };
    mail.getDelay = function() { console.log(this.delay) };

    return mail;
  }
}

class Mail {
  run(callback = () => {}) {
    console.log('Отправка началась');

    setTimeout(() => {
      console.log(`Отправка завершена за: ${this.delay}ms`);
      
      callback({
        type: this.type,
        delay: this.delay
      });
    }, this.delay)
  }
}

class MailLand extends Mail {
  constructor() {
    super();

    this.type = 'Land';
    this.delay = 3000;
  }
}

class MailSea extends Mail {
  constructor() {
    super();
    
    this.type ='Land';
    this.delay = 1000;
  }
}

class MailDefault {
  constructor() {
    this.type ='Wolk';
    this.delay = 10000;
  }

  run() {
    console.log('Почтальон вышел...');

    setTimeout(() => {
      console.log('Надеюсь вы получили посылку')
    }, this.delay);
  }
}

let factor = new FactoryMail;

let land = factor.createMail('land');
land.run();