// To make a circular queue

class Queue {
    #rear;
    #front;
    #size;
    #items;
    #count;

    constructor(size) {
        this.#items = [];
        this.#size = size;
        this.#front = -1;
        this.#rear = 0;
        this.#count = 0;
    }

    enQueue(value) {
        if ((this.#count) === this.#size) {
            return false;
        }
        this.#items[this.#rear] = value;
        this.#count++;
        this.#rear = (this.#rear + 1) % this.#size;        
        return true;
    }

    deQueue() {
        if (this.#count === 0) {
            return false;
        }
        this.#items[this.#front + 1] = 0;
        this.#front = (this.#front + 1) % this.#size;
        this.#count--;
        return true;
    }

    Front() {
        if (this.#count === 0) {
            return -1;
        }

        return this.#items[(this.#front + 1 % this.#size)];
    }

    Rear() {
        if (this.#count === 0) {
            return -1;
        }
        const position = (this.#rear - 1) === -1 ? this.#size - 1 : this.#rear - 1
        return this.#items[position];
    }

    isEmpty() {
        if (this.#count === 0) {
            return true;
        }

        return false;
    }

    isFull() {
        if (this.#count === this.#size) {
            return true;
        }
        console.log(this.#count);
        
        return false;
    }

    display() {
        console.log(this.#items)
    }
}

const queue = new Queue(3)

// queue.enQueue(1)
// queue.enQueue(2)
// queue.enQueue(3)
// queue.enQueue(4)
// queue.enQueue(5)

// queue.deQueue()
// console.log(queue.isEmpty())
// console.log(queue.isFull())
// console.log(queue.Front());
// console.log(queue.Rear());

// queue.display()

queue.enQueue(1); // return True
queue.enQueue(2); // return True
queue.enQueue(3); // return True
queue.enQueue(4); // return False
queue.isFull();   // return True
queue.deQueue();  // return True
queue.enQueue(4); // return True
console.log(queue.Front(), 101);
queue.display()