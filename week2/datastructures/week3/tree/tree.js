class TreeNode {
    constructor(value) {
        this.value = value
        this.children = []
    }
    addNode(node){
        this.children.push(node)
    }
}

const node = new TreeNode(10)
const node1 = new TreeNode(20)
const node2 = new TreeNode(30)
const node3 = new TreeNode(40)

node.addNode(node1)
node.addNode(node2)
node.addNode(node3)

function travese(node) {
    console.log(node.value);
    for(let x of node.children){
        travese(x)
    }
}

travese(node)