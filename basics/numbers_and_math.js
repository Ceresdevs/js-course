//Numbers and Math

//*OPERATIONS

2+2 //addition
5-3 //subtraction
4*2 //multiplication
8/2 //division
10%3 //modulus (remainder)
2**3 //exponent

//*OPERATOR PRECEDENCE
( ) //Highest precedence
* / //higher precedence
+ - //lower precedence


//!EXAMPLE

2 + 3 * 4 //14
(2 + 3) * 4 //20+
(20.95 + 7.99 * 2) * 0.1 //3.693


//Numbers
2,3,4 //integers
2.5, 3.14 //floats (decimals)

//when working with money, do the calucalation in cents (whole numbers) to avoid floating point precision issues
20.95 //dollars
2095 //cents

//!EXAMPLE
//*TOFIX FLOATING POINT PRECISION
//1. Multiply to convert to whole numbers, then divide the result
20.95 + 7.99 // 28.939999999999998
(2095 + 799) / 100 // 28.94
//or for more dynamic approach
(20.95 * 100 + 7.99 * 100) / 100 // 28.94


//calculate the inner brackets first
((2095 + 799)  * 0.1) / 100 // 2.894

//*ROUND A NUMBER
Math.round(2.5) //3
Math.round(2.4) //2

Math.round((2095 + 799)  * 0.1) / 100 //2.89