// for~in문에서 if (obj.hasOwnProperty(variable))가 갖는 의미

var obj = {
  a:10,
  b:20
}

console.log(obj.__proto__ === Object.prototype); // true
obj.__proto__ = {c:30};
console.log(obj.__proto__ === Object.prototype); //false
for (var variable in obj) { //해당 객체 뿐만 아니라 부모 객체까지 가서 부모 프로퍼티를 가져온다.
  // if (obj.hasOwnProperty(variable)) {
    console.log(obj[variable]);
  // }
}
console.log("---------------------------------");
for (var variable in obj) {
  if (obj.hasOwnProperty(variable)) { //해당 객체의 프로퍼티만 가져올때 걸러낸다.
    console.log(obj[variable]);
  }
}
