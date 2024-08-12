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

bt.insert(10)
bt.insert(5)
bt.insert(11)
bt.insert(3)
bt.insert(7)
// bt.insert(7)



// bt.delete(2)

bt.inOrder(bt.root)


function kthLargest (root, k){
    let count = 0
    let res = null
    function DFS(node) {
        if(!node) return
        DFS(node.right)
        count++
        if (count === k) {
            res = node.value
            return
        }
        DFS(node.left)
    }
    DFS(root)
    return res
}



function height(root) {
    if (!root) return 0
    return Math.max(height(root.left), height(root.right)) + 1
}

function isBalanced(root) {
    if (!root) return true
    let leftHeight = height(root.left)
    let rightHeight = height(root.right)
    return Math.abs(leftHeight - rightHeight) <= 1 && isBalanced(root.left) && isBalanced(root.right)
}


console.log("====k th largest");

console.log(kthLargest(bt.root, 2))

console.log("==== height");

console.log(height(bt.root));

console.log("===balanced");

console.log(isBalanced(bt.root));

function isValidBST(root, min=null, max=null) {
    if (!root) {
        return true
    }
    if (min != null && root.value <= min || max != null && root.value >= max ) {
        return false
    }
    return isValidBST(root.left, min, root.value) && isValidBST(root.right, root.value, max)
}

console.log(isValidBST(bt.root))

