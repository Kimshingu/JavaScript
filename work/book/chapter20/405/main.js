console.log('----------1-------------');
// Hello.js 코드를 수행하고 
// Hello.js # module.exports 객체를 할당한다.
const hello = require('./Hello'); 

console.log('----------2-------------');
console.log(hello); // === Hello.js # module.exports
console.log(hello.hello()); // Hello World!
console.log(hello.add(5,2)); // 7
