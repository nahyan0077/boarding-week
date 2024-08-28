class Queue {
    constructor() {
        this.stack1 = []
        this.stack2 = []
    }
    enqueue(value){
        this.stack1.push(value)
    }
    dequeue(){
        if (this.stack1.length == 0) {
            return null
        }
        while (this.stack1.length !== 1) {
            this.stack2.push(this.stack1.pop())
        }
        let rmv = this.stack1.pop()
        while (this.stack2.length) {
            this.stack1.push(this.stack2.pop())
        }
        return rmv
    }
}


const qu = new Queue()

qu.enqueue(1)
qu.enqueue(2)
qu.enqueue(3)
qu.enqueue(4)
qu.enqueue(5)

console.log(qu.dequeue())

