const person = {
  name: "Tazkir",
  age: 30,
  profession: "software engineering",
  salary: 270000,
  married: true,
  children: 3,
  "Faviourite Food": ["kacchi", "beef", "chiken roast", "button", "ilish"],
  address: {
    country: "Bangladesh",
    division: "Chittagong",
  },
};
//dot notation
console.log(person.married);
const income = person.salary;
console.log(income);

//backet notation
console.log(person["children"]);
const age = person["age"];
console.log(age);
console.log(person["Faviourite Food"]);
//const food = person["Faviourite Food"];
//console.log(food)
// we cal also update the object
person["Faviourite Food"] = ["rice", "fish", "vorta", "vegitable"];
// person.salary = 3000000;
// console.log(person.salary);
const keys = Object.keys(person); // return object keys
console.log(keys);
const values = Object.values(person); // return object values
console.log(person.address.country);
// delete object
delete person.address;
