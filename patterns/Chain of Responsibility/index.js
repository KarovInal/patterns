export default class MoneyChain {
  constructor(currentParse) {
    this.currentParse = currentParse;
    this.next = null;
  }

  run(amount) {
    this.currentParse(amount);

    if(this.next) this.next.run(amount);
  }

  setParse(next) {
    this.next = next;
    return this.next;
  }
}

export function toRub(amount) {
  let { type, count } = amount;

  let result = { type: 'rub', count: null };

  switch(type) {
    case 'eur':
      result.count = count * 65;
      break;
    case 'usa':
      result.count = count * 49;
      break;
    default:
      result.count = `can't parse`;
  }

  console.log(result);
  return result;
}

export function toEur(amount) {
  let { type, count } = amount;

  let result = { type: 'eur', count: null };

  switch(type) {
    case 'rub':
      result.count = count / 65;
      break;
    case 'usa':
      result.count = count / 0.8;
      break;
    default:
      result.count = `can't parse`;
  }
  
  console.log(result);
  return result;
}

export function toUsa(amount) {
  let { type, count } = amount;

  let result = { type: 'usa', count: null };

  switch(type) {
    case 'rub':
      result.count = count / 49;
      break;
    case 'eur':
      result.count = count / 1.16;
      break;
    default:
      result.count = `can't parse`;
  }

  console.log(result);
  return result;
}

let rub = new MoneyChain(toRub);
let eur = rub.setParse(new MoneyChain(toEur));
let usa = eur.setParse(new MoneyChain(toUsa));

rub.run({
  type: 'eur',
  count: 1
})