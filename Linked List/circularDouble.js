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
    cDList.printList ();
    // console.log ('Deleting element at the 4 position :');
    // cDList.removeAt (6);
    // console.log ('After deletion :');
    // cDList.printList();
    console.log ('Inserting a new element called 65 at position 5 :');
    cDList.insertAt (5, 65);
    console.log ('After Inserting List elements are :')
    cDList.printList();
    console.log ('Element at the 5th position :');
    console.log (cDList.getElementAt (5));
    console.log ('String version of output of the list elements :');
    console.log (cDList.toString ());
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
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.head.prev = this.tail;
        this.tail.next = this.head;
    }


    removeAt (position) {
        let count = 1;
        let curr = this.head;
        while (count != position) {
            curr = curr.next;
            count++;
        }
        var nextNode = curr.next;
        nextNode.prev = curr.prev;
        curr.prev.next = nextNode;
    }

    insertAt (position, element) {
        let count = 1;
        var curr = this.head;
        while (count != position) {
            curr = curr.next;
            count++;
        }
        var newNode = new Node (element);
        var temp = curr.prev;
        temp.next = newNode;
        newNode.prev = temp;
        newNode.next = curr;
        curr.prev = newNode;
    }

    getElementAt (position) {
        var count = 1;
        var curr = this.head;
        while (count != position) {
            curr = curr.next;
            count ++;
        }
        return curr.value;
    }

    toString () {
        var str = '';
        var curr = this.head;
        str += curr.value + ' ';
        curr = curr.next;
        while (curr != this.head) {
            str += curr.value + ' ';
            curr = curr.next;
        }
        return str;
    }

    // indexOf (element) {

    // }

    // delete (element) {

    // }

    // deleteHead () {

    // }

    // isEmpty () {
        
    // }

    // getHeadElement () {

    // }

    // getTailElement () {

    // }

    printList () {
        var List = [];
        var curr = this.head;
        List.push (curr.value);
        curr = curr.next;
        while (curr != this.head) {
            List. push(curr.value);
            curr = curr.next;
        }
        console.log (...List);
    }
}

/**
Input:
50 70 30 60 90 20 80 65 55 25

Output:

**/