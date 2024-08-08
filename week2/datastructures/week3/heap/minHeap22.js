class minHeap {
    constructor() {
        this.heap = []
    }
    swap(index1, index2){
        [this.heap[index1],this.heap[index2]] = [this.heap[index2],this.heap[index1]]
    }
    heapifyUp(index){
        let parent = Math.floor((index - 1) / 2)
        while (index > 0 && this.heap[parent] > this.heap[index] ) {
            this.swap(index, parent)
            index = parent
            parent = Math.floor((index - 1) / 2)
        }
    }
    heapifyDown(index, size){
        let small = index
        let left = 2 * index + 1
        let right = 2 * index + 2
        if (left < size && this.heap[left] < this.heap[small] ) {
            small = left
        }
        if (right < size && this.heap[right] < this.heap[small] ) {
            small = right
        }
        if (index != small) {
            this.swap(index , small)
            this.heapifyDown(small, size)
        }
    }
    buildHeap(arr){
        this.heap = arr
        let n = this.heap.length
        for(let i = Math.floor((n/2) - 1); i >=0; i--){
            this.heapifyDown(i, n)
        }
    }
    heapSort(){
        let n = this.heap.length
        for(let i = n - 1; i > 0; i--){
            this.swap(i,0)
            this.heapifyDown(0,i)
        }
        return this.heap
    }
}

const hp = new minHeap()

let arr = [5,3,8,1,12,4,9]

hp.buildHeap(arr)
console.log(hp);

console.log(hp.heapSort())


