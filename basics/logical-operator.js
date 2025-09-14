
//**Logical Operators: AND (&&), OR (||), NOT (!)

console.log(true && false); // AND: false (both must be true)
console.log(true || false); // OR: true (at least one is true)
console.log(!true);        // NOT: false (inverts the value)

//**Example with numbers and Conditions
let x = 10;
let y = 5;

// AND with conditions
console.log(x > 5 && y < 10); // true (both conditions true)

// OR with conditions
console.log(x < 5 || y < 10); // true (second condition true)

// NOT with condition
console.log(!(x > y));        // false (x > y is true, but ! makes it false)
