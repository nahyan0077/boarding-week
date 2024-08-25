function revStr(str) {
    let i = 0
    let str1 = ""
    while (i < str.length) {
        str1 += str[str.length - 1 - i]
        i++
    }
    return str1
}

console.log(revStr("nahyan"));

//in recursion

function revStrRecur(str) {
    if (str.length == 0) {
        return ""
    }
    return str[str.length - 1] + revStrRecur(str.slice(0,-1))
}

console.log(revStrRecur("nahyanisaman"));


function reverse(str) {
    let i = str.length - 1
    let str1 = ''
    while (i >= 0) {
        str1 += str[i]
        i--
    }
    console.log(str1);
    
}

reverse("nahyan ny")

function recRev(str) {
    if (str.length == 0) {
        return ""
    }
    return str[str.length - 1] + recRev(str.slice(0, -1))
}

console.log(recRev("nayhan si eman ym"));
