const removeNthFromEnd = function(head, n) {
    let current = head;
    let fast = head;
    let previous = null;

    for (let i = 0; i < n - 1; i++) {
        if (fast === null) {
            return head;
        }
        fast = fast.next;        
    }

    if (fast === null) {
        return head;
    }

    while (fast.next) {
        previous = current;
        current = current.next;
        fast = fast.next;
    }

    previous.next = current.next;
    return previous;
};

console.log(removeNthFromEnd([1,2,3,4,5], 2));