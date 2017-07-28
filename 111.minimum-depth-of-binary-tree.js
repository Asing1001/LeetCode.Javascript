import test from 'ava';

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function minDepth(root) {
    if (root == null)
        return 0;
    if (root.left != null && root.right != null)
        return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
    else
        return Math.max(minDepth(root.left), minDepth(root.right)) + 1;
}

test('left 2 & right 2 should return 2', t => {
    var rootNode = new TreeNode();
    rootNode.left = new TreeNode();
    rootNode.right = new TreeNode();
    t.is(minDepth(rootNode), 2);
});

test('left 4 & right 2 should return 2', t => {
    var rootNode = new TreeNode();
    rootNode.left = new TreeNode();
    rootNode.left.left = new TreeNode();
    rootNode.left.left.left = new TreeNode();
    rootNode.right = new TreeNode();
    t.is(minDepth(rootNode), 2);
});

test('left 2 & right 1 should return 2', t => {
    var rootNode = new TreeNode();
    rootNode.right = new TreeNode();
    t.is(minDepth(rootNode), 2);
});