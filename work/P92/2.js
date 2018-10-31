//객체의 키 : 값
var obj = {
  "key":"value",
  'key2':1,
  key3:[],
  "this is key4":{},  // 오바임ㅋㅋㅋ
};

// 프로퍼티를 추가하는데 객체의 멤버죠
// 키라고하는 프로퍼티 키를 만들고 벨류라고 하는 키가 가리키는 값을 할당합니다.
// 키값은 항상 문자열이다.
// 더블 퀘테이션 싱글 퀘테이션을 생략해도 되는 이유는 항상 문자열 이니까.
console.log(obj);
console.log(obj.key);
console.log(obj.key2);
console.log(obj.key3);
console.log(obj["this is key4"]); // . 대신 []을 사용할 수 있다. 오바임 ㅋㅋㅋ

var what = [1,2,3];
console.log(what[0]);  //배열
var some = {"0":10}
console.log(some["0"]); // 객체

var object = {
    a: 30,
    b: 40,
    print : function(){
      console.log(this.a+ this.b);
    }
};

// 객체를 대상으로 객체의 프로퍼티 개수만큼 반복하면서 하나씩 꺼내여 처리할때
// 사용한다.
for (var variable in object) {
  console.log(typeof variable, variable);
  // if (object.hasOwnProperty(variable)) {
      //console.log(object[variable]);  //대괄호는 이렇게 사용하면 됨

      // 함수는 실행하는 코드를  작성해야 한다.
      if (typeof object[variable] !== 'function') { //변수면 출력하고
        console.log(object[variable])
      } else { //함수면 호출하자.
        object[variable]();
        // object["print"]();
        // object.print();
      }
  //}
}
