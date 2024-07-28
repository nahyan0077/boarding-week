function a(a) {
    return function (b) {
        return function  (c) {
            return a + b + c
        } 
    }
}

console.log(a(2)(3)(4));
