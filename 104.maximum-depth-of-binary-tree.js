import test from 'ava';

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var maxDepth = function(root) {
    if(root===null) return 0;
    var dep = Math.max(maxDepth(root.left) ,  maxDepth(root.right));
    return dep + 1;
};

test('Tree [1,2,3] should return 2', t => {
    var rootNode = new TreeNode();
    rootNode.left = new TreeNode();
    rootNode.right = new TreeNode();
    t.deepEqual(maxDepth(rootNode), 2);
});

test('Tree [1,2,3,4,null,null,null,5] should return 4', t => {
    var rootNode = new TreeNode();
    rootNode.left = new TreeNode();
    rootNode.left.left = new TreeNode();
    rootNode.left.left.left = new TreeNode();
    rootNode.right = new TreeNode();
    t.deepEqual(maxDepth(rootNode), 4);
});