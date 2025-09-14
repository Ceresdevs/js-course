//Comparisons //
let a = 10;
let b = 20;

//*Equal to (==)
console.log(a == b);   // false
console.log(a == '10') // true (type coercion / automatic type conversion)
console.log(a == '10.00');    // true
// Not equal (!=)
console.log(a != b);   // true

//*RECOMMENDED:Strict equal (===) → checks value and type
console.log(a === 10); // true
console.log(a === "10"); // false

//*Strict not equal (!==)
console.log(a !== 10);  // false
console.log(a !== "10"); // true

//*Greater than (>)
console.log(b > a);    // true

//*Less than (<)
console.log(a < b);    // true

//*Greater than or equal to (>=)
console.log(a >= 10);  // true

//*Less than or equal to (<=)
console.log(b <= 20);  // true
