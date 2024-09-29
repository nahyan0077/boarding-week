// ===>> LONGEST PALINDROMIC SUBSTRING

// here we have longest palindromic substr in a string
//So we can use a method of expandingArround here we will expand arround
//a element in a string to both left and right if its same we will expands 
//from the target element to left and right

function LongestPalindromicSubStr(str) {
    let start = 0
    let maxLen = 0
    function expandArround(left ,right) {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            let currLen = right - left + 1
            if(currLen > maxLen){
                start = left
                maxLen = currLen
            }
            left--
            right++
        }
    }
    for(let i = 0; i < str.length; i++){
        expandArround(i, i)
        expandArround(i, i + 1)
    }
    return str.slice(start, start + maxLen)
}

let str = "sdfnahanfsd"

console.log(LongestPalindromicSubStr(str));
