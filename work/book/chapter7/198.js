/*
class Counter{
  int count = 0;
  public String increment(){
    return ++count +"time(s)."
  }
}
Counter counter = new Counter();
System.out.println(counter.increment());
System.out.println(counter.increment());
*/


// 격리 공간을 확보, private한 자원을 만든다.
const f = (function() {
  let count = 0;
  return function increment() {
    return console.log(`I have been called ${++count} time(s).`);
  };
})();
f(); // "I have been called 1 time(s)."
f(); // "I have been called 2 time(s)."
// console.log(count); // error
