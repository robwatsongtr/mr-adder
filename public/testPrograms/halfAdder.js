

const halfAdder = (numA, numB) => {
  if(numA > 1 || numB > 1 ) return undefined
  let sum = numA ^ numB  // do the add with XOR
  let carry = numA & numB // AND for the carry 
  return { carry, sum }
}

const truthTableHalfAdder = () => {
  console.log( 'A: 0, B: 0', halfAdder( 0, 0 ) ) 
  console.log( 'A: 0, B: 1', halfAdder( 0, 1 ) ) 
  console.log( 'A: 1, B: 0', halfAdder( 1, 0 ) ) 
  console.log( 'A: 1, B: 1', halfAdder( 1, 1 ) ) 
}

truthTableHalfAdder()