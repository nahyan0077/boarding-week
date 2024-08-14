class maxPrioQue {
    constructor() {
        this.heap = []
    }
    swap(index1, index2){
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }
    heapifyUp(index){
        let parent = Math.floor((index - 1) / 2)
        while (index > 0 && this.heap[parent].priority < this.heap[index].priority ) {
            this.swap(index, parent)
            index = parent
            parent = Math.floor((index - 1)/ 2)
        }
    }
    heapifyDown(index, size){
        let largest = index
        let left = 2 * index + 1
        let right = 2 * index + 2
        if (left < size && this.heap[largest].priority < this.heap[left].priority) {
            largest = left
        }
        if (right < size && this.heap[largest].priority < this.heap[right].priority) {
            largest = right
        }
        if (index != largest) {
            this.swap(index, largest)
            this.heapifyDown(largest, size)
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

const mp = new maxPrioQue()

mp.enqueue(10,3)
mp.enqueue(20,1)
mp.enqueue(30,5)
mp.enqueue(40,2)
mp.enqueue(50,4)

mp.dequeue()

console.log(mp);
