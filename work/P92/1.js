var obj = {a:10};
obj.a =20;
obj.a =30;
const obj2 = {a:10};
obj2.a =20;
// 객체는 힙메모리에
// obj2는 글로벌스코프 #참조값 이 참조값이 상수라는 뜻
// 항상 같은 곳에 있는 객체를 참조한다.
console.log(obj);
console.log(obj2);
