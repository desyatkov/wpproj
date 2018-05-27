import './main.scss'
import {el} from './utils';

const elements = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log( el(elements) );

class Bork {
  instanceProperty = "bork";
  boundFunction = () => {
    return this.instanceProperty;
  };

  static staticProperty = "babelIsCool";
  static staticFunction = function() {
    return Bork.staticProperty;
  }
}

let myBork = new Bork;

console.log(myBork.__proto__.boundFunction);
console.log(myBork.boundFunction.call(undefined));
console.log(Bork.staticFunction());