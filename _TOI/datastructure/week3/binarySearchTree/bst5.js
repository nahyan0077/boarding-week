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
        if (!this.root) {
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
        }else if (value > root.value){
            root.right = this.deleteNode(root.right, value)
        }else{
            if (!root.right && !root.left) {
                return null
            }else if(!root.right){
                return root.left
            }else if(!root.left){
                return root.right
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
    bfs(root){
        if(!root) return null
        let queue = [root]
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }
}

const bt = new BST()

bt.insert(1)
bt.insert(2)
bt.insert(3)
bt.insert(4)
bt.insert(5)

bt.delete(5)

bt.bfs(bt.root)

function kthLargest(root,k) {
    let count = 0
    const dfs = (node) =>{
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

console.log("kth largest  ",kthLargest(bt.root, 2));


function height(root) {
    if (!root) {
        return 0
    }
    return Math.max(height(root.left), height(root.right)) + 1
}
console.log("height  ",height(bt.root));


function isBalanced(root) {
    if (!root) {
        return true
    }
    return Math.abs(height(root.left)- height(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
}
console.log("is balanced  ", isBalanced(bt.root));

function LCA(root, n1, n2) {
    if (!root) {
        return null
    }
    if(n1 < root.value && n2 < root.value){
        return LCA(root.left, n1, n2)
    }
    if(n1 > root.value && n2 > root.value){
        return LCA(root.right, n1, n2)
    }
    return root.value
}

console.log("lca  ", LCA(bt.root, 3,4));


