import {StringValidator} from './StringValidator';

var myValidator = new StringValidator();
console.log(myValidator.validate(""));
console.log(myValidator.validate("Test"));
