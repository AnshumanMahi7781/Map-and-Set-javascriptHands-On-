

//! Q2.	"Problem:
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1

let str = "abcadeecfb";
let ans = new Map();
// let count = 1;
for (let char of str) {
    if (ans.has(char)) {
       ans.set(char, ans.get(char)+1)
    } else {
        ans.set(char, 1);
    }
}

for(let [key, value] of ans){
    console.log(`${key}=${value}`);
}

