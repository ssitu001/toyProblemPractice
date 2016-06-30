binaryAgent.js

// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.

binaryToDecimal = n => {
  n = n.split("");
  let sum = 0;
  let index = 1;

  for (let i = n.length-1; i >=0; i--) {
    sum = sum + parseInt(index*n[i]);
    index *= 2;
  }
  return sum;  
}

codeTochar = code => String.fromCharCode(code);


binaryAgent = str => {
  str = str.split(" ");
  return str.map( binary => binaryToDecimal(binary))
  .map( charCode => codeTochar(charCode))
  .join("");  
};

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") //should return "Aren't bonfires fun!?"