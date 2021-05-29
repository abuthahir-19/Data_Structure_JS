const fs = require('fs');

var readable = fs.createReadStream ('./foo.txt');
readable.resume();
readable.setEncoding ('utf-8');

var inputString = '';
var currentLine = 0;

readable.on ('data', inputStdin => {
    inputString += inputStdin;
});

readable.on ('end', _ => {
    inputString = inputString.trim().split ('\n').map(string => {
        return string.trim();
    });
    main ();
});

function readLine () {
    return inputString[currentLine++];
}

function main () {
    var list = readLine().split(' ').map(Number);
    var k = +readLine ();
    var bst = new BST();

    for (const val of list) {
        var root = bst.getRootNode();
        var newNode = new Node (val);
        bst.insert (root, newNode);
    }
    var root = bst.getRootNode ();
    console.log ('Elements of the tree :');
    bst.inorder (root);   
    // console.log ('Deleting 65 :');
    // bst.delete (root, 60);
    // console.log ('Elements after deletion :');
    // bst.inorder (root);
    console.log ('Searching the value 65 :');
    console.log (bst.search (root, 77) == null ? 'not found' : 'found');
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

    getRootNode () {
        return this.root;
    }

    search (root, key) {
        if (root == null) return root;
        else if (root.data == key) {
            return root;
        }

        else if (key < root.data) {
            return this.search (root.left, key);
        }

        else if (key > root.data) {
            return this.search (root.right, key);
        }
    }

    insert (root, newNode) {
        if (root === null) {
            this.root = newNode;
        }
        else if (newNode.data < root.data) {
            if (root.left === null) {
                root.left = newNode;
            }
            else this.insert (root.left, newNode);
        }
        else if (newNode.data > root.data) {
            if (root.right == null) {
                root.right = newNode;
            }
            else this.insert (root.right, newNode);
        }
    }

    inordersuccesor (root) {
        if (root.left == null) return root;
        else return this.inordersuccesor (root.left);
    }

    delete (root, key) {
        if (this.root == null) {
            return null;
        }
        else if (key < root.data) {
            root.left = this.delete (root.left, key);
            return root;
        }
        else if (key > root.data) {
            root.right = this.delete (root.right, key);
            return root;
        }
        else {
            if (root.left === null && root.right === null) {
                root = null;
                return root;
            }

            else if (root.left === null) {
                root = root.right;
                return root;
            }
            
            else if (root.right === null) {
                root = root.left;
                return root;
            }

            var maxLeft = this.inordersuccesor (root.right);
            root.data = maxLeft.data;
            root.right = this.delete (root.right, maxLeft.data);
            return root;
        }
    }

    inorder (root) {
        if (root !== null) {
            this.inorder (root.left);
            console.log (root.data);
            this.inorder (root.right);
        }
    }
}

/**
10
50 70 30 60 90 20 80 65 55 25
**/