//! Question-1 "Problem:
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb

// Output:
// abcdef"

let str = "abcadeecfb";
let UniqueStr = "";
let StrArr = str.split('');
let UniqueArr = new Set(StrArr);
for(let values of UniqueArr){
    UniqueStr +=values;
}
console.log(UniqueStr); // abcdef