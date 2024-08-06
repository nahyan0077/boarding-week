class maxPrioQue {
    constructor() {
        this.heap = []
    }
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }
    enqueue(value, priority) {
        this.heap.push({ value, priority })
        this.heapifyUp(this.heap.length - 1)
    }
    dequeue() {
        if (this.heap.length == 0) {
            return null
        }
        let rmv = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0, this.heap.length)
        return rmv
    }
    heapifyDown(index, size) {
        let large = index
        let left = 2 * index + 1
        let right = 2 * index + 2
        if (left < size && this.heap[left].priority > this.heap[large].priority) {
            large = left
        }
        if (right < size && this.heap[right].priority > this.heap[large].priority) {
            large = right
        }
        if (index != large) {
            this.swap(index, large)
            this.heapifyDown(large, size)
        }
    }
    heapifyUp(index) {
        let parent = Math.floor((index - 1) / 2)
        while (index > 0 && this.heap[parent].priority < this.heap[index].priority) {
            this.swap(parent, index)
            index = parent
            parent = Math.floor((index - 1) / 2)
        }
    }
}

const mpq = new maxPrioQue()

mpq.enqueue(10, 2)
mpq.enqueue(20, 4)
mpq.enqueue(30, 1)
mpq.enqueue(40, 5)
mpq.enqueue(60, 3)

mpq.dequeue()

console.log(mpq);
