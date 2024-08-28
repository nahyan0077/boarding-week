// // write a program to find the number of nodes in a doubly LL


// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//         this.prev = null
//     }
// }

// class DoublyLinkedList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size == 0
//     }
//     getNodes(){
//         return this.size
//     }
//     append(value){
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         }else{
//             let curr = this.head
//             while (curr.next) {
//                 curr = curr.next
//             }
//             curr.next = node
//         }
//         this.size++
//     }
//     print(){
//         if (this.isEmpty()) {
//             console.log("empty");
//             return
//         }else{
//             let curr = this.head
//             let str = ""
//             while (curr) {
//                 str += curr.value + " "
//                 curr = curr.next
//             }
//             console.log(str);

//         }
//     }
//     reverse(){
//         if (this.isEmpty()) {
//             return null
//         }
//         let curr = this.head
//         let prev = null
//         while (curr) {
//             let temp = curr.next
//             curr.next = prev

//             prev = curr
//             curr = temp
//         }
//         this.head = prev
//     }
// }

// const li = new DoublyLinkedList()

// li.append(1)
// li.append(2)
// li.append(3)
// li.append(4)
// li.append(5)

// console.log(li.getNodes())

// li.reverse()

// li.print()


let arr = [3, 5, 2, 56, 65, 78, 32, 75]

function reverse(arr, i = 0) {
    if (Math.floor(arr.length / 2) == i) {
        return arr
    }
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]
    return reverse(arr, i + 1)
}

console.log(reverse(arr));
