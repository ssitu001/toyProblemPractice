isPrime.js

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if ( n % i === 0 ) {
      return false;
    }
  }
  return true;
}

//isPrime(10)

function sumPrimes(num) {
  var primes = [];
  
  for (var i = 2; i <= num; i++) {
    if ( isPrime(i) ) {
      primes.push(i);
    }
  }
  //console.log(primes)
  
  return primes.reduce( (a,b) => a + b, 0);
}

sumPrimes(977)


////Sieve of Eratosthenes Method
