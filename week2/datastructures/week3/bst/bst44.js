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
    insert(value){
        const node = new Node(value)
        if (this.root == null) {
            this.root = node
        }else{
            this.insertNode(this.root, node)
        }
    }
    insertNode(root, node){
        if (node.value < root.value) {
            if (!root.left) {
                root.left = node
            }else{
                this.insertNode(root.left, node)
            }
        }else{
            if(!root.right){
                root.right = node
            }else{
                this.insertNode(root.right, node)
            }
        }
    }
    delete(value){
        this.root = this.deleteNode(this.root, value)
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
            }else if ( !root.left ){
                return root.right
            }else if(!root.right) {
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

    inOrder(root){
        if (root) {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
}



const bt = new BST()

bt.insert(1)
bt.insert(2)
bt.insert(3)
bt.insert(4)
bt.insert(5)

bt.delete(2)

bt.inOrder(bt.root)

