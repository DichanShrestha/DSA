var hasCycle = function(head) {
    if(head === null || head.next === null) return false;
    let hare = head;
    let tortoise = head;
    while(hare && hare.next) {
        hare = hare.next.next;
        tortoise = tortoise.next;

        if(hare === tortoise) return true
    } 
    return false;
};