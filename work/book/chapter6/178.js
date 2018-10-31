function add(a,b){ //함수
  return a+b;

}

const o = {
  name: 'Julie',
  greetBackwards: function() {
    // 함수라고 부를 수 있는데 어떤 객체가 가지고 있는 함수 = 메소드
    // 메소드는 호출한 자기자신 this는 o이다.
    const self = this;
    // 지역함수
    function getReverseName() { //함수
      // 단독으로 존재하는 함수의 this 는 global 이다.
      let nameBackwards = '';
      for (let i = self.name.length - 1; i >= 0; i--) {
        nameBackwards += self.name[i];
        //문자열은 문자로 자른거지 배열이 아니다.
      }
      return nameBackwards;
    }


    return `${getReverseName()} si eman ym ,olleH`;
  },
};
console.log(o.greetBackwards());
