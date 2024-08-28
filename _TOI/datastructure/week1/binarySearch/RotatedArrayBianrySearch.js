
let arr = [1,2,3,4,5,6,7,8,9]

function rotateArrayLeft(arr,k) {
    let i = 0
    while (i != k) {
        let shift = arr.shift()
        arr.push(shift)
        i++
    }
    return arr
}

console.log(rotateArrayLeft(arr,7));





function RotatedArrayBinrySrch(arr, target) {
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right)/2)
        if (arr[mid] == target) {
            return mid
        }

        //check if left portion is sorted
        if (arr[left] <= arr[mid]) {
            if (target >= arr[left] &&  target <= arr[mid]) {
                right = mid - 1
            }else{
                left = mid + 1
            }

        //check if right portion is sorted
        }else{
            if (target <= arr[right] && target >= arr[mid]) {
                left = mid + 1
            }else{
                right = mid - 1
            }
        }
    }
    return -1
}



console.log(RotatedArrayBinrySrch(arr, 6));
