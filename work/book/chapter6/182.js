const o = {
  name: 'Julie',

  greetBackwards: function() {

    const getReverseName = () => {
      let nameBackwards = '';
      for (let i = this.name.length - 1; i >= 0; i--) {
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    };
    // arrow 연산자를 사용하면
    // this는 자동적으로 가장 가까운 scope를 갖는 함수와 일치한다.
    return console.log(`${getReverseName()} si eman ym ,olleH`);;
  },

};
o.greetBackwards();
