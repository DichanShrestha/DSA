const reverseList = function(head) {
    let previous = null;
    let current = head;
    let next = current.next;

    while (next) {
        current.next = previous;
        previous = current;
        current = next;
        next = next.next;
    }
    return current;
};