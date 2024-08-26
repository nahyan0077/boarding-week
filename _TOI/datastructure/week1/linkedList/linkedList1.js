class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size
    }
    append(value){
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.size++
    }
    prepend(value){
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }
    print(){
        if (this.isEmpty()) {
            console.log("empty");
        }else{
            let print = ""
            let curr = this.head
            
            while (curr) {
                print += curr.value + " "
                curr = curr.next
            }
            console.log(print);
        }
    }
}

const li = new LinkedList()


li.append(34)
li.append(46)
li.append(7)
li.append(4)

li.prepend(23)
li.prepend(56)

li.print()

// console.log(li.size);
