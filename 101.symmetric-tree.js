import test from 'ava';

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var isSymmetric = function (root) {
    return isMirror(root, root);
};

function isMirror(t1, t2) {
    if (t1 == null && t2 == null) return true;
    if (t1 == null || t2 == null) return false;
    return t1.val == t2.val && isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left)
}

test('Tree [1,2,2] should return true', t => {
    var rootNode = new TreeNode(1);
    rootNode.left = new TreeNode(2);
    rootNode.right = new TreeNode(2);
    t.true(isSymmetric(rootNode));
});

test('Tree [1,2,3,4,null,null,null,5] should return false', t => {
    var rootNode = new TreeNode(1);
    rootNode.left = new TreeNode(2);
    rootNode.left.left = new TreeNode(3);
    rootNode.left.left.left = new TreeNode(4);
    rootNode.right = new TreeNode(5);
    t.false(isSymmetric(rootNode));
});