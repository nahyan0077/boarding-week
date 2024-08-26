class PriorityQueue {
    constructor() {
        this.heap = []
    }
    swap(index1, index2){
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }
    heapifyUp(index){
        let parent = Math.floor((index - 1)/2)
        while (index > 0 && this.heap[parent].priority < this.heap[index].priority) {
            this.swap(index, parent)
            index = parent
            parent = Math.floor((index - 1)/2)
        }
    }
    heapifyDown(index, size){
        let large = index
        let left = 2 * index + 1
        let right = 2 * index + 2
        if (left < size && this.heap[large].priority < this.heap[left].priority) {
            large = left
        }
        if (right < size && this.heap[large].priority < this.heap[right].priority) {
            large = right
        }
        if (index != large) {
            this.swap(index, large)
            this.heapifyDown(large, size)
        }
    }
    enqueue(value, priority){
        this.heap.push({value, priority})
        this.heapifyUp(this.heap.length - 1)
    }
    dequeue(){
        let rmv = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0, this.heap.length)
        return rmv
    }
}


const pq = new PriorityQueue()

pq.enqueue(23,2)
pq.enqueue(12,4)
pq.enqueue(45,1)
pq.enqueue(5,3)
pq.enqueue(9,5)

console.log(pq.dequeue());



console.log(pq)