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
            console.log("empty");
        }else{
            let curr = this.head
            let str = ""
            while (curr) {
                str += curr.value + " "
                curr = curr.next
            }
            console.log(str)

        }
    }
    removeAfter(value){
        if (this.isEmpty()) {
            return null
        }
        let curr = this.head
        while (curr && curr.value != value) {
            curr = curr.next
        }
        let rmv = curr.next
        curr.next = rmv.next
        this.size--

    }
    rmvMid(){
        if (this.isEmpty()) {
            return this.head
        }
        let slow = this.head
        let fast = this.head
        let prev = null
        while (fast && fast.next) {
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        let rmv = prev.next
        prev.next = rmv.next
        this.size--
    }
    checkPalindrom(){
        if (this.isEmpty()) {
            return null
        }
        let slow = this.head
        let fast = this.head
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }
        let curr = slow
        let prev = null
        while (curr) {
            let temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        }
        let p1 = prev
        let p2 = this.head
        while (p1) {
            if (p1.value != p2.value) {
                return false
            }
            p1 = p1.next
            p2 = p2.next
        }
        return true
    }
    lastThree(){
        if (this.isEmpty()) {
            return null
        }
        let curr = this.head
        let f = null
        let s = null
        let t = null
        while (curr) {
            f = s
            s = t
            t = curr
            curr = curr.next
        }
        return [f.value, s.value, t.value]
    }
    removeDup(){
        if (this.isEmpty()) {
            return null
        }
        let curr = this.head
        while (curr) {
            let check = curr.next
            let prev = curr
            while (check) {
                if(curr.value == check.value){
                    prev.next = check.next
                    check = prev.next
                    this.size--
                }else{
                    prev = check
                    check = check.next
                }
            }
            curr = curr.next
        }
    }
    sort(){
        if (this.isEmpty()) {
            return null
        }
        let curr = this.head
        while (curr) {
            let check = curr.next
            while (check) {
                if (curr.value >= check.value) {
                    [curr.value, check.value] = [check.value, curr.value]
                }
                check = check.next
            }
            curr = curr.next
        }
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

// li.removeAfter(2)
// li.rmvMid()

// console.log(li.checkPalindrom())

// console.log(li.lastThree());

// li.removeDup()
li.sort()

li.print()

function merge(list1, list2) {
    const li1 = new LinkedList()
    let curr1 = list1
    let curr2 = list2
    while (curr1 || curr2) {
        if (!curr1) {
            li1.append(curr2.value)
            curr2 = curr2.next
        }else if(!curr2){
            li1.append(curr1.value)
            curr1 = curr1.next
        }else{
            if (curr1.value <= curr2.value ) {
                li1.append(curr1.value)
                curr1 = curr1.next
            }else{
                li1.append(curr2.value)
                curr2 = curr2.next
            }
        }
    }
    return li1
}

let mergeList = merge(li.head,li.head)
mergeList.print()

