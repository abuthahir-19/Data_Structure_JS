const fs = require('fs');
const path = require('path');

var readable = fs.createReadStream (__dirname + '\\avlinput.txt');
readable.resume();
readable.setEncoding ('utf-8');

var inputString = '';
var currentLine = 0;

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
    const list = readLine();
    console.log (list);
}

class Node {
    constructor (element) {
        this.data = element;
        this.left = null;
        this.right = null;
        this.balance = 0;
    }
}

class AVL {
    constructor () {
        this.root = null;
    }
}