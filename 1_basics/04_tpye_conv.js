let num = "33"
let realNum = Number(num)
console.log(typeof num)
console.log(typeof realNum)
console.table(typeof [num,realNum]) //output - object always

let num1="a34"
let num2=Number(num1)
console.log(typeof num2) // will be connverted to number
console.log( num2) //NaN - not a number will  be  ouutput
//true convertsto 1 and false to 0 in numbers
//strings cant be convertd to numbers - Nan
//empty string-false otherwise true