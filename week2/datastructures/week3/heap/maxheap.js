class Heap {
    constructor() {
        this.heap = []
    }
    swap(index1, index2){
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }
    buildHeap(arr){
        this.heap = arr
        let n = this.heap.length
        for(let i = Math.floor(n/2) - 1; i >= 0 ; i--){
            this.heapifyDown(i,n)
        }
    }
    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length - 1)
    }
    heapifyDown(index, size){
        let large = index
        let left = 2 * index + 1
        let right = 2 * index + 2
        if (left < size && this.heap[left] > this.heap[large]) {
            large = left
        }
        if (right < size && this.heap[right] > this.heap[large]) {
            large = right
        }
        if (index != large) {
            this.swap(index, large)
            this.heapifyDown(large,size)
        }
    }
    heapifyUp(index){
        let parent = Math.floor((index - 1)/2)
        while (parent > 0 && this.heap[parent] < this.heap[index] ) {
            this.swap(parent, index)
            index = parent
            parent = Math.floor((index - 1)/2)
        }
    }
    remove(){
        if (this.heap.length == 0) {
            return null
        }
        let rmv = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0, this.heap.length)
    }

}

const hp = new Heap()

let arr = [5,3,8,1,12,4,9]

hp.buildHeap(arr)
hp.insert(23)

hp.remove()


console.log(hp);


