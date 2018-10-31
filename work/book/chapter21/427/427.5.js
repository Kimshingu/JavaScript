// freeze
let obj = {a:10};
obj.b = 20;
Object.defineProperty(obj,'c',{
  value: 30,
  writable: true,
  enumerable: true,
  configurable: true
}); 
Object.freeze(obj); // writable: false, configurable: false
console.log(Object.getOwnPropertyDescriptor(obj, 'c'));
/*
{ value: 30,
  writable: false,
  enumerable: true,
  configurable: false }
 */
console.log(Object.isFrozen(obj)); //true
