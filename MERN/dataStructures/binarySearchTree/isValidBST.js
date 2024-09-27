const bt = require('./binarySearchTree');

//To check whether its a valid BST we have to check does the 
// BST follow the BST properties

function checkValidBST(root, min = null, max = null) {
    if (!root) {
        return true
    }
    //here checking if the min is > value of root or for the max
    if(min != null && min > root.value && max != null && max < root.value ){
        return false
    }
    //recursively checking for the rest of the roots
    return checkValidBST(root.left) && checkValidBST(root.right)
}

console.log("isValid BST == >> ",checkValidBST(bt.root));
