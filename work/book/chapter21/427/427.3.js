let obj = {a:10};
obj.b = 20;
Object.defineProperty(obj,'c',{
  value: 30,
  writable: true,
  enumerable: false,
  configurable: true
}); 

console.log(obj); // { a: 10, b: 20 }
for (var elem in obj) {
  if (obj.hasOwnProperty(elem)) {
    console.log(obj[elem]);
  }
}
console.log(obj.c); // 30 존재는 한다.
