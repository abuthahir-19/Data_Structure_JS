class Node {
    constructor (key) {
        this.data = key;
        this.prev = null;
        this.next = null;
    }
}

class stackDoubleList {
    constructor () {
        this.top = null;
        this._size = 0;
    }

    push (key) {
        var newNode = new Node (key);
        if (this.top === null) {
            this.top = newNode;
        }
        else {
            var topNode = this.top;
            topNode.prev = newNode;
            newNode.next = topNode;
            this.top = newNode;
        }
        this._size += 1;
    }

    pop () {
        var topNode = this.top;
        this.top = topNode.next;
        this._size -= 1;
        return topNode.data;
    }

    isEmpty () {
        return this.top == null;
    }

    toArray () {
        var List = [], start = this.top;
        while (start != null) {
            List.push (start.data);
            start = start.next;
        }
        return List;
    }

    reverse () {
        return this.toArray().reverse();
    }

    length () {
        return this._size;
    }

    peek () {
        return this.top.data;
    }
}

export { stackDoubleList };