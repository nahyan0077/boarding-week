// function checkPalindrom(str) {
//     if (str.length <= 1) {
//         return true
//     }
//     if (str[0] != str[str.length - 1]) {
//         return false
//     }
//     return checkPalindrom(str.slice(1,-1))
// }

// console.log(checkPalindrom("nahyan"));
// console.log(checkPalindrom("malayalam"));


// function checkPalindrom(str) {
//     if (str.length <= 1) {
//         return true
//     }
//     if(str[0] != str[str.length - 1]){
//         return false
//     }
//     return checkPalindrom(str.slice(1,-1))
// }

// console.log(checkPalindrom("nahyan"));
// console.log(checkPalindrom("malayalam"));



function checkPalindrom(str) {
    if (str.length <= 1) {
        return true
    }
    if (str[0] !== str[str.length - 1]) {
        return false
    }
    return checkPalindrom(str.slice(1,-1))
}

console.log(checkPalindrom("nahyan"));
console.log(checkPalindrom("malayalam"));



function checkPalindrom2(str) {
    if (str.length <= 0) {
        return true
    }
    if (str[0] != str[str.length - 1]) {
        return false
    }
    return checkPalindrom2(str.slice(1,-1))
}

console.log(checkPalindrom2("nahyhan"));
