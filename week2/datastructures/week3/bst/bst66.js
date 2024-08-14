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
            if (!root.right) {
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
            }else if(!root.left){
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
    preOrder(root){
        if (root) {
            this.preOrder(root.left)
            console.log(root.value);
            this.preOrder(root.right)   
        }
    }
}

const bt = new BST()

bt.insert(42)
bt.insert(53)
bt.insert(2)
bt.insert(21)
bt.insert(78)
bt.insert(12)

bt.preOrder(bt.root)


function isValidBST(root, min=null, max=null) {
    if (!root) {
        return true
    }
    if (min != null && root.value < min || max != null && root.value > max) {
        return false
    }
    return isValidBST(root.left, min , root.value) && isValidBST(root.right, root.value, max)
}

console.log(isValidBST(bt.root));


function LCA(root, n1, n2) {
    if (!root) {
        return null
    }
    if (n1 < root.value && n2 < root.value) {
        return LCA(root.left, n1, n2)
    }
    if (n1 > root.value && n2 > root.value ) {
        return LCA(root.right, n1, n2)
    }
    return root.value
}

console.log(LCA(bt.root, 42, 78));


function kthLargest(root, k) {
    let count = 0
    let res
    function dfs(node) {
        if(!node) return
        dfs(node.right)
        count++
        if (count == k) {
            res = node.value
        }
        dfs(node.left)
    }
    dfs(root)
    return res
}

console.log("kth larg",kthLargest(bt.root, 2));

