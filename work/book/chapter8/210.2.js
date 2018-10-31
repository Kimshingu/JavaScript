var arr = [4,10,7,100,25,34,21,79];

// What is MAX, Min number?

arr.sort((a,b) => a>b);
var min = arr[0];
var max = arr[arr.length-1];
console.log("min :" +min+", max :" + max );

var people =[
  {id:30 , name:'Brad', age:45},
  {id:20 , name:'Tom', age:34},
  {id:40 , name:'Iaan', age:64},
  {id:10 , name:'Aron', age:18},
];

// Sort by id asc.
people.sort( (a,b) => a.id > b.id );
console.log(people);
console.log("---------------------------------------");
// What is most younger's name?
people.sort( (a,b) => a.age > b.age );
console.log(people);
var younger = people[0].name;
console.log("Most young man : " + younger);
console.log("---------------------------------------");
// Sort by name desc.
people.sort( (a,b) => a.name < b.name );
console.log(people);
