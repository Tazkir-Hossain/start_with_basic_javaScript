// ////////////if else statement/////////////////
// let price = 2000;
// if (price >= 2000) {
//   let discount = price * 0.1;
//   console.log(`Your price is ${price - discount}`);
// } else {
//   console.log("you need to payment full taka,No discount");
// }

// ////////////Multiple condition Logical operators//////////////
// const salary = 25000;
// const isBCS = true;
// const height = 68;
// // if (salary <= 20000 || height <= 68) {
// //   console.log("You are passed");
// // } else {
// //   console.log("Next time");
// // }
// if ((salary <= 20000 || height <= 68) && isBCS) {
//   console.log("You are passed");
// } else {
//   console.log("Next time");
// }

// /////////////Multi Level if else statement///////////////
// let cost = 500;
// if (cost >= 4000) {
//   let discount = cost * 0.25;
//   const price = cost - discount;
//   console.log(`Your ammount is ${price}`);
// } else if (cost >= 2000) {
//   let discount = cost * 0.1;
//   const price = cost - discount;
//   console.log(`Your ammount is ${price}`);
// } else {
//   console.log(`Your ammount is ${cost}`);
// }

// ///////////Nested if else statement////////////////////
// const money = 500;
// if (money > 300) {
//   console.log("Bro you are rich!!!");
// } else {
//   if (money > 100) {
//     console.log("You are not poor and not rich");
//   } else {
//     if (money > 0) {
//       console.log("You are poor");
//     } else {
//       console.log("You need to earn money");
//     }
//   }
// }
// ///////////// ternary operator three parts condition ? ://////////////
// // condition ? do something when true : do something when false
// const age = 18;
// age >= 18
//   ? console.log("you are eligible")
//   : console.log("You are not eligible");

// const tax = 500;
// const isLeader = true;
// // let totalTax = isLeader === true ? 0 : tax + 100;
// // console.log(totalTax);

// let totalTax = isLeader === true ? (tax > 1000 ? tax / 2 : 0) : tax + 100;
// console.log(totalTax);

///////////////Advance logical not operator//////////////////////
const isLeader = true;
//if(isLeader === true)
if (isLeader) {
  console.log("welcome");
} else {
  console.log("Not allow");
}
const isPassed = false;
// if(isPassed === false)
// if we want conditionally shows the negative than we can also use conditional not operator !
if (!isPassed) {
  console.log("You need to study more");
} else {
  console.log("You are good");
}
