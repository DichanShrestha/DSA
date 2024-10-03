class MyCircularDeque {

    #items;
    #size;
    #front;
    #rear;
    #count;

    constructor(maxSize) {
        this.#items = new Array(maxSize).fill(0);
        this.#size = maxSize;
        this.#front = 0;
        this.#rear = 0;
        this.#count = 0;
    }

    insertFront(value) {
        if (this.isFull()) {
            return false;
        }

        this.#front = (this.#front - 1 + this.#size) % this.#size; // Move front pointer back
        this.#items[this.#front] = value;
        this.#count++;
        return true;
    }

    insertLast(value) {
        if (this.isFull()) {
            return false;
        }

        this.#items[this.#rear] = value;
        this.#rear = (this.#rear + 1) % this.#size; // Move rear pointer forward
        this.#count++;
        return true;
    }

    deleteFront() {
        if (this.isEmpty()) {
            return false;
        }

        this.#items[this.#front] = 0;
        this.#front = (this.#front + 1) % this.#size; // Move front pointer forward
        this.#count--;
        return true;
    }

    deleteLast() {
        if (this.isEmpty()) {
            return false;
        }

        this.#rear = (this.#rear - 1 + this.#size) % this.#size; // Move rear pointer back
        this.#items[this.#rear] = 0;
        this.#count--;
        return true;
    }

    getFront() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.#items[this.#front];
    }

    getRear() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.#items[(this.#rear - 1 + this.#size) % this.#size]; // Rear needs to wrap correctly
    }

    isEmpty() {
        return this.#count === 0;
    }

    isFull() {
        return this.#count === this.#size;
    }

    display() {
        console.log(this.#items);
    }
}

const myCircularDeque = new MyCircularDeque(3);
myCircularDeque.insertLast(1);  // return True
myCircularDeque.insertLast(2);  // return True
myCircularDeque.insertFront(3); // return True
myCircularDeque.insertFront(4); // return
