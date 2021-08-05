class PriorityQueueNode {
    constructor (key, priority) {
        this.key = key;
        this.priority = priority;
        this.next = null;
    }
}

class PriorityQueueLL {
    constructor () {
        this.front = null;
        this.rear = null;
        this._count = 0;
    }

    insertInBetween (queueElement, pos) {
        var start = this.front, ind = 1, prev;
        if (pos == 1) {
            var frontNode = this.front;
            queueElement.next = frontNode;
            this.front = queueElement;
        }
        else {
            while (ind != pos) {
                ind++;
                prev = start;
                start = start.next;
            }
            prev.next = queueElement;
            queueElement.next = start;
        }
    }

    enQueue (key, priority) {
        var queueElement = new PriorityQueueNode (key, priority);
        if (this.front == null) {
            this.front = queueElement;
            this.rear = queueElement;
        }
        else {
            var ptr = this.front, placeFound = false, count = 1;
            while (ptr != null) {
                if (queueElement.priority > ptr.priority) {
                    placeFound = true;
                    break;
                }
                count += 1;
                ptr = ptr.next;
            }
            if (!placeFound) {
                var lastElement = this.rear;
                lastElement.next = queueElement;
                this.rear = queueElement;
            }
            else {
                this.insertInBetween (queueElement, count);
            }
        }
        this._count += 1;
    }

    deQueue () {
        var frontNode = this.front;
        this.front = frontNode.next;
        this._count -= 1;
        return frontNode.key;
    }

    length () {
        return this._count;
    }

    frontElement () {
        return this.front.key;
    }

    lastElement () {
        return this.rear.key;
    }

    isEmpty () {
        return this._count == 0;
    }
}

export { PriorityQueueLL };