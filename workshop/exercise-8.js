// Q8
// Write a program that will output the sum of all of the multiples of four
// between 0 and 5000

// ANSWER: the number you should see in the console is 3127500

/* -> using for loop.
let t_2 = 0;
for(let n = 0; n<=7000; n++){
    if(n%4===0){
        t_2=t_2+n;
    }
}
console.log(t_2);*/

/*
a*4 + b*4 + c*4 + d*4 ... = 4*(a+b+...+z) = 4*((a+z)*n/2)
*/
function f(num) {           // somehow this is less efficient than for loop lol, maybe because of the multiplication rather than addition
    //number of multiple of 4
    n_4 = Math.floor(num/4);

    //sum of integers from 1
    s = (n_4 + 1) * n_4 / 2;

    // times 4
    return 4*s;
}

let n=5000;
console.log(f(n));