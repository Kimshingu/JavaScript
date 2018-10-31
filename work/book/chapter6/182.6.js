// console.log(Reflect.ownKeys(Function.prototype));

function foo(){
  console.log(this === foo);
  
  setTimeout((function() {
      console.log(this);
      console.log(this.a); 
  }).bind(this), 100); 
}

foo.a = 'foo.a';
foo.call(foo);
