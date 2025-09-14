
//*CONCATENATION */
//combining a string with another string or variable

let thing = 'thing';

console.log('some' + 'thing'); // 'something'
console.log(`some${thing}`); // 'something'


//**KNOWING THE DATATYPES */
//using 'typeof' to know the datatype of a variable

console.log(typeof 'hello'); // 'string'
console.log(typeof 3); // 'number'
console.log(typeof true); // 'boolean'
console.log(typeof undefined); // 'undefined'
console.log(typeof null); // 'object' (this is a known quirk in JavaScript)
console.log(typeof {}); // 'object'
console.log(typeof []); // 'object' (arrays are a type of object)
console.log(typeof function(){}); // 'function'
console.log(typeof NaN); // 'number' (NaN stands for Not-a-Number, but its type is number)  

//*TYPE COERCION OR AUTOMATIC CONVERSION*/
//JavaScript automatically converts one data type to another when necessary

console.log('hello' + 3); // 'hello3' (number 3 is coerced to string '3')
console.log('5' + 3); // '53' (number 3 is coerced to string '3')
console.log('5' - 3); // 2 (string '5' is coerced to number 5)


//!EXAMPLE */
//toaster cost: $20.95
//Tshirt cost: $7.99


//first: we  need to translate in into cents or whole number
//second: we need to convert in into dollars
console.log('$' + (2095 + 799) / 100) // '$28.94'


//*OPEATION WITH STRING AND CONCATENATION and BACKTICKS/TEMPLATE LITERALS/INTERPOLATION*/
console.log('Items ('+ (1+1)+'): $' + (2095 + 799) / 100)  //Items (2): $28.94
console.log(`Items (${1+1}): $${(2095+799) / 100}`) //Items (2): $28.94

//**CREATING A STRING */
let str = 'string'; //single qoutes
let strs = "string"; //double quotes
let string = `string`; //backticks or aka template literals

//*ESCAPE CHARACTEER */
console.log("I\'m learning javascript"); //"I'm learning javascript"
console.log('some\ntext') // create a new line: some
                                              //text

console.log(`some 
text`); // Multiline string (backticks): some\ntext
                                            