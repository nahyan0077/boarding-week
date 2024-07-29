class Stack {
    constructor() {
        this.items = []
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    push(val){
        this.items.push(val)
        this.size++
    }
    pop(){
        if (this.isEmpty()) {
            return null
        }
        return this.items.pop()
    }
    print(){
        if (this.isEmpty()) {
            console.log("empty stack");
        }
        console.log(this.items);
    }
    maxEle(){
        if (this.isEmpty()) {
            return null
        }
        let max = 0
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] > max) {
                max = this.items[i]
            }  
        }
        return max
    }
    rmvMid(){
        if(this.isEmpty()) return null
        let temp = []
        let mid = Math.floor(this.size / 2)
        let i = 0
        while (i < mid) {
            temp.push(stk.pop())
            i++
        }
        let rmv = stk.pop()
        while (temp.length) {
            stk.push(temp.pop())
        }
        return rmv
    }
    reverse(){
        if(this.isEmpty()) return null
        let stk1 = []
        while (this.items.length) {
            stk1.push(this.pop())
        }
        return stk1
    }
}

const stk = new Stack()
stk.push(1)
stk.push(2)
stk.push(3)
stk.push(4)
stk.push(5)
stk.push(6)
stk.push(7)


console.log(stk.maxEle());

console.log(stk.rmvMid())

console.log(stk.reverse());

stk.print()