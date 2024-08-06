class TreeNode {
    constructor(value) {
        this.value = value
        this.children = []
    }
    addChild(node){
        this.children.push(node)
    }
}

const tr = new TreeNode(10)
const tr1 = new TreeNode(20)
const tr2 = new TreeNode(30)

tr.addChild(tr1)
tr.addChild(tr2)

console.log(tr);

