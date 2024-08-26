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
    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(value) {
        let node = new Node(value)
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
            console.log("Empty string");
            return null
        }
        let curr = this.head
        let str = ""
        while (curr) {
            str += ` ${curr.value} -> `
            curr = curr.next
        }
        console.log(str);
    }
    checkPalindrom() {
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
    powerOfTwo() {
        let curr = this.head
        let arr = []
        while (curr) {
            arr.push(curr.value)
            curr = curr.next
        }
        let pow = []
        for (let i = 0; i < arr.length; i++) {
            let x = arr[i]
            while (arr[i] >= 1) {
                arr[i] = arr[i] / 2
                if (Math.trunc(arr[i] !== arr[i])) {
                    break
                }
                if (arr[i] == 1) {
                    pow.push(x)
                }
            }
        }
        return pow
    }
    lastThree() {
        let curr = this.head
        let arr = []
        let first = null
        let second = null
        let third = null
        while (curr) {
            first = second
            second = third
            third = curr
            curr = curr.next
        }
        if (first) arr.push(first.value)
        if (second) arr.push(second.value)
        if (third) arr.push(third.value)
        return arr
    }
    sort(){
        if (this.isEmpty()) {
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
    mergeSorted(list1, list2){
        let dummy = new LinkedList()
        let curr1 = list1.head
        let curr2 = list2.head
        while (curr1 || curr2) {
            if (!curr1) {
                dummy.append(curr2.value)
                curr1 = curr1.next
            }else if(!curr2){
                dummy.append(curr1.value)
                curr1 = curr1.value
            }else{
                if (curr1.value < curr2.value) {
                    dummy.append(curr1.value)
                    curr1 = curr1.next
                }else{
                    dummy.append(curr2.value)
                    curr2 = curr2.next
                }
            }
        }
        return dummy.head
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
                if (curr.value == check.value) {
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
}

const lt = new LinkedList()

lt.append(3)
lt.append(4)
lt.append(8)
lt.append(9)
lt.append(67)


lt.prepend(3)
lt.prepend(4)
lt.prepend(8)
lt.prepend(9)
lt.prepend(67)

// console.log(lt.checkPalindrom())

console.log(lt.lastThree())

lt.sort();

lt.removeDup()

lt.print()

// console.log(lt.powerOfTwo())