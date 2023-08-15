
let str = "abcadeecfb";
let UniqueStr = "";
let StrArr = str.split('');
let UniqueArr = new Set(StrArr);
for (let values of UniqueArr) {
    UniqueStr += values;
}

console.log(UniqueStr); // abcdef