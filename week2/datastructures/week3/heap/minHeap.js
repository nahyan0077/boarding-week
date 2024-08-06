class minHeap {
    constructor() {
        this.heap = []
    }
    swap(index1, index2){
        [this.heap[index1],this.heap[index2]] = [this.heap[index2],this.heap[index1]]
    }
    buildHeap(arr){
        this.heap = arr
        let n = this.heap.length
        for(let i = Math.floor((n/2) - 1); i >= 0; i--){
            this.heapifyDown(i,n)
        }
    }
    heapifyDown(index, size){
        let small = index
        let left = 2 * index + 1
        let right = 2 * index + 2
        if (left < size && this.heap[left] < this.heap[small]) {
            small = left
        }
        if (right < size && this.heap[right] < this.heap[small]) {
            small = right
        }
        if (index != small) {
            this.swap(small, index)
            this.heapifyDown(index, size)
        }
    }
    heapifyUp(index){
        let parent = Math.floor((index - 1) / 2)
        while (index > 0 && this.heap[parent] > this.heap[index]) {
            this.swap(parent,index)
            index = parent
            parent = Math.floor((index - 1) / 2)
        }
    }
}

const hp = new minHeap()

let arr = [5,3,8,1,12,4,9]

hp.buildHeap(arr)

console.log(hp);
