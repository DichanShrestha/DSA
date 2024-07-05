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
        return this.#items.slice(0, this.#currentIndex)
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

    removeAt(index) {
        for (let i = index; i < this.#currentIndex - 1; i++) {
            this.#items[i] = this.#items[i+1]
            this.#currentIndex --;
        }
        return this.#items.slice(0, this.#currentIndex)
    }

    max() {
        let result = this.#items[0];
        for (let i = 0; i < this.#currentIndex; i++) {
            if (result < this.#items[i]) {
                result = this.#items[i]
            }
        }
        return result
    }

    min() {
        let result = this.#items[0];
        for (let i = 0; i < this.#currentIndex; i++) {
            if (result > this.#items[i]) {
                result = this.#items[i]
            }
        }
        return result
    }

    reverse() {
        let i = 0;
        let j = this.#currentIndex - 1;
        let temp;
        while (i < j) {
            temp = this.#items[i];
            this.#items[i] = this.#items[j];
            this.#items[j] = temp;
            i++;
            j--;
        }
        return this.#items;
    }
}

const arr = new CustomArray(15)

arr.insert(1);
arr.insert(-2);
arr.insert(3);
arr.insert(4);
arr.insert(10)
console.log(arr.get());  // Output: [ 2, 3, <3 empty items> ]
// console.log(arr.indexOf(2));  //0

// console.log(arr.removeAt(4));
// console.log(arr.max());
// console.log(arr.min());


console.log(arr.reverse());