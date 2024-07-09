/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
var swapPairs = function(head) {
    if(head === null || head.next === null) return head;

    let endOfList = swapPairs(head.next.next);

    let secondOne = head.next;
    secondOne.next = head;
    head.next = endOfList;

    return secondOne;
};

function arrayToList(arr) {
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to convert a linked list to an array
function listToArray(head) {
    let arr = [];
    let current = head;
    while (current !== null) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}



const head = arrayToList([1,2,3,4])
const result = swapPairs(head)

console.log(listToArray(result))