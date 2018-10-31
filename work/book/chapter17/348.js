const beer99 = "99. bottles of beer on the wall " +
"take 1 down and pass it around -- " +
"98 bottles of beer on the wall. /";

/*
  정규표현식이 기호를 다른 의미로 정해서 사용하면
  그 기호를 문자열로 찾아달라고 할 때 추가적인 설정이 필요하다.
  이스케이프 문자 역슬래쉬를 사용하면
  정규표현식 설정이 아니라 그냥 문자열로 취급된다.
 */


const matches = beer99.match(/0|1|2|3|4|5|6|7|8|9/g);
const m1 = beer99.match(/[0123456789]/g); // okay
const m2 = beer99.match(/[0-9]/g); // better!
const match2 = beer99.match(/[0-9a-z]/g); // number + lower alphabet
const match3 = beer99.match(/[0-9a-zA-Z]/g); //number + lower,upper alphabet
const match4 = beer99.match(/[0-9a-z]/ig);  // number + insensitive alphabet
const match5 = beer99.match(/\//ig); // slash
// .을 사용하여 임의의 글자 한 글자라는 뜻으로 사용
const match6 = beer99.match(/./ig); // one letter
const match7 = beer99.match(/\./ig); // dot
const match8 = beer99.match(/-/ig); // -
const match9= beer99.match(/[\-]]/ig); // [\-]
const match10 = beer99.match(/[\-0-9a-z.]/ig); // [.] => 문자 . 
console.log(match10);

// ^[0-9] // 숫자로 시작하는
// [^0-9] // 숫자가 아닌
