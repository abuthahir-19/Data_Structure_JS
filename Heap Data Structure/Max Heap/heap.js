class maxHeap {
    constructor () {
        this.list = [];
    }

    insert (data) {
        const size = this.list.length;
        if (size==0) {
            this.list.push (data);
        }
        else {
            this.list.push (data);
            for (let i = 0; i <= this.list.length; i++) {
                this.heapifyMax (this.list, this.list.length, i);
            }
        }
    }

    delete (data) {
        var index;
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i] == data) {
                index = i;
                break;
            }
       } 
       [this.list[index], this.list[this.list.length-1]] = [this.list[this.list.length-1], this.list[index]];
       this.list.pop();
       for (let i = 0; i < this.list.length; i++) {
           this.heapifyMax (this.list, this.list.length, i);
       }
    }

    heapifyMax (list, n, i) {
        var large = i;
        var left = (2 * i) + 1;
        var right = (2 * i) + 2;

        if (left < n && list[left] > list[i]) {
            large = left;
        }

        if (right < n && list[right] > list[i]) {
            large = right;
        }

        if (large != i) {
            let temp = list[i];
            list[i] = list[large];
            list[large] = temp;

            this.heapifyMax (list, n, large);
        }
    }

    findMax () {
        return this.list[0];
    }

    removeMax () {
        this.delete (this.list[0]);
    }

    size () {
        return this.list.length;
    }

    isEmpty () {
        return this.list.length === 0;
    }

    getList () {
        return this.list;
    }
}

export { maxHeap };