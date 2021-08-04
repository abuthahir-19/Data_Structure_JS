class QueueNode {
    constructor (key) {
        this.data = key;
        this.next = null;
    }
}

class QueueLL {
    constructor () {
        this.front = null;
        this.rear = null;
        this._count = 0;
    }

    enQueue (data) {
        var newNode = new QueueNode (data);
        if (this.front == null) {
            this.front = newNode;
            this.rear = newNode;
        }
        else {
            var LastElement = this.rear;
            LastElement.next = newNode;
            this.rear = newNode;
        }
        this._count += 1;
    }

    deQueue () {
        var frontNode = this.front.next,
        frontElemt = this.front.data;
        this.front = frontNode;
        this._count -=1;
        return frontElemt;
    }

    frontElement () {
        return this.front.data;
    }

    LastElement () {
        return this.rear.data;
    }

    length () {
        return this._count;
    }

    isEmpty () {
        return this.front == null;
    }
}

export { QueueLL }