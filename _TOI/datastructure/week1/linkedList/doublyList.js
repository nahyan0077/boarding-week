class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty(){
        return this.size == 0
    }
    append(value){
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
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
            this.head = node
        }
        this.size++
    }
    reverse(){
        if (this.isEmpty()) {
            return null
        }
        let prev = null
        let curr = this.head
        while (curr) {
            //here we are swaping next and prev pointers

            //saving curr.next to next
            let next = curr.next
            //point the curr.next to the prev pointer
            curr.next = prev
            //change the prev pointer to the next
            curr.prev = next

            //moving the prev and next to one more step forward

            //moving the prev to the curr
            prev = curr
            //moving the current to the next
            curr = next
        }

        //pointing the tail to the head
        this.tail = this.head
        //head points back to the prev
        this.head = prev
    }
    reverse1(){
        if (this.isEmpty()) {
            return null
        }
        let curr = this.head
        let prev = null
        while (curr) {
            let next = curr.next
            curr.next = prev
            curr.prev = next

            prev = curr
            curr = next
        }
        this.tail = this.head
        this.head = prev
    }
    
    print(){
        if (this.isEmpty()) {
            console.log("Emptly");
            return
        }
        let curr = this.head
        let str = ""
        while (curr) {
            str += curr.value  + " "
            curr = curr.next
        }
        console.log(str);
        
    }
}

const li = new DoublyLinkedList()

li.append(1)
li.append(2)
li.append(3)
li.append(4)
li.append(5)

li.print()

// li.reverse()

li.reverse1()

li.print()