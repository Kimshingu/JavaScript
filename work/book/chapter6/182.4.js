// console.log(Reflect.ownKeys(Function.prototype));



function foo(){
  // console.log(this);
  setTimeout((function() {
      console.log(this.a); 
  }).bind(this), 100); //undefined >> foo
}

foo.a = 'foo.a';
foo.call(foo);
