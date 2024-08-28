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
            if (!root.right && !root.left) {
                return null
            }else if(!root.left){
                return root.right
            }else if(!root.left){
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
    dfs(root){
        if (root) {
            this.dfs(root.left)
            console.log(root.value);
            this.dfs(root.right)
        }
    }
    bfs(root){
        if (!root) {
            return null
        }
        let queue = [root]
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
}


const bt = new BST()

bt.insert(1)
bt.insert(2)
bt.insert(3)
bt.insert(4)
bt.insert(5)

// bt.delete(1)


bt.dfs(bt.root)

bt.bfs(bt.root)

function height(root) {
    if (!root) {
        return 0
    }
    return Math.max(height(root.left), height(root.right)) + 1
}

console.log("height   :",height(bt.root));

function isBalanced(root) {
    if (!root) {
        return true
    }
    return Math.abs(height(root.left) - height(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
}


console.log("is bala  :",isBalanced(bt.root));


function LCA(root, n1, n2) {
    if (!root) {
        return null
    }
    if (n1 < root.value && n2 < root.value) {
        return LCA(root.left, n1, n2)
    }
    if (n1 > root.value && n2 < root.value) {
        return LCA(root.right, n1, n2)
    }
    return root.value
}

console.log("lca   : ",LCA(bt.root, 3, 4));


function leafNode(root) {
    let res = []
    function dfs(node) {
        if (node) {
            dfs(node.left)
            if (!node.left && !node.right) {
                res.push(node.value)
            }
            dfs(node.right)
        }
    }
    dfs(root)
    return res
}

console.log("leaf   :", leafNode(bt.root));

function checkIdentical(root1, root2) {
    if (!root1 && !root2) {
        return true
    }
    if (!root1 || !root2 || root1.value != root2.value) {
        return false
    }
    return checkIdentical(root1.left, root2.left) && checkIdentical(root2.right, root1.right)
}

console.log("check idnetical  :",checkIdentical(bt.root,bt.root));

function isValidBST(root, min = null, max = null) {
    if (!root) {
        return true
    }
    if (min != null && min <= root.left || max != null && max >= root.right) {
        return false
    }
    return isValidBST(root.left, min, root.value) && isValidBST(root.right, root.value, max)
}

console.log("valid bst   : ", isValidBST(bt.root));


function depthOfNode(root, value, depth = 0) {
    if (!root) {
        return null
    }
    if (root.value == value ) {
        return depth
    }
    if (value < root.value) {
        return depthOfNode(root.left, value, depth + 1)
    }else{
        return depthOfNode(root.right, value, depth + 1)
    }
}

console.log("depth   :",depthOfNode(bt.root, 2));
