class QueueElement {
    constructor (elem, prior) {
        this.data = elem;
        this.prio = prior;
    }
}

class PriorityQueue {
    constructor () {
        this.items = [];
        this._count = 0;
    }

    enQueue (key, prio) {
        var queueElement = new QueueElement (key, prio);

        let added = false;
        for (let i = 0; i < this.items.length; i++) {
            if (queueElement.prio > this.items[i].prio) {
                this.items.splice (i, 0, queueElement);
                added = true;
                break;
            }
        }

        if (!added) {
            this.items.push (queueElement);
        }        
        this._count += 1;
    }

    deQueue () {
        this._count-=1;
        return this.items.shift().data;
    }

    frontElement () {
        return this.items[0].data;
    }
    
    lastElement () {
        return this.items[this.items.length-1].data;
    }

    length () {
        return this._count;
    }

    isEmpty () {
        return this.items.length === 0;
    }
}

export { PriorityQueue };