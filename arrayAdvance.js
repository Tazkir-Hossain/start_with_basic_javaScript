//array traversal using loop

const friends = ["asif", "noor", "shafayet", "mohibur"];
for (const friend of friends) {
  //console.log(friend);
}

for (let i = 0; i < friends.length; i++) {
  //console.log(friends[i]);
}
// while
let j = 0;
while (j < friends.length) {
  //console.log(friends[j]);
  j++;
}
//reverse array
//const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//console.log(numbers);
//const reverse = numbers.reverse();
//console.log(reverse);
///////////////reverse array using loop///////////////
//for loop
let rev_numbers = [];
// for (const num of numbers) {
//   rev_numbers.unshift(num);
// }
// console.log(rev_numbers);
// for loop
// for (let i = 0; i < numbers.length; i++) {
//   const num = numbers[i];
//   rev_numbers.unshift(num);
// }
//console.log(rev_numbers);
// for loop reverse side
for (let i = numbers.length - 1; i >= 0; i--) {
  const num = numbers[i];
  rev_numbers.push(num);
}
//console.log(rev_numbers);
////////////////////// array sort()///////////////////
const person = ["ashik", "mahi", "ashpin", "adib"];
const sortedPerson = person.sort();
console.log(sortedPerson);
// sort -->
const numbers = [4, 7, 3, 2, 96, 18, 67, 9];
// Ascending ---> smaller to larger
// descending ---> larger to smaller
const number_asc = [...numbers].sort(function (a, b) {
  return a - b;
});
const number_dsc = [...numbers].sort(function (a, b) {
  return a - b;
});
console.log(number_asc);
console.log(number_dsc);
