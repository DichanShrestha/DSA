class Stacks {
    #items = []
    push(string) {
        for (let i = 0; i < string.length; i++) {
            this.#items.push(string[i])
        }
    }
    pop() {
        return this.#items.reverse().toString()
    }
}

const stack = new Stacks();
stack.push('piyush');
console.log(stack.pop());