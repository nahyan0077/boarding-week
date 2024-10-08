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
        let small = index
        let left = 2 * index + 1 
        let right = 2 * index + 2 
        if (left < size && this.heap[small] > this.heap[left]) {
            small = left
        }
        if (right < size && this.heap[small] > this.heap[right]) {
            small = right
        }
        if (small != index) {
            this.swap(small, index)
            this.heapifyDown(small, size)
        }
    }
    buildHeap(arr){
        this.heap = arr
        let n = this.heap.length
        for(let i = Math.floor((n/2)-1); i >= 0; i--){
            this.heapifyDown(i, n)
        }
    }
    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length - 1)
    }
    remove(){
        let rmv = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0,this.heap.length - 1)
        return rmv
    }
    heapSort(){
        let n = this.heap.length
        for(let i = n - 1; i > 0; i--){
            this.swap(0,i)
            this.heapifyDown(0,i)
        }
    }
}

const hp = new minHeap()

let arr = [5,3,8,1,12,4,9]

hp.buildHeap(arr)
hp.remove()

hp.heapSort()

console.log(hp);
