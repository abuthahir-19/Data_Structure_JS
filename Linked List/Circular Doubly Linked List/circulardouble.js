import { Node } from "../Doubly Linked List/doublyList.js";

class CircularDouble {
    constructor () {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add (key) {
        var newNode = new Node (key);
        if (this.head == null && this.tail == null) {
            this.head = newNode;
            this.tail = newNode;
            this.head.prev = this.head.next = newNode;
            this.tail.prev = this.tail.next = newNode;
        }
        else {
            var curr = this.head.next;
            while (curr.next != this.head) {
                curr = curr.next;
            }
            curr.next = newNode;
            this.tail = newNode;
            this.tail.prev = curr;
            this.tail.next = this.head;
            this.head.prev = newNode;
        }
        this.size++;
    }

    delete (key) {
        if (this.head.data == key) {
            var headData = this.head.next;
            this.tail.next = headData;
            headData.prev = this.tail;
        }
        else {
            var curr = this.head.next, prev;
            while (curr != this.head) {
                if (curr.data == key) {
                    break;
                }
                prev = curr;
                curr = curr.next;
            }
            
            prev.next = curr.next;
            curr.next.prev = prev;
        }
        this.size--;
    }

    addAtPosition (key, index) {
        var newNode = new Node (key), pos = 0, prev;
        if (index === 0) {
            let Head = this.head;
            Head.prev = newNode;
            this.head = newNode;
            this.head.prev = this.tail;
            this.tail.next = this.head;
        }
        else {
            var curr = this.head;
            while (pos != index) {
                prev = curr;
                curr = curr.next;
                pos++;
            }
            prev.next = newNode;
            newNode.next = curr;
            curr.prev = newNode;
        }
        this.size++;
    }

    deleteAtPosition (index) {
        var pos = 0, curr = this.head, prev;
        if (index === 0) {
            var nex = this.head.next;
            nex.prev = this.tail;
            this.tail.next = nex;
        }
        else {
            while (pos != index) {
                prev = curr;
                curr = curr.next;
                pos++;
            }
            prev.next = curr.next;
            curr.next.prev = prev;
        }
        this.size--;
    }

    addAtFront (key) {
        var newNode = new Node (key);
        var headData = this.head;
        this.head = newNode;
        newNode.prev = this.tail;
        this.tail.next = newNode;
        newNode.next = headData;
        headData.prev = newNode;
        this.size++;
    }

    deleteAtFront () {
        var newHead = this.head.next;
        this.head = newHead;
        newHead.prev = this.tail;
        this.tail.next = newHead;
        this.size--;
    }

    addAtBack (key) {
        var newNode = new Node (key);
        var tailData = this.tail;
        tailData.next = newNode;
        this.tail = newNode;
        newNode.prev = tailData;
        newNode.next = this.head;
        this.head.prev = newNode;
        this.size++;
    }

    deleteAtBack () {
        var tailData = this.tail.prev;
        this.tail = tailData;
        tailData.next = this.head;
        this.head.prev = tailData;
        this.size --;
    }

    Length () {
        return this.size;
    }

    getElementAt (pos) {
        return this.Values()[pos];
    }

    indexOf (key) {
        return this.Values().indexOf (key);
    }

    toArray () {
        return this.Values();
    }

    toString () {
        return this.Values().toString();
    }

    isPresent (key) {
        return this.Values().includes (key);
    }

    isEmpty () {
        return this.head == null;
    }

    getHead () {
        return this.head.data;
    }

    getTail () {
        return this.tail.data;
    }

    Values () {
        var List = [], curr = this.head;
        while (curr != this.tail) {
            List.push (curr.data);
            curr = curr.next;
        }
        List.push (this.tail.data);
        return List;
    }
}

export { CircularDouble };