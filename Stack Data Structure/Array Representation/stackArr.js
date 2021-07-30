class Stack {
    constructor () {
        this.stck = [];
    }

    push = function (key) {
        this.stck.push (key);
    }

    pop () {
        return this.stck.pop()
    }

    peek () {
        return this.stck[this.stck.length-1];
    }

    isEmpty () {
        return this.stck.length == 0;
    }

    clear () {
        this.stck.length = 0;
    }

    size () {
        return this.stck.length;
    }
}

export {Stack};