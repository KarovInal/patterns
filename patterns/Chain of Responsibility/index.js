console.log(add(12, 3)(12, 12));

function add(...args) {
    let sum = args;
  
  	if(!sum.length) return null;
  
    if(args.length) {
        sum = sum.reduce((a, b) => a + b);
    }
    
    function sumFunc(...num) {
      	if(!num.length) return sum;
      
        if(num.length) {
            sum += num.reduce((a, b) => a + b);
            return sumFunc;
        }

        return sumFunc;
    }
    
    return sumFunc;
}class MoneyChain {
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

function toRub(amount) {
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

function toEur(amount) {
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

function toUsa(amount) {
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