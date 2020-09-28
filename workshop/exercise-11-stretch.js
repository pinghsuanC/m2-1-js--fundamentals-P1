// Q11
// Write a program that creates a string that represents an 8×8 grid,
// using newline characters to separate lines. At each position of the grid
// there is either an "_" or a "#" character. The characters should form a chessboard.

// #_#_#_#_     1
// _#_#_#_#
// #_#_#_#_     3
// _#_#_#_#
// #_#_#_#_     5
// _#_#_#_#
// #_#_#_#_     7
// _#_#_#_#


// The program (try to generalize:D)
function f(sym1, sym2, width){
    let d = [sym1, sym2];
    let l_o="";
    let l_e="";
    let r = "";

    if(width<1){
        return r;
    }

    //get the lines
    for(let n = 0; n<width; n++){
        //odd line
        l_o+=d[n%2];
        //even line
        l_e+=d[(n+1)%2];
    }

    l_o+="\n";
    l_e+="\n";
    let d_l = [l_e, l_o];

    // get the string
    for(let n = 0; n<width; n++){
        r+=d_l[n%2];
    }

    return r;
}

use function
let sym_1 = "#";
let sym_2 = "_";
console.log(f(sym_1, sym_2, 8));