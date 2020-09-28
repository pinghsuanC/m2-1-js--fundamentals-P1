// Q10
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

let symbol = "#";
let line = symbol;
for(let n = 0; n<7; n++){
    console.log(line);
    line+=symbol;
}
