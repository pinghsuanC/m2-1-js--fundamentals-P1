// Q9
// Write a program that goes through every number between 1 and 100, and follows the following rules:
//   - If the number is divisible by 3 (eg. 6), print "Fizz"
//   - If the number is divisible by 5 (eg. 10), print "Buzz"
//   - If the number is divisible by 3 AND 5 (eg. 15), print "FizzBuzz"
//   - For all other numbers, print the number itself.

// e.g.
//
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// ...

function f(start, end){
    for(let n=start; n<=end; n++){
        if(n%3===0 && n%5===0){
            console.log("FizzBuzz");
        }else if(n%5===0){
            console.log("Buzz");
        }else if(n%3===0){
            console.log("Fizz");
        }else{
            console.log(n);
        }
    }
}

console.log(f(1, 100));


