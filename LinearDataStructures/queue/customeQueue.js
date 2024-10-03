class Queue {
    #size;
    #front;
    #rear;
    #items;
    #count;
    constructor(capacity) {
        this.#size = capacity;
        this.#items = new Array();
        this.#items.length = capacity;
        this.#front = -1;
        this.#rear = 0;
    }

    enqueue(value) {
        if (this.#count === this.#size) {
            console.log("Size is full");
            return;
        }
        this.#items[this.#rear] = value;
        this.#rear = (this.#rear + 1) % this.#size;
        this.#count++;
    }

    dequeue() {

        if (this.#count === 0) {
            console.log("Queue is empty")
            return -1
        }
        this.#front = (this.#front + 1) % this.#size;
        this.#count--;
        const value = this.#items[this.#front]
        this.#items[this.#front] = 0;
        return value
    }

    display() {
        console.log(this.#items);
    }
}

const queue = new Queue(3)

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

console.log(queue.dequeue());
queue.enqueue(4)

queue.display()
