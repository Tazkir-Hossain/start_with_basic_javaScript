const cars = ["bmw", "audi", "noah", "premio"];
console.log(cars.length);
console.log(cars[2]);

// set or update
cars[0] = "benz";

// push (add in the last index)
cars.push("honda");
cars.push("civic", "mazda");
console.log(cars);

//pop remove the last element of an array
cars.pop();
console.log(cars);

// shift remove form array first element
cars.shift();

//unshift add array element from the first
cars.unshift("toyota");

// includes to check the array element
console.log(cars.includes("noah"));
// indexOf find the element index number
console.log(cars.indexOf("audi"));
// cars.slice(1,5) include 1 upto 4
// array concate , join
//combinig two array
const bus = ["miami", "asia", "royal"];
const combin = cars.concat(bus);
console.log(combin);
