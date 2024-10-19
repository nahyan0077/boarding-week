let arr = [3, 4, 5, 6, 7, 8, 1, 2]

//here we are checking the array is sorted sorted and rotated

function sortedRotated(arr) {
    let n = arr.length
    let countInversion = 0

    for (let i = 0; i < n; i++) {
        if (arr[i] > arr[i + 1]){
            countInversion++
        }
        if (countInversion > 1) {
            console.log("not sorted rotated");
            break
        }
        if(arr[0] < arr[n - 1]){
            return "right"
        }else{
            return "left"
        }
    }
}

console.log(sortedRotated(arr));
                      