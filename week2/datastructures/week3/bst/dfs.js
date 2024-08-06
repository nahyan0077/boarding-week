class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root == null;
    }

    insert(value) {
        const node = new Node(value);
        if (!this.root) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }

    insertNode(root, node) {
        if (node.value < root.value) {
            if (!root.left) {
                root.left = node;
            } else {
                this.insertNode(root.left, node);
            }
        } else {
            if (!root.right) {
                root.right = node;
            } else {
                this.insertNode(root.right, node);
            }
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if (!root) {
            return null;
        }

        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            if (!root.left && !root.right) {
                return null;
            } else if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            } 
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }

        return root;
    }

    min(root) {
        if (!root.left) {
            return root.value;
        }
        return this.min(root.left);
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
    preOrder(root){
        if (root) {
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if (root) {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }
}

const bst = new BST();

bst.insert(25);
bst.insert(30);
bst.insert(20);
bst.insert(35);
bst.insert(15);
bst.insert(10);
bst.insert(40);

bst.delete(25)

// bst.preOrder(bst.root)
// bst.postOrder(bst.root)
bst.inOrder(bst.root)

// bst.levelOrder();
