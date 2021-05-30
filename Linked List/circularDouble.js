const fs = require('fs');

var readable = fs.createReadStream ('foo.txt');
readable.resume ();
readable.setEncoding ('utf-8');

let inputString = '';
let currentLine = 0;

readable.on ('data', data => {
    inputString += data;
});

readable.on ('end', _ => {
    inputString = inputString.trim().split ('\n').map (string => {
        return string.trim();
    });

    main ();
});

function readLine () {
    return inputString[currentLine++];
}

function main () {
    var list = readLine ().split(' ').map(Number);
    var cDList = new CircularDoubleList ();
    for (const val of list) {
        cDList.insert (val);
    }
    console.log ('Element of the Circular Doubly Linked List :');
    cDList.printList();
}

class Node {
    constructor (element) {
        this.value = element;
        this.prev = null;
        this.next = null;
    }
}

class CircularDoubleList {
    constructor () {
        this.head = null;
        this.tail = null;
    }

    insert (element) {
        var node = new Node (element);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        }
        else {
            var current = this.head;
            this.tail = node;
            current.prev = node;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
            node.prev = current;
            node.next = this.head;
        }
    }

    printList () {
        var List = [];
        var curr = this.head;
        while (curr.next != this.head) {
            List.push (curr.value);
            curr = curr.next;
        }
        List.push (curr.value);
        var print = console.log ;
        print (...List);
    }
}