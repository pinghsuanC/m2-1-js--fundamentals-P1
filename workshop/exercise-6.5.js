// Q6.5
// Write a loop that will iterate from 0 to 15.
// For each iteration, it should check whether a number is even or odd
// and display that state along with the number.
// e.g.
// 0 is even
// 1 is odd
// 2 is even
// ...

// many other possibilities here.

for(let n=1; n<16; n++){
    if(n%2===0){
        console.log(n + ' is even.');
    }else{
        console.log(n + ' is odd.');
    }
}

