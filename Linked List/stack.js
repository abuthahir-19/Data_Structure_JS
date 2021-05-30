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
    // var n = +readLine();
    var ar = readLine().split(' ').map(Number);

    var stack = new Stack();
    for (let i = 0; i < ar.length; i++) {
        stack.push (ar[i]);
    }
    console.log ('The elements of the stack :');
    stack.printList();
    // console.log ('The element at the top of the stack :', stack.pop());
    // console.log ('Stack elements after removing the top element :');
    // stack.printList();
}

class Node {
    constructor (element) {
        this.value = element;
        this.next = null;
    }
}

class Stack {
    constructor () {
        this.top = null;
        this.size = 0;
    }

    push (element) {
        var curr = this.top;
        var node = new Node (element);

        if (this.top == null) {
            this.top = node;
        }
        else {
            this.top = node;
            node.next = curr;
        }
        this.size += 1;
    }

    pop () {
        var curr = this.top;
        this.top = curr.next;
        return curr.value;
    }

    peek () {
        return this.top.value;
    }

    Length () {
        return this.size ;
    }
    
    printList () {
        var current = this.top;

        var List = [];
        while (current) {
            List.push (current.value);
            current = current.next;
        }
        console.log (...List);
    }
}