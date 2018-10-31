// console.log(Reflect.ownKeys(Function.prototype));

function foo(){
  console.log(this === foo);
  var fn = function() {
      console.log(this);
      console.log(this.a); 
  };
  // fnBind 함수내에 this는 foo로 고정된 상태
  var fnBind = fn.bind(this);
  
  setTimeout(fnBind, 100); 
}

foo.a = 'foo.a';
foo.call(foo);
