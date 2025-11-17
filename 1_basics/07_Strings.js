const name = "uttam" //constant string
let name2= "phogat"// variable string -> can be changed 

console.log(name + name2) // normal concatenation -> not recommended

// This is the best way for concatenation -> string interpolation
console.log(`my name is ${name} and my surname is ${name2}`)

//one more way to create strings is by using new keyword
const address= new String('Meerut')

console.log(address.length)  
address.charAt(2) //returns character at an index
address.indexOf('e') //returns index of first occurrence of a character

const newString = "   blabla  "
console.log(newString)
console.log(newString.trim()) // remove empty spaces 
console.log(newString.replace(' ','-'))  // replace first first occurence 
console.log(newString.replaceAll(' ','-'))   // replace all occurence

