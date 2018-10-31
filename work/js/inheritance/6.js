function Foo() {

}
console.log(Foo.__proto__ === Function.prototype);
console.log(Object.__proto__ === Function.prototype);

Function.prototype.say = function() {
console.log("Hi World!");
}

Foo.say();
Object.say();
