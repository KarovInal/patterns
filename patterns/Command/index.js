// Receiver
class Calculator {
  constructor() {
    this.result = 0;
  }

  plus(value) {
    this.result += value;
  }

  minus(value) {
    this.result -= value;
  }

  setResult(value) {
    this.result = value;
  }

  getResult() {
    return this.result;
  }
}

// Commands

class CommandPlus {
  constructor(calculator) {
    this.calculator = calculator;
    this.undoResult = calculator.getResult();
  }

  execute(value) {
    this.calculator.plus(value);
  }

  undo() {
    this.calculator.setResult(this.undoResult);
  }
}

class CommandMinus {
  constructor(calculator) {
    this.calculator = calculator;
    this.undoResult = calculator.getResult();
  }

  execute(value) {
    this.calculator.minus(value);
  }

  undo() {
    this.calculator.setResult(this.undoResult);
  }
}

// Invocer

export default class User {
  constructor() {
    this.calculator = new Calculator;
    this.commands = [];

    this.getResult = this.getResult.bind(this);
  }

  plus(value) {
    let command = new CommandPlus(this.calculator);
    command.execute(value);
    this.commands.push(command);
  }

  minus(value) {
    let command = new CommandMinus(this.calculator);
    command.execute(value);
    this.commands.push(command);
  }

  undo () {
    if(!this.commands.length) return console.log('Stack is empty');

    let command = this.commands.pop();
    command.undo();
    this.getResult();
  }

  getResult () {
    return this.calculator.getResult();
  }
}

let user = new User;
user.plus(2);
user.plus(2);
user.minus(2);
user.undo();