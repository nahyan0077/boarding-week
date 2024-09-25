//check palindrom

let str= "malayalam"

function checkPalindrom(str,i=0) {
    if(i >= Math.floor(str.length / 2)) return true
    if(str[i] !== str[str.length - i - 1]){
        return false
    }
    return checkPalindrom(str, i + 1)
}

console.log(checkPalindrom(str));

