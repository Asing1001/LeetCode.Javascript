import test from 'ava';

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(node1, node2) {    
    var nextAdd = 0;        
    var firstNode = new ListNode(0);    
    var currentNode = firstNode;
    
    while (true) {
        if (!node1 && !node2) {
            break;
        }

        var val1 = node1 ? node1.val : 0;
        var val2 = node2 ? node2.val : 0;
        var value = val1 + val2 + nextAdd;
        nextAdd = 0;        
        
        if (value >= 10) {
            nextAdd = 1;
        }
        
        currentNode.next = new ListNode(value % 10);
        currentNode = currentNode.next;
        
        if(node1 !== null)
            node1 = node1.next;
        if(node2 !== null)
            node2 = node2.next;
    }
    
    if(nextAdd)
        currentNode.next = new ListNode(1)
    
    return firstNode.next;
};

//Test case
test('addTwoNumbers', t => {
    const node1 = new ListNode(2);
    const node2 = new ListNode(4);
    const node3 = new ListNode(3);
    node1.next = node2;
    node2.next = node3;

    const node4 = new ListNode(5);
    const node5 = new ListNode(6);
    const node6 = new ListNode(4);
    node4.next = node5;
    node5.next = node6;

    const expect1 = new ListNode(7);
    const expect2 = new ListNode(0);
    const expect3 = new ListNode(8);
    expect1.next = expect2;
    expect2.next = expect3;
    t.deepEqual(addTwoNumbers(node1, node4), expect1);
});