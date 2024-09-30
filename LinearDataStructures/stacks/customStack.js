class Stacks {
    // #top = 0;
    #items = [];

    push(value) {
        this.#items.push(value);
        // this.#top++;
    }

    toString() {
        console.log(this.#items.reverse().toString())
    }

    pop() {
        if(this.#items.length === 0) return null;
        return this.#items.reverse().pop()
    }

    peek() {
        if(this.#items.length === 0) return null;
        return this.#items.reverse()[this.#items.length - 1]
    }
}

const stack = new Stacks();
stack.push(5)
stack.push(1)
stack.push(2)
stack.toString()
console.log(stack.peek());
// stack.pop()
// stack.toString()