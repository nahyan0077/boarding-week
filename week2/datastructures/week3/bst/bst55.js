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
    insert(value) {
        const node = new Node(value)
        if (this.root == null) {
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
    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }
    deleteNode(root, value) {
        if (!root) {
            return null
        }
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
        if (!root.left) {
            return root.value
        }
        return this.min(root.left)
    }
    levelOrder(root) {
        if (!root) {
            return null
        }
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
    preOrder(root){
        if(root == null) return 
        console.log(root.value);
        this.preOrder(root.left)
        this.preOrder(root.right)
    }
}

const bt = new BST()

bt.insert(43)
bt.insert(6)
bt.insert(42)
bt.insert(68)
bt.insert(76)
bt.insert(26)

// bt.delete(26)
// bt.delete(68)

// bt.levelOrder(bt.root)
bt.preOrder(bt.root)

function kthLargest(root, k) {
    if (!root) return null
    let count = 0
    let res = null
    function DFS(root) {
        if (root) {
            DFS(root.left)
            count++
            if (count == k) {
                res = root.value
                return
            }
            DFS(root.right)
        }
    }
    DFS(root)
    return res
}



console.log("largest", kthLargest(bt.root, 3));


function kthSmallest(root, k) {
    if (!root) {
        return null
    }
    let count = 0
    let res = null
    function DFS(node) {
        if (node) {
            DFS(node.right)
            count++
            if (count == k) {
                res = node.value
                return
            }
            DFS(node.right)
        }
    }
    DFS(root)
    return res
}

console.log("kth smalles",kthSmallest(bt.root, 2));


function height(root) {
    if (!root) {
        return 0
    }
    return Math.max(height(root.left), height(root.right)) + 1
}

console.log("heigt of tree", height(bt.root));

function isBalanced(root) {
    if(!root) return true
    return Math.abs(height(root.left) - height(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
}

console.log("is balanced", isBalanced(bt.root));

function isValidBST(root, min = null, max = null) {
    if(!root) return true
    if (min != null && root.value <= min || max != null && root.value >= max) {
        return false
    }
    return isValidBST(root.left, min, root.value) && isValidBST(root.right, root.value, max)
}


console.log("is valid bst -->",isValidBST(bt.root))


function LCA(root, n1, n2) {
    if(!root) return null
    if (n1 < root.left && n2 < root.left) {
        return LCA(root.left, n1, n2)
    }
    if (n1 > root.right && n2 > root.right) {
        return LCA(root.right, n1, n2)
    }
    return root.value
}

console.log("LCA -->  ",LCA(bt.root, 68,76))