// const numbers = [12, 45, 67, 98, 90, 93];

// for (const num of numbers) {
//   console.log(num);
// }

// // while loop
// let num = 1;
// while (num < 10) {
//   console.log(num);
//   num++;
// }

// // for loop
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// // continue --> skip this iteration
// // break --> i am done with this loop. loop end
// // break
// for (let i = 0; i < 15; i++) {
//   if (i > 10) {
//     break;
//   }
//   console.log(i);
// }

// // continue
// let j = 0;
// while (j < 10) {
//   j++;
//   if (j % 2 === 1) {
//     continue;
//   }
//   console.log(j);
// }

let k = 1;
let sum = 0;
while (k < 101) {
  sum = sum + k;
  if (sum % 2 === 1) {
    continue;
  }
  console.log(sum);
  k++;
}
