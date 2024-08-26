//Removing a target from a string


function targetString(str, target, i = 0) {
    if (str.length == i) {
        return str
    }
    if (str[i] == target) {
        str = str.replace(str[i], "")
        return targetString(str, target, i)
    }
    return targetString(str, target, i + 1)
}

console.log(targetString("nahyan","a"));
