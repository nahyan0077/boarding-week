class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }
    insert(value){
        const node = new Node(value)
        if(this.root == null){
            this.root = node
        }else{
            this.insertNode(this.root, node)
        }
    }
    insertNode(root, node){
        if (!root.left) {
            root.left = node
        }else if(!root.right){
            root.right = node
        }else{
            return this.insertNode(root.left, node)
        }
    }
    levelOrder(){
        if (!this.root) {
            return null
        }
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

const bt = new BinaryTree()

bt.insert(21)
bt.insert(34)
bt.insert(74)
bt.insert(46)
bt.insert(12)
bt.insert(94)

bt.levelOrder()



function isValidBST(root, min=null, max=null) {
    if (!root) {
        return true
    }
    if (min != null && root.value <= min || max != null && root.value >= max ) {
        return false
    }
    return isValidBST(root.left, min, root.value) && isValidBST(root.right, root.value, max)
}

console.log("is it a valid bst --->  ",isValidBST(bt.root))
