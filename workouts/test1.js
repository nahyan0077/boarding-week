class MyClass {
    constructor(num) {
        console.log("hello");
        this.arr = new Array(num)
    }
    getData(){
        return "ok bro"
    }
    addEle(i,ele){
        this.arr[i] = ele
    }
}

const last = new MyClass(5)

console.log(last.getData());
console.log(last.addEle(2,10));
console.log(last.addEle(4,66));
console.log(last.addEle(6,45));
console.log(last.arr);
console.log(last.arr.length);


let name = "najinaseef"

let x = name.split('').sort()
console.log(x.join(''));
