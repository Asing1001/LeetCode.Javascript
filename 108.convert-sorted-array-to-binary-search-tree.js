import test from 'ava';

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var sortedArrayToBST = function (nums) {    
    if(nums.length ===0) return null;
    return createTree(nums, 0, nums.length-1);
};

function createTree(nums, left, right) {
    if(left>right) return null
    var mid = Math.floor((left + right) / 2);    
    var node = new TreeNode(nums[mid]);    
    node.left = createTree(nums, left, mid-1);
    node.right = createTree(nums, mid+1, right);
    return node;
}

test('Array[0] should return Tree[0]', t => {
    var arr = [0]
    t.deepEqual(sortedArrayToBST(arr), new TreeNode(0));
});

test('Array[3,5,8] should return Tree[5,3,8]', t => {
    var rootNode = new TreeNode(5);
    rootNode.left = new TreeNode(3);    
    rootNode.right = new TreeNode(8);
    var arr = [3,5,8]
    t.deepEqual(sortedArrayToBST(arr), rootNode);
});