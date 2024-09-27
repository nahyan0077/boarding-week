class TreeNode {
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
        const node = new TreeNode(value)
        if (!this.root) {
            this.root = node
        }else{
            this.insert_helper(this.root, node)
        }
    }
    insert_helper(root, node){
        if(node.value < root.value){
            if (!root.left) {
                root.left = node
            }else{
                this.insert_helper(root.left, node)
            }
        }else{
            if (!root.right) {
                root.right = node
            }else{
                this.insert_helper(root.right, node)
            }
        }
    }
    delete(value){
        this.root = this.delete_helper(this.root, value)
    }
    delete_helper(root, value){
        if (!root) {
            return null
        }
        if (value < root.value) {
            root.left = this.delete_helper(root.left, value)
        }else if(value > root.value){
            root.right = this.delete_helper(root.right, value)
        }else{
            if (!root.left && !root.right) {
                return null
            }else if(!root.right){
                return root.left
            }else if(!root.left){
                return root.right
            }
            root.value = this.min(root.right)
            root.right = this.delete_helper(root.right, root.value)
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
    levelOrder(root){
        if(!root) return null
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

bt.insert(23)
bt.insert(56)
bt.insert(37)
bt.insert(13)
bt.insert(43)

bt.delete(13)

// bt.dfs(bt.root)
// bt.levelOrder(bt.root)


module.exports = bt