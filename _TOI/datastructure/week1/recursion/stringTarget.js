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


function StringTarget1(str, target, i = 0) {
    if (i == str.length) {
        return str
    }
    if (str[i] == target) {
        str = str.replace(str[i],"")
        return StringTarget1(str, target, i)
    }
    return StringTarget1(str, target, i + 1)
}

console.log(StringTarget1("nahdyadn","d"));
