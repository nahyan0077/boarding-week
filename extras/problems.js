let str = "hello"

function deleteChar(str, char , i = 0) {
    if (str.length == i) {
        return str
    }
    if (str[i] == char) {
        str = str.replace(char, "")
        return deleteChar(str, char, i)
    }
    return deleteChar(str, char, i + 1)
}

console.log(deleteChar(str, "l"));


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function oddDelete(arr, i = 0) {
    if (arr.length = i) {
        return arr
    }
    if(arr[i] % 2 != 0){
        arr = arr.slice(0,i).concat(arr.slice(i + 1))
        return oddDelete(arr, i )
    }
    return oddDelete(arr, i + 1 )
}

console.log(oddDelete(arr));