class Node {
    constructor(value){
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
    print(){
        if (this.isEmpty()) {
            console.log("empty...");
            return
        }else{
            let curr = this.head
            let str = ""
            while (curr) {
                str += curr.value + " "
                curr = curr.next
            }
            console.log(str);
            
        }
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
    checkPalindrom(){
        if (!this.head) {
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
    sort(){
        if (!this.head) {
            return null
        }
        let curr = this.head
        while (curr) {
            let check = curr.next
            while (check) {
                if (check.value < curr.value) {
                    [check.value, curr.value] = [curr.value, check.value]
                }
                check = check.next
            }
            curr = curr.next
        }
    }
}

const li = new LinkedList()
const li1 = new LinkedList()

li.append(1)
li.append(2)
li.append(3)
li.append(4)

li1.prepend(1)
li1.prepend(2)
li1.prepend(3)
li1.prepend(4)

// console.log(li.checkPalindrom());
li.sort()
li1.sort()

// li.print()


function mergeLinkedList(list1, list2) {
    const mergeList = new LinkedList()

    while (list1 || list2) {
        if (!list1) {
            mergeList.append(list2.value)
            list2 = list2.next
        }else if (!list2){
            mergeList.append(list1.value)
            list1 = list1.next
        }else{
            if (list1.value < list2.value) {
                mergeList.append(list1.value)
                list1 = list1.next
            }else{
                mergeList.append(list2.value)
                list2 = list2.next
            }
        }
    }
    return mergeList.print()
}

mergeLinkedList(li.head, li1.head)