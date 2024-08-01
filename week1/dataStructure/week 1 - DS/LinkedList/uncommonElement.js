class Node {
    constructor(value){
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
}

let l1 = new LinkedList()
let l2 = new LinkedList()

l1.append(1)
l1.append(5)
l1.append(3)
l1.append(78)
l1.append(2)


l2.append(1)
l2.append(2)
l2.append(4)
l2.append(34)
l2.append(2)
l2.append(3)

console.log(l1);
console.log(l1.head);



// function uncommon(list1, list2) {
//     let l1 = list1.head
//     let l2 = list2.head
//     let uncommon = new Set()
//     let visitted = new Set()
//     while (l1) {
//         uncommon.add(l1.value)
//         visitted.add(l1.value)
//         l1 = l1.next
//     }
//     while (l2) {
//         if (visitted.has(l2.value)) {
//             uncommon.delete(l2.value)
//         }else{
//             uncommon.add(l2.value)
//             visitted.add(l2.value)
//         }
//         l2 = l2.next
//     }
//     console.log( [...uncommon])
//     return
// }   

// uncommon(l1,l2)

function uncommon1(list1, list2) {
    let l1 = list1.head
    let l2 = list2.head
    let common = new Set()
    let visitted = new Set()
    while (l1) {
        common.add(l1.value)
        visitted.add(l1.value)
        l1 = l1.next
    }
    while (l2) {
        if (visitted.has(l2.value)) {
            common.delete(l2.value)
        }else{
            visitted.add(l2.value)
            common.add(l2.value)
        }
        l2 = l2.next
    }
    return common
}

console.log(uncommon1(l1,l2))