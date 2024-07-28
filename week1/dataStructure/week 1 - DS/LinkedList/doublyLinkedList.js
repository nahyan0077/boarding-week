class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size == 0
    }
    getSize(){
        return this.size
    }
    append(value){
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        }else{
            let curr = this.head
            while (curr.next) {
                curr = curr.next
            }
            node.prev = curr
            curr.next = node
        }
        this.size++
    }
    print(){
        if (this.isEmpty()) {
            console.log("list empty");
            return
        }
        let curr = this.head
        let print = ""
        while (curr) {
            print += curr.value + " "
            curr = curr.next
        }
        console.log(print.trim());
    }
}

const li = new LinkedList()

li.append(1)
li.append(2)
li.append(3)
li.append(4)

li.print()

console.log(li.getSize())