const fs = require('fs');

var readable = fs.createReadStream (__dirname + '\\inputFile.txt');
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
    var cirLs = new CircularList();
    for (let i = 0; i < list.length-1; i++) {
        cirLs.insert (list[i]);
    }    
    cirLs.lastInsert (list[list.length-1]);
    console.log ('Elements of the list :');
    cirLs.printList()
}

class Node {
    constructor (element) {
        this.value = element;
        this.next = null;
    }
}

class CircularList {
    constructor () {
        this.head = null;
    }

    insert (element) {
        var node = new Node (element);
        var current = this.head;
        if (this.head == null) {
            this.head = node;
        }
        else {
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }

    lastInsert (element) {
        var node = new Node (element);
        var curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = node;
        node.next = this.head;
    }
    
    printList () {
        var current = this.head;
        var List = [];
        while (current.next != this.head) {
            List.push (current.value);
            current = current.next;
        }
        List.push (current.value);
        console.log (...List);
    }
}

/**
Input:
50 70 30 60 90 20 80 65 55 25

Output:
50 70 30 60 90 20 80 65 55 25
**/