const bt = require('./binarySearchTree');

//Here we will get the Kth Largest of the BST
function KthLargest(root,k) {
    let count = 0
    let res
    function dfs(root){
        if (root) {
            dfs(root.right)
            count++
            if(count == k){
                res = root.value
            }
            dfs(root.left)
        }
    }
    dfs(root)
    return res
}

console.log("Kth Largest ==>> " ,KthLargest(bt.root,2));

//==>> Similarly we can find the Kth Smallest amoung them also 
// by switching root.right and root.left