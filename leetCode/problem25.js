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

var reverseKGroup = function (head, k) {

    if (head === null || head.next === null) return head;

    let current = head;

    for (let i = 0; i < k; i++) {
        if (current === null) {
            return head;
        }        
        current = current.next;
    }

    current = head;

    let previous = null;
    let next = null;
    let count = 0;

    while (count < k && current) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;

        count++;
    }

    let remList = reverseKGroup(current, k)

    head.next = remList;
    return previous;
};

const head = arrayToList([1, 2, 3, 4, 5])
const result = reverseKGroup(head, 2)

console.log(listToArray(result))