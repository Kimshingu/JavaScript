const bruce = {
  name: "Bruce"
};

const madeline = {
  name: "Madeline"
};

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

// bind: 함수를 실행하는게 아니라 함수안에서 사용 할
// this를 전달하는 파라미터로 고정시킨 함수를 리턴한다. 
// bind 처리된 후에 this는 변경이 불가능하다.
const updateBruce = update.bind(bruce);

updateBruce(1904, "actor");
console.log(bruce);
// bruce is now { name: "Bruce", birthYear: 1904, occupation: "actor" }
updateBruce.call(madeline, 1274, "king");
// bruce is now { name: "Bruce", birthYear: 1274, occupation: "king" };
// madeline is unchanged
console.log(bruce);
console.log(madeline);
// bind 처리한 this를 call로 바꿀 수 있는지 확인 >> 안됨
