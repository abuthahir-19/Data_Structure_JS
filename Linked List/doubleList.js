const fs = require('fs');

const readable = fs.createReadStream ('foo.txt');

let inputString = '';
let currentLine = 0;

readable.on ('data', inputStdin => {
    inputString += inputStdin;
});

readable.on ('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main ();
});

function readLine () {
    return inputString[currentLine++];
}

function main () {
    var n = +readLine();
    var ar = readLine().split(' ').map(Number);

    var obj = new DoubleList();
    for (let i = 0; i < ar.length; i++) {
        obj.add (ar[i]);
    }
    console.log ('Elements of the doubly linked list :');
    obj.printList();
    console.log ('Deletion at the specified position :');
    obj.removeAtPos (+readLine());
    console.log ('The elements of the list after removing :');
    obj.printList();
}

class Node {
    constructor (element) {
        this.value = element;
        this.prev = null;
        this.next = null;
    }
}

class DoubleList {
    constructor () {
        this.head = null;
        this.size = 0;
    }

    add (element) {
        var curr;

        var node = new Node (element);

        if (this.head == null) {
            this.head = node;
        }
        else {
            curr = this.head;
            while (curr.next != null) {
                curr = curr.next;
            }
            curr.next = node;
            node.prev = curr;
        }
        this.size += 1;
    }

    remove (element) {
        var curr = this.head, pre, count = 0;
        while (curr.value != element) {
            count += 1;
            pre = curr;
            curr = curr.next;
        }
        var temp = pre;
        temp.next = curr.next;
        curr.prev = pre;
        this.size -= 1;
    }

    insertAtPos (element, index) {
        var curr = this.head;
        var node = new Node (element);

        var count = 0;
        while (curr) {
            count += 1;
            if (count == index-1) break;
            curr = curr.next;
        }
        var nodeNext = curr.next;
        curr.next = node;
        node.prev = curr;
        node.next = nodeNext;
        this.size++;
    }

    removeAtPos (element) {
        var curr = this.head;
        while (curr.value != element) {
            curr = curr.next;
        }
        var prev = curr.prev;
        prev.next = curr.next;
        curr.next.prev = prev;
        this.size -= 1;
    }

    printList () {
        var curr = this.head;
        var List = [];
        while (curr) {
            List.push (curr.value);
            curr = curr.next;
        }
        console.log (...List);
        console.log (this.size);
    }
}