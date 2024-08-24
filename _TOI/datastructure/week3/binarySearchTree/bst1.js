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
    isEmpty() {
        return this.root == null
    }
    insert(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }
    insertNode(root, node) {
        if (node.value < root.value) {
            if (!root.left) {
                root.left = node
            } else {
                this.insertNode(root.left, node)
            }
        } else {
            if (!root.right) {
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        }
    }
    dfs(root) {
        if (root) {
            this.dfs(root.left)
            console.log(root.value);
            this.dfs(root.right)
        }
    }
    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }
    deleteNode(root, value) {
        if (!root) return null
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if (!root.left && !root.right) {
                return null
            } else if (!root.left) {
                return root.right
            } else if (!root.right) {
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }
    min(root) {
        if (!root.left) return root.value
        return this.min(root.left)
    }
}


const bt = new BST()

bt.insert(23)
bt.insert(75)
bt.insert(3)
bt.insert(76)
bt.insert(83)
bt.insert(12)

bt.delete(3)

bt.dfs(bt.root)

const bt1 = new BST()

bt1.insert(23)
bt1.insert(75)
bt1.insert(3)
bt1.insert(76)
bt1.insert(83)
bt1.insert(12)

function height(root) {
    if(!root) return null
    return Math.max(height(root.left), height(root.right)) + 1
}

console.log("height -->",height(bt.root));


function isBalanced(root) {
    if(!root) return true
    return Math.abs(height(root.left) - height(root.left)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
}

console.log("isbalanced  ", isBalanced(bt.root));



function depthTree(root, value, depth = 0) {
    if(!root) return null
    if(root.value == value) return depth
    if (value < root.value) {
        return depthTree(root.left, value, depth + 1)
    }else{
        return depthTree(root.right, value, depth + 1)
    }
}

console.log("depth  -->  ", depthTree(bt.root, 83));



function isValidBST(root, min = null, max = null) {
    if (!root) {
        return true
    }
    if (min != null && min >= root.value || max != null && max <= root.value) {
        return false
    }
    return isValidBST(root.left, min, root.value) && isValidBST(root.right, root.value, max)
}


console.log("is valid bst  ",isValidBST(bt.root));

function kthLargest(root, k) {
    let res = ''
    let count = 0
    function dfs(node) {
        if(node){
            dfs(node.left)
            count++
            if(count == k){
                res = node.value
                return
            }
            dfs(node.right)
        }
    }
    dfs(root)
    return res
}

console.log("kth largest  ", kthLargest(bt.root, 3));


function LCA(root, n1, n2) {
    if (!root) {
        return null
    }
    if(n1 < root.value && n2 < root.value){
        return LCA(root.left, n1, n2)
    }
    if (n1 > root.value && n2 > root.value) {
        return LCA(root.right, n1, n2)
    }
    return root.value
}

console.log("LCA   ", LCA(bt.root, 12,83));


function leafNode(root) {
    let leaf = []
    function dfs(node) {
        if (node) {
            dfs(node.left)
            if (!node.left && !node.right) {
                leaf.push(node.value)
            }
            dfs(node.right)
        }
    }
    dfs(root)
    return leaf
}

console.log("Leaf nodes  ", leafNode(bt.root));


function checkIdentical(root1, root2) {
    if (!root1 && !root2) {
        return true
    }
    if(!root1 || !root2 || root1.value != root2.value){
        return false
    }
    return checkIdentical(root1.leaf, root2.left) && checkIdentical(root1.right, root2.right)
}

console.log(checkIdentical(bt.root,bt1.root));
