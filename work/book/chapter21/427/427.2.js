let obj = {a:10};
obj.b = 20;
Object.defineProperty(obj,'c',{
  value: 30,
  writable: false,
  enumerable: true,
  configurable: true
}); 
console.log(Object.getOwnPropertyDescriptor(obj, 'c'));

obj.c = 40;
console.log(obj.c);
