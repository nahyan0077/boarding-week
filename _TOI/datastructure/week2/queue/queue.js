class Queue {
    constructor() {
        this.items = []
        this.size = 0
    }
    isEmpty(){
        return this.size == 0
    }
    enqueue(value){
        this.items.push(value)
        this.size++
    }
    dequeue(){
        if(this.isEmpty())return null
        this.items.pop()
        this.size--
    }
    rmvMid(){
        if(this.isEmpty()) return null
        let mid = Math.floor(this.items.length / 2)
        let temp = []
        let i = 0
        while (i <= mid) {
            temp.push(this.items.shift())
            i++
        }
        temp.pop()
        while (this.items.length) {
            temp.push(this.items.pop())
        }
        this.items = temp
        
    }
    print(){
        if (this.isEmpty()) {
            console.log("queue is emtpy");
            return            
        }else{
            console.log(this.items);
        }
    }
}

const qu = new Queue()

qu.enqueue(32)
qu.enqueue(56)
qu.enqueue(7)
qu.enqueue(342)
qu.enqueue(76)
qu.enqueue(9)
qu.enqueue(67)

qu.rmvMid()

qu.print()