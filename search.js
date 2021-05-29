const process = require('process');
const fs = require('fs');
var readable = fs.createReadStream ('foo.txt');

readable.resume();
readable.setEncoding ('utf-8');

let inputString = '';
let currentLine = 0;
let count = 0;

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
    let t = +readLine();
    let i =0;
    for (; i < t; i++) {
        let n = +readLine();
        let ar = readLine ().split(' ').map(Number);
        let tree = new BST();
        root = null;
        for (let i = 0; i < n; i++) {
            root = tree.newNode (root, ar[i]);
        }
        console.log (tree.minimumRoot (root));
    }
}

class Node {
    constructor (element) {
        this.data = element;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor () {
        this.root = null;
    }

    newNode (root, data) {
        if (root == null) {
            root = new Node (data);
        }else if (data < root.data) {
            root.left = this.newNode (root.left, data);
        }else {
            root.right = this.newNode (root.right, data);
        }
        return root;
    }

    

    search (root, x) {
        if (root == null) return 0;
        if (root.data == x) {
            return 1;
        }
        else if (x < root.data) {
            return this.search (root.left, x);
        }
        else {
            return this.search (root.right, x);
        }
    }

    inorder (root) {
        var ar = [];
        if (root !== null) {
            this.inorder (root.left);
            ar.push (root.data);
            this.inorder (root.right);
        }
    }
}