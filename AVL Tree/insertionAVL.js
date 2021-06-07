const fs = require('fs');

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
    var list = readLine ().split(' ').map(Number);
    var avl = new AVL();
    var root = avl.getRootNode ();
    for (const val of list) {
        root = avl.insertNode (root, val);
    }
    var root = avl.getRootNode ();
    avl.inorder (root);
}

class Node {
    constructor (element) {
        this.data = element;
        this.left = null;
        this.right = null;
    }
}

class AVL {
    constructor () {
        this.root = null;
    }

    getRootNode () {
        return this.root;
    }
    
    insertNode (node, key) {
        if (node == null) {
            return (new Node (key));
        }

        if (key < node.data) {
            node.left = this.insertNode (node.left, key);
            return node;
        }

        else if (key > node.data) {
            node.right = this.insertNode (node.right, key);
            return node;
        }

        else return node;
    }

    inorder (root) {
        if (root !== null) {
            this.inorder (root.left);
            console.log (root.data);
            this.inorder (root.right);
        }
    }
}