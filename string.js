const country = "Bangladesh";
const division = "Chittagong";
const district = `Cumilla`;
const subDistrict = new String("Burichong"); //object

// array
const numbers = [23, 34, 56, 78];
console.log(numbers.length);
console.log(numbers[1]);
// string
const capital = "Dhaka";
console.log(capital.length);
console.log(capital[3]);

capital[0] = "f"; // this is not possible coz string is immutable (not changeable)
// array is mutable means you can change array element
// string comparison toLowerCase() , toUpperCase()
const subject = "chemistry";
const book = "CheMistry";
if (subject.toLowerCase() === book.toLowerCase()) {
  console.log(`Correct comparison`);
} else {
  console.log(`not work`);
}
// string trim
const drink = "water";
const liquid = "wa ter";
if (drink.trim() === liquid.trim()) {
  console.log(`perfect`);
} else {
  console.log(`wrong`);
}
// slice
const address = "jhawtala";
const part = address.slice(2, 5);
console.log(part);
// split
const sentence = `my name is tazkir`;
console.log(sentence.split(" "));
console.log(sentence.split("a"));

const friendsStr = "Tazkir, Tanveer, Rafi, sakib, Ashik";
const friends = friendsStr.split(",");
console.log(friends);

// array join
const realFriend = ["Tazkir", "Tanveer", "Rafi", "sakib", "Ashik"];
console.log(realFriend.join());
console.log(realFriend.join("|"));
console.log(realFriend.join("-"));
//concat
const firstName = "Tazkir";
const lastName = "Hossain";
const fullname = firstName.concat(" ").concat(lastName);
console.log(fullname);
// includes
console.log(lastName.includes("a")); // true
// reverse string
const sentence1 = "My name is Tazkir";
let reverse = "";
for (const letter of sentence1) {
  reverse = letter + reverse;
}
console.log(reverse);
// reverse string method 2
for (let i; i < sentence1.length; i++) {
  const letter = sentence1[i];
  reverse = letter + reverse;
}
console.log(reverse);
// shortcut method
const reversed = sentence1.split("").reverse().join();
console.log(reversed);
