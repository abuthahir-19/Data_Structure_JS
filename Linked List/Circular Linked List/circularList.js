class Node {
    constructor (element) {
        this.data = element;
        this.next = null;
    }
}

class CircularList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add (element) {
        var node = new Node (element) ;
        if (this.head == null && this.tail == null) {
            this.head = node;
            this.tail = node;
            this.tail.next = this.head;
        }
        else {
            var curr = this.head;
            while (curr.next != this.head) {
                curr = curr.next;
            }
            curr.next = node;
            this.tail = node;
            this.tail.next = this.head;
        }
        this.size++;
    }

    remove (key) {
        try {
            var curr = this.head, prev;
            while (curr.data != key) {
                prev = curr;
                curr = curr.next;
            }
            prev.next = curr.next;
        }catch (e) {
            if (e.name == 'TypeError') {
                this.head = curr.next;
                this.tail.next = this.head
            }
        }
        this.size--;
    }

    addAtPosition (key, pos) {
        var ind = 0, curr = this.head, 
        node = new Node (key), prev;
        while (ind != pos) {
            prev = curr;
            curr = curr.next;
            ind++;
        }
        prev.next = node;
        node.next = curr
        this.size++;
    }

    removeAtPosition (pos) {
        var ind = 0, curr = this.head, prev;
        while (ind != pos) {
            ind++;
            prev = curr;
            curr = curr.next;
        }
        prev.next = curr.next;
        this.size--;
    }

    addAtBeg (key) {
        var headElement = this.head, node = new Node (key);
        this.head = node;
        node.next = headElement;
        this.tail.next = this.head;
        this.size++;
    }

    removeAtBeg () {
        var headNode = this.head;
        this.head = headNode.next;
        this.tail.next = this.head;
        this.size--;
    }

    addAtEnd (key) {
        var node = new Node (key) ;
        this.tail.next = node;
        node.next = this.head;
        this.tail = node;
        this.size++;
    }

    removeAtEnd () {
        var curr = this.head;
        while (curr.next != this.tail) {
            curr = curr.next;
        }
        curr.next = this.head;
        this.size--;
    }

    toString () {
        return this.Values().toString();
    }

    toArray () {
        return this.Values();
    }

    indexOf (element) {
        return this.Values().indexOf(element);   
    }

    isPresent (element) {
        var lst = this.Values();
        return lst.includes (element);
    }

    isEmpty () {
        return this.head == null;
    }

    listSize () {
        return (this.size);
    }

    getHead () {
        return this.head;
    }

    getTail () {
        return this.tail;
    }

    Values () {
        var List = [], curr = this.head;
        List.push (curr.data);
        curr = curr.next;
        while (curr != this.head) {
            List.push (curr.data);
            curr = curr.next;
        }
        return List;
    }
}

export {CircularList};