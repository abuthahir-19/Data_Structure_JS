class QueueArr {
    constructor (cap) {
        this.items = [];
        this.front = -1;
        this.rear = -1;
        this.MaxCap = cap;
        this._count = 0;
    }

    enQueue (data) {
        if (this._count < this.MaxCap) {
            if (this.front == -1 && this.rear == -1) {
                this.front++; this.rear++;
                this.items[this.rear] = data;
                this._count += 1;
            }
            else {
                this.items[++this.rear] = data;
                this._count += 1;
            }
        }
        else return ('Maximum capacity reached !!');
    }

    deQueue () {
        if (this.front == -1) {
            return ('Queue is empty !!, add some item to remove them .');
        }
        else if (this.front == this.rear) {
            this.items.length = 0;
        }
        else {
            var frontData = this.items[this.front];
            this.front += 1;
            this._count -=1;
            return frontData;
        }
    }

    frontElement () {
        return this.items[this.front];
    }

    rearElement () {
        return this.items[this.rear];
    }

    size () {
        return this._count;
    }

    isEmpty () {
        return this.items.length == 0;
    }
}

export { QueueArr };