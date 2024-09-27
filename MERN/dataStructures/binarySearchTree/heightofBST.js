const bt = require('./binarySearchTree');

//to check the height of the BST
function heighOfBST(root) {
    if (!root) {
        return 0
    }
    //get the maximum by going through each left and right subtrees by adding ===>> 1
    return Math.max(heighOfBST(root.left),heighOfBST(root.right)) + 1
}

console.log( "height of tree ===>> ",heighOfBST(bt.root));

// ===>> Checking whether the tree is balanced or not 
// ===>> If the diffrence between the height of left and right subtree is atmost 1 then its balanced

function checkBalanced(root) {
    if (!root) {
        return true
    }
    return Math.abs(heighOfBST(root.left) - heighOfBST(root.right)) <= 1 && checkBalanced(root.left) && checkBalanced(root.right)
}

console.log("is balanced ==>> ",checkBalanced(bt.root));
