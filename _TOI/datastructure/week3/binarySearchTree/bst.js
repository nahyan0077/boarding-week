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
        let node = new Node(value)
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
            this.deleteNode(root.left, value)
        } else if (value > root.value) {
            this.deleteNode(root.right, value)
        } else {
            if (!root.left && !root.right) {
                return null
            } else if (!root.left) {
                return root.right
            } else if (!root.left) {
                return root.left
            }
            root.value = this.max(root.left)
            root.left = this.deleteNode(root.left, root.value)
        }
        return root
    }
    max(root) {
        if (!root.right) {
            return root.value
        }
        return this.max(root.right)
    }
    levelOrder() {
        if (!this.root) return null
        let queue = [this.root]
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

bt.insert(32)
bt.insert(21)
bt.insert(76)
bt.insert(54)
bt.insert(85)

bt.levelOrder()


function isValidBST(root, min = null, max = null) {
    if (!root) {
        return true
    }
    if (min != null && min > root.value || max != null && max < root.value) {
        return false
    }
    return isValidBST(root.left, min, root.value) && isValidBST(root.right, root.value, max)
}

console.log("is valid BST -- >     ",isValidBST(bt.root))


function LCA(root, n1, n2) {
    if (!root) {
        return null
    }
    if (n1 < root.value && n2 < root.value) {
        return LCA(root.left, n1, n2)
    }
    if (n1 > root.value && n2 > root.value) {
        return LCA(root.right, n1, n2)
    }
    return root.value
}

console.log("lowest common ancestor  :--->   ",LCA(bt.root, 85, 54))



function kthLargest(root, k) {
    if(!root) return null
    let res = null
    let count = 0
    function dfs(node) {
        if (node) {
            dfs(node.right)
            count++
            if (count == k) {
                res = node.value
            }
            dfs(node.left)
        }
    }
    dfs(root)
    return res
}


console.log("kth largest --->  " , kthLargest(bt.root, 2));


function height(root) {
    if (!root) {
        return 0
    }
    return Math.max(height(root.left), height(root.right)) + 1
}

console.log("height of tree -->  ",height(bt.root));


function isBalanced(root) {
    if (!root) {
        return true
    }
    return Math.abs(height(root.left) - height(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right) 
}

console.log("is balanced ---> ", isBalanced(bt.root));
