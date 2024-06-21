class CustomArray {
    #currentIndex
    #items
    constructor(size) {
        this.#items = new Array(size)
        this.#currentIndex = 0;
    }

    insert(value) {
        if (this.#items.length > this.#currentIndex) {
            this.#items[this.#currentIndex] = value
            this.#currentIndex ++;
        } else {
            throw new Error("Array is full")
        }
    }

    get() {
        return this.#items
    }

    indexOf(value) {
        for (let i = 0; i < this.#currentIndex; i++) {
            // if (value === this.#items[i]) {
            //     return i;
            // }     
            if ((value ^ this.#items[i]) === 0) {
                return i
            }
        }
        return -1       
    }
}

const arr = new CustomArray(50)

arr.insert(2);
arr.insert(3);

console.log(arr.get());  // Output: [ 2, 3, <3 empty items> ]
console.log(arr.indexOf(2));  //0
