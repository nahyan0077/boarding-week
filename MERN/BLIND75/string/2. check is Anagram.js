// === 2. Checing the given two strings are a valid anagrams ====


var isAnagram = function (s, t) {
    let map = new Map()
    //mapping all the letters of a word
    for (let x of s) {
        if (map.has(x)) {
            map.set(x, map.get(x) + 1)
        } else {
            map.set(x, 1)
        }
    }
    //checking all the letters of the next word 
    //if all the letters exists then its anagrams
    for(let x of t){
        if(map.has(x)){
            map.set(x, map.get(x) - 1)
            if(map.get(x) == 0){
                map.delete(x)
            }
        }else{
            return false
        }
    }
    //for a valid anagrm size will be zero
    return map.size === 0
};

let s = "anagram", t = "nagaram"

console.log(isAnagram(s,t));
