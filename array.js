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
