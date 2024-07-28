class Node {
    constructor (value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor () {
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
    checkPalindrom(){
        let slow = this.head
        let fast = this.head
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }
        let prev = null
        let curr = slow.next
        while (curr) {
            let temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        }
        slow.next = prev
        let p1 = this.head
        let p2 = slow.next
        while (p2) {
           if (p1.value != p2.value) {
                return false
           } 
           p1 = p1.next
           p2 = p2.next
        }
        return true
    }
    checkPalindrom1(){
        let slow = this.head
        let fast = this.head
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next
        }
        let prev = null
        let curr = slow.next
        while (curr) {
            let temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        }
        slow.next = prev
        let p1 = this.head
        let p2 = slow.next
        while (p2) {
            if (p1.value != p2.value) {
                return false
            }
            p1 = p1.next
            p2 = p2.next
        }
        return true
    }
}

let li = new LinkedList()

li.append(1)
li.append(2)
li.append(3)
li.append(4)
li.append(3)
li.append(2)
li.append(1)

li.print()

console.log(li.checkPalindrom())
console.log(li.checkPalindrom1())

console.log(li.getSize())