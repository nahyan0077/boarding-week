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
}


const li = new LinkedList()

li.append(1)
li.append(2)
li.append(3)
li.append(4)



li.print()
