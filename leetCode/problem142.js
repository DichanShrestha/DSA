var detectCycle = function(head) {
    let mySet = new Set();
    let current = head;

    while (current) {
        if (mySet.has(current)) {
            return current; // Return the node where the cycle begins
        }
        mySet.add(current);
        current = current.next; // Move to the next node
    }

    return null; // No cycle
};
