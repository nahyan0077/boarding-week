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
        }else if (node.value > root.value){
            if (!root.right) {
                root.right = node
            }else{
                this.insertNode(root.right, node)
            }
        }
    }
    delete(value){
        if (this.root == null) {
            return null
        }
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
            }
            if (!root.left) {
                return root.right
            }else if (!root.right){
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
    levelOrder() {
        if (!this.root) {
            return null;
        }

        let queue = [this.root];

        while (queue.length) {
            const curr = queue.shift();
            console.log(curr.value);

            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }
    }
}

const bt = new BST()
const bt1 = new BST()


bt.insert(34)
bt.insert(76)
bt.insert(21)
bt.insert(53)
bt.insert(2)
bt.insert(56)


bt1.insert(34)
bt1.insert(76)
bt1.insert(21)
bt1.insert(25)
bt1.insert(53)
bt1.insert(51)
bt1.insert(2)
bt1.insert(56)

// bt.delete(34)

bt.levelOrder()


function checkIdentical(root1, root2) {
    if(!root1, !root2) return true
    if (!root1 || !root2 || root1.value !== root2.value) {
        return false
    }
    return checkIdentical(root1.left, root2.left) && checkIdentical(root1.right, root2.right)
}

console.log("check identical tree ====>>", checkIdentical(bt.root, bt1.root));


function lowestCommonAncestor(root, n1, n2) {
    if (!root) return null
    if (n1 < root.value && n2< root.value) {
        return lowestCommonAncestor(root.left, n1, n2)
    }
    if (n1 > root.value && n2 > root.value) {
        return lowestCommonAncestor(root.right, n1, n2)
    }
    return root.value
}


console.log("LCA ===>   ",lowestCommonAncestor(bt1.root, 56,51));

