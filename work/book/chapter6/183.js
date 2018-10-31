const bruce = {
  name: "Bruce"
};

const madeline = {
  name: "Madeline"
};
// this function isn't associated with any object, yet
// it's using 'this'!

function greet() {
  return `Hello, I'm ${this.name}!`;
}

// 매개변수가 없는 경우
console.log(greet()); // "Hello, I'm !" - 'this' not bound
console.log(greet.call(bruce)); // "Hello, I'm Bruce!" - 'this' bound to 'bruce'
console.log(greet.call(madeline)); // "Hello, I'm Madeline!" - 'this' bound to 'madeline'

// 매개변수가 있는 경우
function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}
update.call(bruce, 1949, 'singer');
// bruce is now { name: "Bruce", birthYear: 1949,
// occupation: "singer" }
console.log(bruce);
update.call(madeline, 1942, 'actress');
// madeline is now { name: "Madeline", birthYear: 1942,
// occupation: "actress" }
console.log(madeline);

// apply 함수가 배열을 낱개로 잘라서 update 함수를
// 호출하면서 파라미터로 전달한다.

// 두번째 파라미터에 배열로 사용해야 한다.
update.apply(bruce, [1955, "actor"]);
// bruce is now { name: "Bruce", birthYear: 1955,
// occupation: "actor" }
update.apply(madeline, [1918, "writer"]);
// madeline is now { name: "Madeline", birthYear: 1918,
// occupation: "writer" }

const arr = [2, 3, -5, 15, 7];
Math.min.apply(null, arr); // -5
// this 는 의미가 없고 배열이 중요하다.
Math.max.apply(null, arr); // 15

console.log(Math.min(2, 3, -5, 15, 7));
console.log(Math.max(2, 3, -5, 15, 7));

const newBruce = [1940, "martial artist"];
update.call(bruce, ...newBruce); // equivalent to apply(bruce, newBruce)
Math.min(...arr); // -5
Math.max(...arr); // 15
