import test from 'ava';

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var findTarget = function(root, k) {
    var set = {};
    var result = traversal(root);
    function traversal(root){
        if(!root) return false;
        if(set[root.val]){
            return true
        }else{
            set[k-root.val] = true;    
            return traversal(root.left) || traversal(root.right);            
        }
    }
    return result;
};

test('Tree [5,3,6,2,4,null,7] should return true', t => {
    var rootNode = new TreeNode(5);
    rootNode.left = new TreeNode(3);
    rootNode.left.left = new TreeNode(2);
    rootNode.left.right = new TreeNode(4);
    rootNode.right = new TreeNode(6);    
    rootNode.right.right = new TreeNode(7);
    t.true(findTarget(rootNode, 9));
});