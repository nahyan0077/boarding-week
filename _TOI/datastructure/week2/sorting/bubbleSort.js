//time complexity ===>>>  O(n2)
//space complexity ===>>> O(1)


function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[i]){
                [arr[i],arr[j]] = [arr[j],arr[i]]
            }
        }
    }
    return arr    
}

let arr = [32,54,65,7,4,2,6,57,35,23]

console.log(bubbleSort(arr))

function bubble1(arr) {
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[i]) {
                [arr[i],arr[j]] = [arr[j],arr[i]]
            }
        }
    }
    return arr
}

console.log(bubble1(arr))