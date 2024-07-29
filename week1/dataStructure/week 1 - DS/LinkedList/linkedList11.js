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
    isEmpty(){
        return this.size == 0
    }
    getSize(){
        return this.size
    }
    append(value){
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        }else{
            let curr = this.head
            while (curr.next) {
                curr = curr.next
            }
            curr.next = node
        }
        this.size++
    }
    prepend(value){
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    print(){
        if (this.isEmpty()) {
            console.log("List is empty");
        }
        let print = ""
        let curr = this.head
        while (curr) {
            print += curr.value + " "
            curr = curr.next
        }
        console.log(print.trim());
    }
    rmvAfter(val){
        if (this.isEmpty()) {
            return null
        }
        let curr = this.head
        while (curr && curr.value != val) {
            curr = curr.next
        }
        if (curr && curr.next) {
            let rmv = curr.next
            curr.next = rmv.next
            this.size--
            return rmv
        }
    }
    rmvBefore(val){
        if (this.isEmpty()) {
            return null
        }
        let prev = null
        let curr = this.head
        while (curr.next && curr.next.value != val) {
            prev = curr
            curr = curr.next
        }
        if (curr.next) {
            
            console.log(prev.value);
            console.log(curr.value);
            let rmv = prev.next
            prev.next = curr.next
            this.size--
            return rmv
        }
    }
}

const list = new LinkedList()

list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)

list.prepend(33)
list.prepend(22)
list.prepend(11)

// list.rmvAfter(1)

list.rmvBefore(33)

console.log(list.getSize())

list.print()