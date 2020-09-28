// Q12 - PRIME NUMBER GENERATOR

// Write a program that generates a list of all prime numbers between 1 and 200.

// A prime number is a number that is ONLY divisible by 1 and itself.

// 6 -> NOT prime (2 * 3)
// 7 -> PRIME (can only be divided by 1 and 7, no other numbers)
// 12 -> NOT prime (3 * 4, 2 * 6)
// 37 -> PRIME ()

// NOTE: 1 and 2 are both prime numbers.

// EXPECTED OUTPUT: [1, 2, 3, 5, 7, 11, 13, ...]

//program that check whether a number is prime or not
// n: integer, the number to check
// div: the divosor to check, shold be starting with 2.
// assume inputs are all valid type (number)
function isPrime(n, div){

    if(n<0){
        return null; // invalid
    }

    if(n<2){
        return false;   // 0 and 1 is not prime number
    }
    if(n===2){
        return true;
    }

    //check divisable
    if(n%div===0){
        return false;
    }
    // When the square of the number is larger than n, we reach the limit to check 
    //(There is no way we find any number beyond that to be divisable)
    if((div*div)>n){
        return true;
    }

    // check next divisor until true or false is returned.
    return isPrime(n, div+1);
}


//console.log(isPrime(7, 2));
//console.log(isPrime(37, 2));
//console.log(isPrime(168, 2));

//Find all prime numbers in the range
// start, end: integer
// return a list of prime numbers inside the range, both ends inclusive.
function find_prime(start, end){
    prime_list = [];
    for(let n=start; n<=end; n++){
        if(isPrime(n, 2)){
            prime_list.push(n);
        }
    }
    return prime_list;
}

console.log(find_prime(1, 100));