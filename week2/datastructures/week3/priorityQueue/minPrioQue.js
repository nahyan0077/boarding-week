class minPrioQue {
    constructor() {
        this.heap = []
    }
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }
    enqueue(value, priority){
        this.heap.push({value, priority})
        this.heapifyUp(this.heap.length - 1)
    }
    dequeue(){
        let rmv = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0, this.heap.length)
    }
    heapifyUp(index){
        let parent = Math.floor((index - 1) / 2)
        while (index > 0 && this.heap[parent].priority > this.heap[index].priority) {
            this.swap(parent,index)
            index = parent
            parent = Math.floor((index - 1) / 2)
        }
    }
    heapifyDown(index, size){
        let small = index
        let left = 2 * index + 1
        let right = 2 * index + 2
        if (left < size && this.heap[left].priority < this.heap[small].priority) {
            left = small
        }
        if (right < size && this.heap[right].priority < this.heap[small].priority) {
            right = small
        }
        if (index != small) {
            this.swap(index, small)
            this.heapifyDown(small, size)
        }
    }
}

const mpq = new minPrioQue()

mpq.enqueue(10, 2)
mpq.enqueue(20, 4)
mpq.enqueue(30, 1)
mpq.enqueue(40, 5)
mpq.enqueue(60, 3)

mpq.dequeue()

console.log(mpq);