class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    isEmpty() {
        return this.size == 0
    }
    append(val) {
        let node = new Node(val)
        if (this.isEmpty()) {
            this.head = node
            node.next = this.head
        } else {
            let curr = this.head
            while (curr.next != this.head) {
                curr = curr.next
            }
            curr.next = node
            node.next = this.head
        }
        this.size++
    }
    isCircular() {
        if (this.isEmpty()) {
            return false
        } 
        let slow = this.head
        let fast = this.head
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
            if (slow === fast) {
                return true
            }
        }
 
        return false
    }
    // print() {
    //     if (this.isEmpty()) {
    //         console.log("list empty");
    //         return
    //     }
    //     let curr = this.head
    //     let print = ""
    //     while (curr) {
    //         print += curr.value + " "
    //         curr = curr.next
    //     }
    //     console.log(print.trim());
    // }
}


const circularLi = new CircularLinkedList()
circularLi.append(1)
circularLi.append(2)
circularLi.append(3)
circularLi.append(4)

console.log(circularLi.isCircular())

// circularLi.print()