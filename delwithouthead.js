const fs = require('fs');

var readable = fs.createReadStream ('./foo.txt');

readable.resume();
readable.setEncoding ('utf-8');

var inputString = '';
var currentLine =0;

readable.on ('data', data => {
    inputString += data;
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
    var list = readLine().split(' ').map(Number);
    var Ls = new LinkedList ();
    for (const val of list) {
        Ls.insert (val);
    }
    print = console.log ;
    print ('Elements of the list are :');
    Ls.printList();
}

class Node {
    constructor (element) {
        this.data = element;
        this.next = null;
    }
}

class LinkedList {
    constructor () {
        this.head = null;
    }

    insert (element) {
        var node = new Node (element);
        if (this.head == null) {
            this.head = node;
        }
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }

    findNode (head, search_val) {
        var current = head;
        while (current != null) {
            if (current.data == search_val) break;
            current = current.next;
        }
        return current;
    }

    deleteNode (node) {
        var temp = node.next;
        node.data = temp.data;
        node.next = temp.next;
    }

    isLengthOddOrEven () {
        var count = 0;
        var current = this.head;
        while (current !== null) {
            count += 1;
            current = current.next;
        }
        return count % 2 == 0 ? true: false;
    }

    printList (head) {
        var current = this.head;
        var List = [];
        while (current !== null) {
            List.push (current.data);
            current = current.next;
        }
        print (...List);
    }
}