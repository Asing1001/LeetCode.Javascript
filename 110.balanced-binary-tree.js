import test from 'ava';

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var isBalanced = function(root) {    
    return dfsHeight(root) != -1;    
};

function dfsHeight(root){
    if (root == null) return 0;        
    var leftHeight = dfsHeight (root.left);
    if (leftHeight == -1) return -1;
    var rightHeight = dfsHeight (root.right);
    if (rightHeight == -1) return -1;        
    if (Math.abs(leftHeight - rightHeight) > 1)  return -1;
    return Math.max(leftHeight, rightHeight) + 1;
}

test('level 1 node should return true', t => {
    var rootNode = new TreeNode();
    rootNode.left = new TreeNode();
    rootNode.right = new TreeNode();
    t.true(isBalanced(rootNode));
});

test('leftLv 3 rightLv 1 should return false', t => {
    var rootNode = new TreeNode();
    rootNode.left = new TreeNode();
    rootNode.left.left = new TreeNode();
    rootNode.left.left.left = new TreeNode();
    rootNode.right = new TreeNode();
    t.false(isBalanced(rootNode));
});