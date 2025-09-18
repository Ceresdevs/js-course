
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


//**TRUTHY AND FALSY VALUES */
  //Falsy values:
                //1. false
                //2. 0
                //3. ''
                //4. NaN
                //5. undefined
                //5. Null

let cartQuantity = 1; //truthy === has value
let num = 0; //falsy === 0 
let variable1; //can not use const for undefined values unless it is declared as undefined
const variable2 = undefined;

if (cartQuantity) {
 console.log('This is truthy'); //Output: This is Truthy
}

if (num === 0 ) {
  console.log('This is Falsy'); //Output: This is Falsy
} 

console.log('text' / 2); //Output: NaN (Not a Number) => text is not a number (Invalid math)

console.log(variable1); //Output: Undefined => the values of the variable is not defined
console.log(variable2); //Output: Undefined => the const is must to declared undefined in order to use it



console.log('========Ternary Opearators=======');
//*1. TERNARY OPERATOR
  //a shortcut for if-esle statement

  const result = true ? 'truthy': 'falsy';
  console.log(result); //Output: truthy

  const age = 0 ? 'truthy': 'falsy';
  console.log(age); //Output: falsy => since the value of age === 0 this is falsy


  //*2. && GUARD OPERATOR/
    //another shortcut for if statement
    console.log('====== && GUARD OPERATOR=======')

    const msg = false && console.log('hello');
    console.log(msg) //Output: false => both must be truthty

    const msg1= 5 && console.log('kamusta'); 
    console.log(msg1); //Output: 'kamusta' => Both tuthy

  //*3. || DEFAULT OPERATPR/ 
    //similar to guard opeator
    // stops early when is satisfy one condition
    console.log('====== || DEFAULT OPERATOR=======');

    const default1 = true || false;
    console.log(default1); //Output: true => already satisfy one condition

    const currency = 'EUR' || 'USD';
    console.log(currency); //Output: 'EUR' => both true so it will display the result EUR

    const currency1 = undefined || 'USD';
    console.log(currency1); //Output: 'USD' => undefined is falsy values so it'll move to the default or next condition


    const default2 = false || 'True pa rin';
    console.log(default2); //Output: 'True pa rin' => already satisfy one condition
    



