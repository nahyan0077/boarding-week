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
        return this.size === 0
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
            return
        }else{
            let curr = this.head
            let str = ""
            while (curr) {
                str += curr.value + ' => '
                curr = curr.next
            }
            console.log(str.slice(0,str.length - 4));
        }
    }
    removeMid(){
        if (this.isEmpty()) {
            return
        }else{
            let slow = this.head
            let fast = this.head
            let prev = null
            while (fast && fast.next) {
                prev = slow
                slow = slow.next
                fast = fast.next.next
            }
            prev.next = slow.next
            this.size--
        }
    }
    reverse(){
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
    checkPalindrom(){
        let slow = this.head
        let fast = this.head
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }
        let prev = null
        while (slow) {
            let temp = slow.next
            slow.next = prev
            prev = slow
            slow = temp
        }
        let p1 = prev
        let p2 = this.head
        while (p2.next) {
            if(p1.value != p2.value){
                console.log(false);
                return
            }
            p1 = p1.next
            p2 = p2.next
        }
        console.log(true);
        return
    }
}


const li = new LinkedList()

li.append(1)
li.append(2)
li.append(3)
li.append(4)
li.append(5)

li.prepend(1)
li.prepend(2)
li.prepend(3)
li.prepend(4)
li.prepend(5)



// li.removeMid()

// li.reverse()

li.checkPalindrom()

li.print()
