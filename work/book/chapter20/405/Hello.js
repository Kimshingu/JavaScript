function hello(){
  return 'Hello World!';
}

function add(a,b) {
  return a + b;
}

// exports 키워드는 module.exports을 가리키는 별칭
console.log(exports === module.exports);

module.exports = {
  hello,
  add
};

// exports는 module.exports의 참조값을 가리키는데 
// 새 객체를 할당하면 module.exports의 참조값을 가리키지 않는다.
// 외부에 제공하는 객체는 exports가 아니라 module.exports이다.
// 따라서, module.exports로 사용해야 한다.

// module.exports.color = 'Blue';
