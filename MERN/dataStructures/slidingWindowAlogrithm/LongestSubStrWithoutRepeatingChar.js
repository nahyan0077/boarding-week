// (1) Find the longest substring without repleating characters

function logestSubStrWithoutRepeatChar(s) {
    let set = new Set()
    let left = 0
    let max_len = 0
    let str = ''

    for(let char of s){
        while (set.has(char)) {
            set.delete(s[left])
            left++
        }
        set.add(char)
        max_len = Math.max(max_len, set.size)
        if(set.size == max_len){
            str = [...set].join('')
        }
    }
    return {str, max_len}
}

let str = "mynameisnahyanm"

console.log(logestSubStrWithoutRepeatChar(str));
