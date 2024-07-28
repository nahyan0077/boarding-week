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
    insert(value, index) {
        if (index < 0 || index > this.size) {
            console.log("out of bound");
            return
        }
        let node = new Node(value)
        if (index == 0) {
            this.prepend(value)
        } else if (index == this.size) {
            this.append(value)
        } else {
            let curr = this.head
            let i = 0
            while (i < index - 1) {
                curr = curr.next
                i++
            }
            node.next = curr.next
            curr.next = node
            this.size++
        }
    }
    removeFromIndex(index) {
        if (index < 0 || index > this.size) {
            return null
        } else if (this.isEmpty()) {
            return null
        } else if (index == 0) {
            this.head = this.head.next
        } else {
            let curr = this.head
            let i = 0
            while (i < index - 1) {
                curr = curr.next
                i++
            }
            let rmv = curr.next
            curr.next = rmv.next
        }
        this.size--
    }
    removeValue(value) {
        if (this.head.value == value) {
            this.removeFromIndex(0)
            return
        }
        let prev = null
        let curr = this.head
        while (curr && curr.value != value) {
            prev = curr
            curr = curr.next
        }
        if (curr) {
            prev.next = curr.next
            this.size--
        }
    }
    reverse() {
        if (this.isEmpty()) {
            console.log("cant reverse its empty");
            return
        }
        let prev = null
        let curr = this.head
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
    rmvMid() {
        if (this.isEmpty()) {
            return
        } else if (this.size == 1) {
            this.removeFromIndex(0)
        }
        let prev = null
        let slow = this.head
        let fast = this.head
        while (fast && fast.next) {
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        prev.next = slow.next
        this.size--
    }
    sort() {
        if (this.isEmpty() || this.size == 1) {
            return
        }
        let curr = this.head
        while (curr) {
            let check = curr.next
            while (check) {
                if (curr.value > check.value) {
                    [curr.value, check.value] = [check.value, curr.value]
                }
                check = check.next
            }
            curr = curr.next
        }
    }
    removeDup(){
        if (this.isEmpty() || this.size == 1) {
            return
        }
        let curr = this.head
        while (curr) {
            let check = curr.next
            let prev = curr
            while (check) {
                if (check.value == curr.value) {
                    prev.next = check.next
                    check = prev.next
                    this.size--
                }else{
                    prev = check
                }
                check = check.next
            }
            curr = curr.next
        }
    }
}


const linkedLIst = new LinkedList()

linkedLIst.prepend(23)
linkedLIst.prepend(45)
linkedLIst.prepend(45)
linkedLIst.prepend(68)
linkedLIst.prepend(52)
linkedLIst.prepend(36)

linkedLIst.append(1)
linkedLIst.append(2)
linkedLIst.append(3)
linkedLIst.append(4)
linkedLIst.append(4)
linkedLIst.append(5)

// linkedLIst.insert(100,6)
// linkedLIst.insert(200,0)

// linkedLIst.insert(188,3)

// linkedLIst.removeFromIndex(0)
// linkedLIst.removeFromIndex(3)
// linkedLIst.removeFromIndex(34)
// linkedLIst.removeFromIndex(6)

// linkedLIst.removeValue(100)
// linkedLIst.removeValue(3)
// linkedLIst.removeValue(1)

linkedLIst.reverse()

// linkedLIst.rmvMid()

linkedLIst.sort()

linkedLIst.removeDup()

linkedLIst.print()

console.log(linkedLIst.getSize())
console.log(linkedLIst.isEmpty())

