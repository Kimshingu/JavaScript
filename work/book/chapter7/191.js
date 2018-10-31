let name = "Irena"; // global
let age = 27; // global

function greet() {
  console.log(`Hello, ${name}!`);
}

function getBirthYear() {
  return new Date().getFullYear() - age;
}

greet();
console.log(getBirthYear());
