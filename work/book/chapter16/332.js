const x = 19.51;

const log = console.log;

log(x.toFixed(3)); // "19.510"
x.toFixed(2); // "19.51"
x.toFixed(1); // "19.5"
x.toFixed(0); // "20"

console.log(Reflect.ownKeys(Number.prototype));

console.log(Math.min(5,10,15));
console.log(Math.max(5,10,15));

let arr = [7,3,11,15];

console.log(Math.min(...arr));
console.log(Math.max(...arr));
