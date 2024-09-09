let nestedObject = { a: 1, b: { c: 2, a: 3, d: { a: 4 } } };

function getElements(nest) {
    let res = []
    function recurse(nest) {
        let y = Object.values(nest)
        for(let x of y){
            if (typeof x === "number") {
                res.push(x)
            }else{
                recurse(x)
            }
        }
    }
    recurse(nest)
    return res
}

console.log(getElements(nestedObject))
