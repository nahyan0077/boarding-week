let s1 = 'cat'
let s2 = 'atc'

function isAnagram(s1, s2) {
    if (s1.length != s2.length) {
        return false
    }
    let count = new Map()

    for(let char of s1){
        count.set(char, (count.get(char) || 0) + 1)
    }

    for(let char of s2){
        if (!count.get(char)) {
            return false
        }
        count.set(char, count.get(char) - 1)
        if (!count.has(char) == 0) {
            count.delete(char)
        }
    }

    return count.size == 0

}

console.log(isAnagram(s1,s2));
