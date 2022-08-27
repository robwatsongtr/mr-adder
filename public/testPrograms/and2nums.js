// Program to AND two binary numbers

// Input is binary, output is binary. That's how we roll. 

const andTwoBinaryNumbers = (num1, num2) => {

  const a = num1
  const b = num2
  let anding = a & b

  return anding.toString(2)

}



console.log( andTwoBinaryNumbers( 0b110, 0b1111) ) // expected output: 0b0110
