const fs = require('fs');

var readable = fs.createReadStream (__dirname + '\\inputFile.txt');
readable.resume ();
readable.setEncoding ('utf-8');

let inputString = '';
let currentLine = 0;

readable.on ('data', inputStdin => {
    inputString += inputStdin;
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
    var n = +readLine();
    var ar = readLine().split(' ').map(Number);
    var obj = new Queue();

    for (let i = 0; i < ar.length; i++) {
        obj.insert (ar[i]);
    }

    console.log ('The elements of the Queue are :');
    obj.printQueue();
    
    // console.log ('Removing the specified element :');
    // obj.removeElement (+readLine());
    // obj.printQueue();

    const [element, index] = readLine().split(' ').map(Number);
    console.log ('Inserting the element at the specified position :');
    obj.insertAtIndex (element, index);
    obj.printQueue();
}

class Node {
    constructor (element) {
        this.value = element;
        this.next = null;
    }
}

class Queue {
    constructor () {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    insert (element) {
        var node = new Node (element);

        if (this.front == null && this.rear == null) {
            this.front = node;
            this.rear = node;
        }
        else {
            var curr = this.rear;
            curr.next = node;
            this.rear = node;
        }
        this.size += 1;
    }

    remove () {
        var retVal = this.front;
        this.front = retVal.next;
        return retVal.value;
    }

    peek () {
        return this.front.value;
    }

    removeElement (element) {
        var curr = this.front, prev;
        while (curr.value != element) {
            prev = curr;
            curr = curr.next;
        }
        prev.next = curr.next;
        this.size--;
    }

    insertAtIndex (element, index) {
        var curr = this.front,
        count = 0;
        var node = new Node (element);

        while (curr) {
            count++;
            if (count == index) break;
            curr = curr.next;
        }
        var nodeNext = curr.next;
        curr.next = node;
        node.next = nodeNext;
        this.size += 1;
    }

    
    printQueue () {
        var curr = this.front;
        var queue = [];
        while (curr) {
            queue.push (curr.value);
            curr = curr.next;
        }
        console.log (...queue);
        console.log ('The size of the list is :', this.size);
    }
}