let obj = {a:10};
obj.b = 20;
Object.defineProperty(obj,'c',{
  value: 30,
  writable: true,
  enumerable: true,
  configurable: false
}); 

delete obj.c;
console.log(obj); // { a: 10, b: 20, c: 30 }
