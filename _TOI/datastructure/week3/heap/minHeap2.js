class MinHeap {
    constructor() {
        this.heap = []
    }
    swap(index1, index2){
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }
    heapifyDown(index, size){
        let small = index
        let left = 2 * index + 1
        let right = 2 * index + 2
        if (left < size && this.heap[small] > this.heap[left]) {
            small = left
        }
        if (right < size && this.heap[small] > this.heap[right]) {
            small = right
        }
        if (index != small) {
            this.swap(index, small)
            this.heapifyDown(small, size)
        }
    }
    heapifyUp(index){
        let parent = Math.floor((index - 1)/2)
        while (index > 0 && this.heap[parent] > this.heap[index]) {
            this.swap(index, parent)
            index = parent
            parent = Math.floor((index - 1) / 2)
        }
    }
    buildHeap(arr){
        this.heap = arr
        let n = this.heap.length
        for(let i = (n/2) - 1; i >= 0; i--){
            this.heapifyDown(i,n)
        }
    }
    heapSort(){
        let n = this.heap.length
        for(let i = n; i > 0; i--){
            this.swap(0,i)
            this.heapifyDown(0,i)
        }
    }
    remove(){
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0,this.heap.length)
    }
    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length - 1)
    }
}

const hp = new MinHeap()

let arr = [2,4,6,3,43,5,87]

hp.buildHeap(arr)

hp.remove()

hp.insert(7)

hp.heapSort()

console.log(hp);

