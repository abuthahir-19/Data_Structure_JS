class minHeap {
    constructor () {
        this.list = [];
    }

    heapifyMin (list, n, i) {
        var small = i;
        var left = (2 * i) + 1;
        var right = (2 * i) + 2;

        if (left < n && list[left] < list[small]) {
            small = left;
        }

        if (right < n && list[right] < list[small]) {
            small = right;
        }

        if (small != i) {
            var temp = list[i];
            list[i] = list[small];
            list[small] = temp;

            this.heapifyMin (list, n, small);
        }
    }

    insert (data) {
        const size = this.list.length;
        if (size == 0) {
            this.list.push (data);
        }
        else {
            this.list.push (data);
            for (let i = Math.floor (this.list.length/2)-1; i >= 0; i--) {
                this.heapifyMin (this.list, this.list.length, i);
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
        for (let i = Math.floor (this.list.length/2)-1; i >= 0; i--) {
            this.heapifyMin (this.list, this.list.length, i);
        }
    }

    findMin () {
        return this.list[0];
    }

    removeMin () {
        this.delete (this.list[0]);
    }

    size () {
        return this.list.length;
    }

    getList () {
        return this.list;
    }
}

export { minHeap };