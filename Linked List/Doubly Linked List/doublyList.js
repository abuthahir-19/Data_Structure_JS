class Node {
    constructor (item) {
        this.data = item;
        this.prev = null;
        this.next = null;
    }
}

export class DoublyList {
    constructor () {
        this.head = null;
        this.size = 0;
    }
    
    add (element) {
        var node = new Node (element);
        if (this.head == null) {
            this.head = node;
        }
        else {
            var current = this.head;
            while (current.next) current = current.next;
            current.next = node;
            node.prev = current;
        }
        this.size += 1;
    }

    addAtPosition (item, pos) {
        var node = new Node (item);
        var current = this.head, ind = 1, prev;
        while (ind != pos) {
            ind ++;
            prev = current;
            current = current.next;
        }
        prev.next = node;
        node.prev = prev;
        node.next = current;
        current.prev = node;
        this.size += 1;
    }

    addAtBeg (item) {
        var head = this.head;
        var node = new Node (item);
        this.head = node;
        node.next = head;
        head.prev = node;
        this.size += 1;
    }

    addAtEnd (item) {
        var current = this.head,
        node = new Node (item);
        while (current.next) current = current.next;
        current.next = node;
        this.size += 1;
    }

    delete (item) {
        var current = this.head, prev;
        while (current.data != item) {
            prev = current;
            current = current.next;
        }
        var nextData = current.next;
        prev.next = nextData;
        nextData.prev = prev;
        this.size --;
    }

    deleteAtPos (pos) {
        var ind = 1;
        var curr = this.head, prev;
        while (ind != pos) {
            ind ++;
            prev = curr;
            curr = curr.next;
        }
        prev.next = curr.next;
        curr.next.prev = prev;
        this.size --;
    }

    deleteAtBeg () {
        var head = this.head;
        this.head = head.next;
        this.size --;
    }

    deleteAtEnd () {
        var current = this.head, prev;
        while (current.next) {
            prev = current;
            current = current.next;
        }
        prev.next = null;
        this.size --;
    }

    indexOf (element) {
        let ind = 1, cur = this.head;
        while (cur.data !== element) {
            ind += 1;
            cur = cur.next;
        }return (ind - 1);
    }

    toString () {
        var str = [], current = this.head;
        while (current) {
            str.push (current.data);
            current = current.next;
        }
        return str.join(' ');
    }

    toArray () {
        var List = [], current = this.head;
        while (current) {
            List.push (current.data);
            current = current.next;
        }
        return List;
    }

    isPresent (item) {
        var List = [], current = this.head;
        while (current) {
            List.push (current.data);
            current = current.next;
        }
        return List.includes (item);
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
        var List = [], current = this.head;
        while (current) {
            List.push (current.data);
            current = current.next;
        }
        console.log (...List);
    }
}