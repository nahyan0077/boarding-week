class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    isEmpty() {
        return this.size == 0
    }
    getSize() {
        return this.size
    }
    prepend(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let curr = this.head
            while (curr.next) {
                curr = curr.next
            }
            curr.next = node
        }
        this.size++
    }
    print() {
        if (this.isEmpty()) {
            console.log("Linked list is Empty...");
            return
        }
        let curr = this.head

        let print = ""
        while (curr) {
            print += curr.value + " "
            curr = curr.next
        }
        console.log(print);
    }

    reverse(){
        if (this.isEmpty()) {
            return null
        }
        let curr = this.head
        let prev = null
        while (curr) {
            let temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        }
        this.head = prev
    }
    reverseIndex(index){
        if (this.isEmpty()) {
            return null
        }
        let curr = this.head
        let prev = null
        let i = 0
        while (curr && i <= index) {
            let temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
            i++
        }
        this.head.next = curr
        this.head = prev
    }
}

const li = new LinkedList()

li.append(1)
li.append(3)
li.append(5)
li.append(6)
li.append(8)

li.print()

li.reverseIndex(2)

li.print()