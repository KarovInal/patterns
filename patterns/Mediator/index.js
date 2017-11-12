import Mediator from './Mediator.js';
import Selector from './Selector.js';
import Store from './Store.js';
import Base from './Base.js';

let mediator = new Mediator;

let selector = new Selector(mediator);
let base = new Base(mediator);
let store = new Store(mediator);