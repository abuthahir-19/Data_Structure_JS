class Node {
    constructor (key) {
        this.data = key;
        this.next = null;
    }
}

class stackLinkedList {
    constructor (cap) {
        this._capacity = cap;
        this._top = null;
        this._count = 0;
    }

    push (element) {
        if (this._count < this._capacity) {
            var newNode = new Node (element);
            if (this._top == null) {
                this._top = newNode;
            }
            else {
                var currNode = this._top;
                this._top = newNode;
                newNode.next = currNode;
            }
            this._count += 1;
        }
        else return 'Stack Overflow !!';
    }

    pop () {
        if (this._count > 0) {
            var topNode = this._top;
            this._top = topNode.next;
            this._count-=1;
            return topNode.data;
        }
        else 
        throw new Error ('Stack underflow !!');           
    }

    peek () {
        var lastNode = this._top;
        while (lastNode.next != null) {
            lastNode = lastNode.next;
        }
        return lastNode.data;
    }

    size () {
        return this._count;
    }
}

export { stackLinkedList };