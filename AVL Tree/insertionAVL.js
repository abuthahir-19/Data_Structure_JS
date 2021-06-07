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
    console.log ('Elements of the avl tree :');
    avl.inorder (root);
}

class Node {
    constructor (element) {
        this.data = element;
        this.left = null;
        this.right = null;
        this.height = 1
    }
}

class AVL {
    constructor () {
        this.root = null;
    }

    getRootNode () {
        return this.root;
    }

    height (node) {
        if (node == null) return 0;
        else return node.height;
    }

    leftRotate (x) {
        let y = x.right;
        let t2 = y.left;
        x.right = t2;
        y.left = x;
        
        x.height = Math.max (this.height (x.left), this.height (x.right)) + 1;
        y.height = Math.max (this.height (y.left), this.height (y.right)) + 1;

        return y;
    }

    rightRotate (y) {
        let x = y.left;
        let t2 = x.right;
        x.right = y;
        y.left = t2;

        y.height = Math.max (this.height (y.left), this.height (y.right)) + 1;
        x.height = Math.max (this.height (x.left), this.height (x.right)) + 1;
        return x;
    }
    
    getBalanceFactor (node) {
        if (node == null) return 0;
        return (this.height (node.left) - this.height(node.right));
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

        else {
            node.height = 1 + Math.max (this.height (node.left) , this.height (node.right));

            let balanceFactor = this.getBalanceFactor (node);
            if (balanceFactor > 1) {
                if (key < node.left.data) {
                    return this.rightRotate (node);
                }
                else if (key > node.left.data) {
                    node.left = this.leftRotate (node.left);
                    return this.rightRotate (node);
                }
            }

            if (balanceFactor < -1) {
                if (key > node.right.data) {
                    return this.leftRotate (node);
                }
                else if (key < node.right.data) {
                    node.right = this.rightRotate (node.right);
                    return this.leftRotate (node);
                }
            }
            return node;
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