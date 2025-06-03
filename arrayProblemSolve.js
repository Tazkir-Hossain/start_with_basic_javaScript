const sentence = "I am a hard working person";
const split = sentence.split(" ");
// const reverse = split.reverse();
// console.log(split);
// console.log(reverse);
let reverse = "";
for (i = 0; i < split.length; i++) {
  const latter = split[i];
  reverse = latter + " " + reverse;
}
console.log(reverse);

const numbers = ["Tom", "Tim", "Tin", "Tik"];
const combined = numbers.join("");
console.log(combined);
