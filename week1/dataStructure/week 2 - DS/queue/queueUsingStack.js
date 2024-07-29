class QueueUsingStack {
    constructor() {
        this.stack1 = []
        this.stack2 = []
    }
    enqueue(val){
        this.stack1.push(val)
    }
    dequeue(){
        if (this.stack1.length == 0) {
            return null
        }
        while (this.stack1.length > 1) {
            this.stack2.push(this.stack1.pop())
        }
        let rmv = this.stack1.pop()
        while (this.stack2.length) {
            this.stack1.push(this.stack2.pop())
        }
        return rmv
    }
    print(){
        if (this.stack1.length == 0) {
            console.log("emety queue");
            return
        }
        console.log(this.stack1);
    }
}

const qust = new QueueUsingStack()

qust.enqueue(1)
qust.enqueue(2)
qust.enqueue(3)
qust.enqueue(4)
qust.enqueue(5)

qust.dequeue()

qust.print()