// function validParntheis(str) {
//     let map = {
//         ')' : '(',
//         '}' : '{',
//         ']' : '['
//     }
//     let stack = []
//     for(let char of str){
//         if (char == '(' || char == '{' || char == '[') {
//             stack.push(char)
//         }else if (stack.length == 0 || stack.pop() != map[char]){
//             return false
//         }
//     }
//     return stack.length == 0
// }

// console.log(validParntheis("{([)]}({[]})"));


function validParntheis(str) {
    let obj = {
        ")" : "(",
        "]" : "[",
        "}" : "{",
    }
    let stack = []

    for(let char of str){
        if(char == '(' || char == '{' || char == '['){
            stack.push(char)
        }else if(stack.length == 0 || stack.pop() != obj[char]){
            return false
        }
    }
    return stack.length == 0

}

console.log(validParntheis("({[]})"));
