class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    #head;
    #tail;
    constructor() {
        this.#head = this.#tail = null;
    }

    shift(data) {
        const node = new Node(data)
        if (this.#head === null) {
            this.#head = this.#tail = node
        } else {
            // let current = this.#head;
            // while (current.next) {
            //     current = current.next;
            // }
            // current.next = node
            this.#tail.next = node;
            this.#tail = node
        }
    }

    unshift(data) {
        const node = new Node(data)
        if (this.#head === null) {
            this.#head = this.#tail = node;
        } else {
            node.next = this.#head;
            this.#head = node;
        }
    }

    toString() {
        let current = this.#head;
        let arr = []
        while (current !== null) {
            arr.push(current.data)
            current = current.next
        }
        return arr.join('-->')
    }

    printListData() {
        let current = this.#head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    sum() {
        let current = this.#head;
        let sum = 0;
        while (current) {
            sum += current.data;
            current = current.next
        }
        return sum
    }

    indexOf(value) {
        let current = this.#head;
        let index = 0;

        while (current) {
            if (current.data === value) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }

    insertAt(value, index) {

        if (index === 0) {
            this.unshift(value);
            return;
        }

        const node = new Node(value)
        let current = this.#head;
        let previous = null;
        let i = 0;

        while (current && i < index) {
            previous = current;
            current = current.next;
            i++;
        }

        if (i === index) {
            previous.next = node;
            node.next = current;
            if (!current) {
                this.#tail = node;
            }
        } else {
            console.log("Index out of bounds");
        }
    }

    reverse() {
        let previous = null;
        let current = this.#head;
        let next = current.next;
        this.#tail = this.#head;

        if (this.#head === null || this.#head.next === null) return;
        while (next) {
            current.next = previous;
            previous = current;
            current = next;
            next = next.next;
        }
        current.next = previous
        this.#head = current;
    }

    deleteFirstIndex() {
        if (!this.#head) {
            return; // The list is empty, nothing to delete
        }
        if (this.#head === this.#tail) {
            this.#head = this.#tail = null; // The list has only one node
        } else {
            this.#head = this.#head.next;
        }
    }

    deleteLastIndex() {
        if (!this.#head) {
            return; // The list is empty, nothing to delete
        }
        if (this.#head === this.#tail) {
            this.#head = this.#tail = null; // The list has only one node
        } else {
            let current = this.#head;
            let previous = null;
            while (current.next) {
                previous = current;
                current = current.next;
            }
            previous.next = null;
            this.#tail = previous; // Update the tail reference
        }
    }

    removeNthFromEnd(index) {
        let fast = this.#head;
        let slow = this.#head;
        let previous = null;

        // Move fast pointer index steps ahead
        for (let i = 0; i < index - 1; i++) { 
            if (fast === null) return; // If index is greater than the length of the list
            fast = fast.next;
        }

        // If fast is null, it means we need to remove the head
        if (fast === null) {
            this.#head = this.#head.next;
            return;
        }

        // Move both pointers until fast reaches the end
        while (fast.next) {
            previous = slow;
            slow = slow.next;
            fast = fast.next;
        }

        // Remove the nth node from the end
        previous.next = slow.next;

        // If we removed the last node, update the tail
        if (!previous.next) {
            this.#tail = previous;
        }
    }
    
    printLl(head){
        if (head === null) return;
        this.printLl(head.next)
        console.log(head.data + '-->');

    }

    print() {
        this.printLl(this.#head)
    }
}

const ll = new LinkedList()

ll.shift(1)
ll.shift(2)
ll.shift(3)
ll.shift(4)
ll.shift(5)

// ll.reverse()
// ll.printListData()
// ll.deleteFirstIndex()
// ll.deleteFirstIndex()
// ll.deleteFirstIndex()
// ll.deleteLastIndex()
// ll.removeNthFromEnd(4)
// console.log(ll.toString());
// console.log(ll.sum());
// console.log(ll);
// console.log(ll.indexOf(103));
ll.print()