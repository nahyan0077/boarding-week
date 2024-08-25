class MaxHeap {
    constructor() {
        this.heap = []
    }
    swap(index1, index2){
        [this.heap[index1],this.heap[index2]] = [this.heap[index2],this.heap[index1]]
    }
    heapifyUp(index){
        let parent = Math.floor((index - 1) / 2)
        while (index > 0 && this.heap[parent] < this.heap[index]) {
            this.swap(parent, index)
            index = parent
            parent = Math.floor((index - 1)/ 2)
        }
    }
    heapifyDown(index, size){   
        let large = index
        let left = 2 * index + 1
        let right = 2 * index + 2
        if (left < size && this.heap[large] < this.heap[left]) {
            large = left
        }
        if (right < size && this.heap[large] < this.heap[right]) {
            large = right
        }
        if (index != large) {
            this.swap(index, large)
            this.heapifyDown(large, size)
        }
    }
    buildHeap(arr){
        this.heap = arr
        let n = this.heap.length
        for(let i = Math.floor((n/2)-1); i >= 0; i--){
            this.heapifyDown(i, n)
        }
    }
    remove(){
        if (!this.heap.length) {
            return null
        }
        let rmv = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0, this.heap.length)
        return rmv
    }
    heapSort(){
        let n = this.heap.length
        for(let i = n - 1; i >= 0; i--){
            this.swap(i,0)
            this.heapifyDown(0,i)
        }
    }
}

const hp = new MaxHeap()

let arr = [1,2,4,6,3,6,3,56]

hp.buildHeap(arr)

hp.remove()

hp.heapSort()

console.log(hp)