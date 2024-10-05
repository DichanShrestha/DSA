class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

export default class LinkedList {
    #head;
    #tail;

    constructor() {
        this.#head = this.#tail = null;
    }

    push(value) {
        const node = new Node(value);

        if (this.#head === null) {
            this.#head = this.#tail = node;
        } else {
            this.#tail.next = node;
            this.#tail = node;
        }
    }

    unshift(value) {
        const node = new Node(value);

        if (this.#head === null) {
            this.#head = this.#tail = node;
        } else {
            node.next = this.#head;
            this.#head = node;
        }
    }

    toString() {
        let current = this.#head;
        const temp = [];
        while (current) {
            temp.push(current.data);
            current = current.next;
        }
        return temp.join(' -> ');  // Return the string instead of logging it
    }

    indexOf(value) {
        let index = 0;
        let current = this.#head;

        if (this.#head === null) {
            return -1;
        }

        while (current) {
            if (current.data === value) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;  // Return -1 if the value is not found
    }

    insertAt(index, value) {
        let current = this.#head;
        let tempI = 0;
        const node = new Node(value);

        if (index === 0) {
            node.next = current;
            this.#head = node;
            return;
        }

        while (current) {
            if (index === (tempI + 1)) {
                const remainingTail = current.next;
                current.next = node;
                node.next = remainingTail;
                break;
            }
            current = current.next;
            tempI++;
        }
        return -1;  // Return -1 if the index is out of bounds
    }

    reverse() {
        let previous = null;
        let current = this.#head;
        this.#tail = this.#head;

        while (current) {
            let next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.#head = previous;
    }

    length() {
        let length = 0;
        let current = this.#head;

        while (current) {
            length++;
            current = current.next;
        }
        return length;
    }
}
