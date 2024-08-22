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
            console.log("List is empty");
        }else{
            let curr = this.head
            let print = ""
            while (curr) {
                print += curr.value + " "
                curr = curr.next
            }
            console.log(print);
            
        }
    }
    checkPalindrom(head){
        if (!head || !head.next) {
            return true
        }
        let slow = head
        let fast = head
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }
        let prev = null
        let curr = slow
        while (curr) {
            let temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        }
        let p1 = prev
        let p2 = head
        while (p1) {
            if (p1.value !== p2.value) {
                return false
            }
            p1 = p1.next
            p2 = p2.next
        }
        return true
    }
    rmvMid(){
        if (!this.head) {
            return null
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
    addAfter(value, afterVal){
        let node = new Node(value)
        if(afterVal == this.head.value){
            node.next = this.head
            this.head = node
        }else{
            let curr = this.head
            while (curr && curr.value != afterVal) {
                curr = curr.next
            }
            let temp = curr.next
            curr.next = node
            node.next = temp
        }
        this.size++
    }
    addBefore(value, afterVal){
        let node = new Node(value)
        if(afterVal == this.head.value){
            node.next = this.head
            this.head = node
        }else{
            let curr = this.head
            while (curr.next && curr.next.value != afterVal) {
                curr = curr.next
            }
            let temp = curr.next
            curr.next = node
            node.next = temp
        }
        this.size++
    }
    removeDuplicates(){
        if (!this.head) {
            return null
        }
        let curr = this.head
        while (curr) {
            let check = curr.next
            let prev = curr
            while (check) {
                if (check.value == curr.value) {
                    let rmv = prev.next
                    prev.next = rmv.next
                    this.size--
                }else{
                    prev = check
                }
                check = check.next
            }
            curr = curr.next
        }
    }
    checkPalindrom1(){
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
    }
}

const li = new LinkedList()

li.append(2);
li.append(4);
li.append(6);
li.append(7);
li.append(6);
li.append(4);
li.append(2);

li.rmvMid()

li.addAfter(89,6)
li.addBefore(78,4)

li.removeDuplicates()

li.print()

// console.log(li.checkPalindrom(li.head));
console.log(li.checkPalindrom1());


const list1 = new LinkedList()
const list2 = new LinkedList()

list1.append(1)
list1.append(2)
list1.append(5)
list1.append(7)

list2.append(0)
list2.append(4)
list2.append(8)
list2.append(10)


function mergeLinkedList(list1, list2) {
    let li = new LinkedList()
    let li1 = list1.head
    let li2 = list2.head
    while (li1 || li2) {
        if (!li1) {
            li.append(li2.value)
            li2 = li2.next
        }else if(!li2){
            li.append(li1.value)
            li1 = li1.next
        }else{
            if (li1.value < li2.value) {
                li.append(li1.value)
                li1 = li1.next
            }else{
                li.append(li2.value)
                li2 = li2.next
            }
        }
    }
    return li
}


const mergedList = mergeLinkedList(list1, list2)
mergedList.print()

function uncommon(list1, list2) {
    if (!list1 && !list2) {
        return null
    }
    let visitted = new Set()
    let uncommon = new Set()
    let li1 = list1.head
    while (li1) {
        visitted.add(li1.value)
        uncommon.add(li1.value)
        li1 = li1.next
    }
    
    let li2 = list2.head
    while (li2) {
        if (!visitted.has(li2.value)) {
            uncommon.add(li2.value)
        }else{
            uncommon.delete(li2.value)
        }
        li2 = li2.next
    }
    return [...uncommon]
}

console.log(uncommon(list1, list2));


function mergeList(list1, list2) {
    const merged = new LinkedList()
    let curr1 = list1.head
    let curr2 = list2.head
    while (curr1 || curr2) {
        if (!curr1) {
            merged.append(curr2.value)
            curr2 = curr2.next
        }else if (!curr2) {
            merged.append(curr2.value)
            curr1 = curr1.next
        }else{
            if (curr1.value < curr2.value) {
                merged.append(curr1.value)
                curr2 = curr2.next
            }else{
                merged.append(curr2.value)
                curr1 = curr1.next
            }
        }
    }
    return merged.head
}

console.log(mergeList(list1, list2));
