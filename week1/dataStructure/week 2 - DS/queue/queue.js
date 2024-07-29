class Queue {
    constructor() {
        this.items = []
    }
    enqueue(val){
        this.items.push(val)
    }
    dequeue(){
        if(this.items.length == 0) return null
        return this.items.shift()
    }
    print(){
        if (this.items.length == 0) {
            console.log("queue is empty");
        }
        console.log(this.items);
    }
    rmvMid(){
        if (this.items.length == 0) {
            return null
        }
        let temp = []
        let mid = Math.floor(this.items.length / 2)
        let i = 0
        while (i < mid ) {
            temp.push(this.dequeue())
            i++
        }
        let rmv = this.dequeue()
        while (this.items.length) {
            temp.push(this.dequeue())
        }
        this.items = temp
        temp = []
    }
}

const qu = new Queue()

qu.enqueue(1)
qu.enqueue(2)
qu.enqueue(3)
qu.enqueue(4)
qu.enqueue(5)



qu.rmvMid()

qu.print()