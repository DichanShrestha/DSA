function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

const removeNthFromEnd = function(head, n) {
    let fast = head;
    let slow = head;

    // Move fast pointer n steps ahead
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    // If fast is null, it means we need to remove the head node
    if (!fast) {
        return head.next;
    }

    // Move both pointers until fast reaches the end
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    // Remove the nth node from the end
    slow.next = slow.next.next;

    return head;
};

// Helper function to convert an array to a linked list
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

const head = arrayToList([1, 2, 3, 4, 5]);
const result = removeNthFromEnd(head, 2);
console.log(listToArray(result)); // Output should be [1, 2, 3, 5]
