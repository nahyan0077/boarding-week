class StackUsingQueue {
    constructor() {
        this.queue1 = []
        this.queue2 = []
    }
    push(val) {
        this.queue1.push(val)
    }
    pop() {
        if (this.queue1.length == 0) {
            return null
        }

        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift())
        }
        const rmv = this.queue1.shift()
        while (this.queue2.length) {
            this.queue1.push(this.queue2.shift())
        }

        return rmv
    }
    print() {
        if (this.queue1.length == 0) console.log("Stack is empty...");
        console.log(this.queue1);
    }
}

const stqu = new StackUsingQueue()

stqu.push(1)
stqu.push(2)
stqu.push(3)
stqu.push(4)
stqu.push(5)

console.log(stqu.pop())

stqu.print()