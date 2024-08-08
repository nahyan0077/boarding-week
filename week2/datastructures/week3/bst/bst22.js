class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }
    isEmpty(){
        return this.root == null
    }
    insert(value){
        let node = new Node(value)
        if (this.isEmpty()) {
            this.root = node
        }else{
            this.insertNode(this.root, node)
        }
    }
    insertNode(root, node){
        if (!root) {
            return null
        }
        if (node.value < root.value) {
            if (!root.left) {
                root.left = node
            }else{
                this.insertNode(root.left, node)
            }
        }else{
            if (!root.right) {
                root.right = node
            }else{
                this.insertNode(root.right, node)
            }
        }
    }
    delete(value){
        this.root = this.deleteNode(this.root,value)
    }
    deleteNode(root, value){
        if (!root) {
            return null
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        }else if(value > root.value){
            root.right = this.deleteNode(root.right, value)
        }else{
            if (!root.left && !root.right) {
                return null
            }else if (!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }
    min(root){
        if (!root.left) {
            return root.value
        }
        return this.min(root.left)
    }
    levelOrder(){
        if (!this.root) {
            return null
        }
        let queue = [this.root]
        while (queue.length) {
            const curr = queue.shift()
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }
    preOrder(root){
        if (root) {
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    height(root){
        if (root == null) {
            return 0
        }
        let left = this.height(root.left)
        let right = this.height(root.right)
        return Math.max(left,right) + 1
    }
}

const bt = new BST()

bt.insert(2)
bt.insert(6)
bt.insert(1)
bt.insert(3)
bt.insert(8)
bt.insert(4)

bt.delete(2)

console.log(bt.height(bt.root))
console.log("^^^^^^^^");



bt.levelOrder()
console.log("-----");

bt.preOrder(bt.root)

