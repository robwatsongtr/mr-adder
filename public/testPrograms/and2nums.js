// Program to AND two binary numbers

// Input is binary, output is binary. That's how we roll. 

const andTwoBinaryNumbers = (num1, num2) => {

  let anding = num1 & num2 // bitwise and num1 and num2 

  return anding.toString(2) // output base 2

}



console.log( andTwoBinaryNumbers( 0b110, 0b1111) ) // expected output: 0b0110
