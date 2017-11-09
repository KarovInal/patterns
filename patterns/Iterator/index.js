var items = ["one", 2, "circle", true, "Applepie"];

class Iterator {
  constructor(items) {
    this.index = 0;
    this.items = items;
  }
  first() {
    this.index = 0;
    return this.next();
  }
  next() {
    return this.items[this.index++];
  }
  hasNext() {
    return this.index <= this.items.length;
  }
  each(cb) {
    for(let item = this.first(); this.hasNext(); item = this.next()) {
      cb(item);
    }
  }
}

let iterator = new Iterator(items);

iterator.each((item) => {
  console.log(item);
})