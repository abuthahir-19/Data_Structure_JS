const fs = require('fs');
const process = require('process');

var readable = fs.createReadStream ('foo.txt');

readable.resume();
readable.setEncoding ('utf-8');

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
    const n = +readLine ();
    var ar = readLine ().split(' ').map(Number);
    var listObj = new LinkedList();
    for (let i = 0; i < n; i++) {
        listObj.add (ar[i]);
    }

    var index = +readLine();
    console.log ('The elements of the linked list before insertion :');
    listObj.printList();
    
    // console.log ('The elements of the list after removing the element before the index ', index);
    // listObj.removeAtPosBefore (index);
    // listObj.printList();


    console.log ('The elements of the list removing after :');
    listObj.removeAtPosAfter (index);
    listObj.printList();
}

class Node {
    constructor (element) {
        this.value = element;
        this.next = null;
    }
}

class LinkedList {
    constructor () {
        this.head = null;
        this.size = 0;
    }
    
    add (element) {
        var node = new Node (element);
        var current;

        if (this.head == null) {
            this.head = node;

        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size+=1;
    }

    remove (element) {
        var curr, prev;
        curr = this.head;
        if (curr.value == element) {
            this.head = curr.next;
        }
        else {
            while (curr.value != element) {
                prev = curr;
                curr = curr.next;
            }prev.next = curr.next;
        }
    }

    insertAtPosAfter (element, index) {
        var curr = this.head;
        var count = 0, prev;
        var newNode = new Node (element);
        while (curr) {
            count += 1;
            prev = curr;
            curr = curr.next;
            if (count == index) {
                prev.next = newNode;
                newNode.next = curr;
                break;
            }
        }
    }

    insertAtPosBefore (element, index) {
        var curr = this.head;
        var count = 0, prev;
        var newNode = new Node (element);
        while (curr) {
            count += 1;
            if (count == index) {
                prev.next = newNode;
                newNode.next = curr;
                break;
            }
            prev = curr;
            curr = curr.next;
        }
    }

    removeAtPosAfter (index) {
        var curr = this.head;
        var count = 0, prev;
        while (curr) {
            count += 1;
            prev = curr;
            curr = curr.next;
            if (count == index) {
                prev.next = curr.next;
            }
        }
    }

    removeAtPosBefore (index) {
        var curr = this.head;
        var count= 1, prev;
        while (curr) {
            count += 1;
            if (count == index-1) {
                curr.next = curr.next.next;
            }
            curr = curr.next;
        }
    }

    
    printList () {
        console.log ('Element stored in the linked list :');
        var curr = this.head;
        var List = [];
        while (curr) {
            List.push (curr.value);
            curr = curr.next;
        }
        console.log (...List);
    }
}