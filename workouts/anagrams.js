let a = "catt"
let b = "tact"

let obj = {}

function checkAnagrams(a,b){

    if (a.length !== b.length) return false;

    for (let char of a) {
        if (obj[char]) {
            obj[char] = obj[char] + 1
        } else {
            obj[char] = 1
        }
    }

    for (let char of b) {
        if (obj[char]) {
            obj[char] = obj[char] - 1
            if (obj[char] == 0) {
                delete obj[char]
            }
        } else {
            return false
        }
    }
    return Object.keys(obj).length == 0

}

console.log(checkAnagrams(a,b));
