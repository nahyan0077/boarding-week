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


const checkPali = (str) => {
    if (str.length < 2) {
        return true
    }
    if (str[0] !== str[str.length - 1]) {
        return false
    }
    return checkPali(str.slice(1,-1))
}

console.log(checkPali("nayhyan"));