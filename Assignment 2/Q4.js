function sumOfProducts(n1, n2) {
    let sum = 0;
  
    // Loop until both n1 and n2 are reduced to 0
    while (n1 > 0 || n2 > 0) {
      // get the last digits
      let digit1 = n1 % 10;  // n1 last digit
      let digit2 = n2 % 10;  // n2 last digit
  
      // Adding the product of corresponding digits to the sum
      sum += digit1 * digit2;
  
      // remove the last digit from both numbers
      n1 = Math.floor(n1 / 10);  // number division to remove the last digit
      n2 = Math.floor(n2 / 10);  // number division to remove the last digit
    }
  
    return sum;
  }
  
  
  console.log("Answer is " + sumOfProducts(6, 34));    //  24
  console.log("Answer is " + sumOfProducts(123, 456)); //  32 (3*6 + 2*5 + 1*4 = 18 + 10 + 4 = 32)
  console.log("Answer is " + sumOfProducts(7, 89));    //  63 (7*9 + 0*8 = 63)
  