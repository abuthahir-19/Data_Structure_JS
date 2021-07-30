class Node {
    constructor (item) {
        this.data = item;
        this.next = null;
    }
}

export class List {
    constructor () {
        this.head = null;
        this.size = 0;
    }

    add (element) {
        var node = new Node (element), current;
        if (this.head == null) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next) current = current.next;
            current.next = node;
        }
        this.size += 1;
    }

    delete (element) {
        var curr = this.head, prev;
        while (curr.data !== element) {
            prev = curr;
            curr = curr.next;
        }
        prev.next = curr.next;
        this.size --;
    }

    removeAt (pos) {
        var ind = 1, curr = this.head, prev;
        while (ind !== pos) {
            ind ++;
            prev = curr;
            curr = curr.next;
        }
        prev.next = curr.next;
        this.size --;
    }

    toString () {
        var curr = this.head, str = [];
        while (curr) {
            str.push (curr.data);
            curr = curr.next;
        }
        return str.join(' ');
    }

    toArray () {
        var curr = this.head, str = [];
        while (curr) {
            str.push (curr.data);
            curr = curr.next;
        }
        return str;
    }

    indexOf (element) {
        var curr = this.head, ind = 1;
        while (curr.data !== element) {
            ind += 1;
            curr = curr.next;
        }
        return ind;
    }

    removeAtBeg () {
        var beg = this.head.next;
        this.head = beg;
        this.size --;
    }

    removeAtEnd () {
        var curr = this.head, prev;
        while (curr.next) {
            prev = curr;
            curr = curr.next;
        }
        prev.next = null;
        this.size --;
    }

    addAtBeg (element) {
        var h = this.head;
        var node = new Node (element);
        node.next = h;
        this.head = node;
        this.size ++;
    }

    addAtEnd (element) {
        var curr = this.head;
        var node = new Node (element);
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = node;
        this.size ++;
    }

    addAtPositon (element, pos) {
        var ind = 1, curr = this.head, prev;
        var node = new Node (element);

        while (ind != pos) {
            ind ++;
            prev = curr;
            curr = curr.next;
        }
        prev.next = node;
        node.next = curr;
        this.size ++;
    }

    isPresent (element) {
        var curr = this.head, str = [];
        while (curr) {
            str.push (curr.data);
            curr = curr.next;
        }
        return str.includes (element);
    }

    isEmpty () {
        return this.head === null;
    }

    size () {
        return this.size;
    }

    frontElement () {
        return this.head.data;
    }

    printList () {
        var curr = this.head, str = [];
        while (curr) {
            str.push (curr.data);
            curr = curr.next;
        }
        console.log (...str);
    }
}