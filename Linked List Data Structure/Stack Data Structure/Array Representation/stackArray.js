class StackArr {
    constructor (capacity) {
        this._capacity = capacity || Infinity;
        this._stack = [];
        this._top = -1;
    }

    push (key) {
        if (++this._top < this._capacity) {
            this._stack.push (key);
        }
        else {
            console.log('Stack has reached its maximum capacity. Remove an element to add one more element you want');
        }
    }

    pop () {
        if (this._top < 0) {
            return 'Stack Underflow';
        }
        else {
            return this._stack.pop();
        }
    }

    peek () {
        return this._stack[this._stack.length-1];
    }

    size () {
        return this._stack.length;
    }
}


export {StackArr};