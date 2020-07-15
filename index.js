// console.log('This is Index');





// // SINGLE MODULE EXEXUTION

// const average = require('./mod')
// console.log(average([1,2,3]));




// MULTIPLE MODULE EXECUTIONS
const mod = require('./mod');

console.log(mod.avg([2,3,4]));
console.log(mod.name("ABHISHEK "));
console.log(mod.square(12));