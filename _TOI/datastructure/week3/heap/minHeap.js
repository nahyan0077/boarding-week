class minHeap {
    constructor() {
        this.heap = []
    }
    swap(index1, index2){
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }
    heapifyUp(index){
        let parent = Math.floor((index - 1)/2)
        while (index > 0 && this.heap[parent] > this.heap[index]) {
            this.swap(index, parent)
            index = parent
            parent = Math.floor((index - 1) / 2)
        }
    }
    heapifyDown(index, size){
        let smallest = index
        let left = 2 * index + 1
        let right = 2 * index + 2
        if (left < size && this.heap[smallest] > this.heap[left]) {
            smallest = left
        }
        if (right < size && this.heap[smallest] > this.heap[right]) {
            smallest = right
        }
        if (index != smallest) {
            this.swap(index, smallest)
            this.heapifyDown(smallest, size)
        }
    }
    buidHeap(arr){
        this.heap = arr
        let n = this.heap.length
        for(let i = Math.floor((n/2)-1); i >= 0; i--){
            this.heapifyDown(i,n)
        }
    }
}

const hp = new minHeap()

let arr = [4,56,3,7,3,78,98,42]

hp.buidHeap(arr)

console.log(hp);
