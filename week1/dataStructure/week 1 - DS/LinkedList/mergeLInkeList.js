class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor (){
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

}

const li = new LinkedList()

li.append(2)
li.append(3)
li.append(5)

const li1 = new LinkedList()

li1.append(1)
li1.append(2)
li1.append(5)
li1.append(7)

console.log(li.getSize())
console.log(li1.getSize())

const mergeLinkedList = (list1, list2) => {
    const newList = new LinkedList()
    l1 = list1.head
    l2 = list2.head
    while (l1 || l2) {
        if (!l2) {
            newList.append(l1.value)
            l1 = l1.next
        }else if(!l1){
            newList.append(l2.value)
            l2 = l2.next
        }else{
            if (l1.value < l2.value) {
                newList.append(l1.value)
                l1 = l1.next
            }else{
                newList.append(l2.value)
                l2 = l2.next
            }
        }
    }
    return newList
}

mergeLinkedList(li, li1).print()