
let ans = new Map();

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

