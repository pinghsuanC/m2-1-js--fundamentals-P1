// Q13 - FIBONACCI GENERATOR

// The Fibonacci sequence is a sequence of numbers where every value is the sum
// of the previous 2 values.

// It looks like this:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

// Why?

// 13 + 21 = 34
// 8 + 13 =21
// 5 + 8 =13

// See? Every number in the sequence is the result of adding the two numbers to
// the left. The sequence starts with "0, 1", and every number beyond that
// can be calculated by adding the previous 2 numbers.

// Write a program which calculates the 50th number in the fibonacci sequence

// (Correct answer: 12586269025)
// (The numbers get big quickly!)

// n: integer, represents nth number in fib sequence
// n is at least 1. 1th => n=0, 2th => n=1, so the 50th=> n=51
function fib(n){
    if(n<=0){
        return null;    //invalid input
    }
    else if(n===1){
        return 0;       // the 1th fib is 0
    }else if(n===2){
        return 1;       // the 2nd fib is 1
    }else {
        // The previous number      // The one before previous number
        return fib(n-1) + fib(n-2);
    }
}

console.log(fib(51));           // this is incredibly slow, result is 12586269025
