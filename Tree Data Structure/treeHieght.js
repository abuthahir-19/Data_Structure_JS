//JavaScript Program to Find out the Height of the Binary Search Tree.

const fs = require('fs');

var readable = fs.createReadStream ('foo.txt');

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
    var list = readLine().split(' ').map(Number);
    var bst = new BST ();
    for (const val of list) {
        var root = bst.getRootNode ();
        var newNode = new Node (val);
        bst.insert (root, newNode);
    }
    console.log ('Elements of the tree :');
    bst.inorder (root);
    console.log ('The Maximum depth or height of the Tree is :');
    console.log (bst.treeHieght (root));
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

    insert (rootNode, newNode) {
        if (rootNode === null) {
            this.root = newNode;
        }

        else if (newNode.data < rootNode.data) {
            if (rootNode.left === null) {
                rootNode.left = newNode;
            }
            else this.insert (rootNode.left, newNode);
        }
        else if (newNode.data > rootNode.data) {
            if (rootNode.right === null) {
                rootNode.right = newNode;
            }
            else this.insert (rootNode.right, newNode);
        }
    }

    treeHieght (root) {
        if (root == null) return -1;
        if (root.left === null && root.right === null) {
            return 0;
        }
        if (root.left === null) {
            return this.treeHieght (root.right) + 1;
        }
        if (root.right === null) {
            return this.treeHieght (root.left) + 1;
        }
        const lHeight = this.treeHieght (root.left);
        const rHeight = this.treeHieght (root.right);
        return Math.max(lHeight, rHeight) + 1;
    }

    inorder (rootNode) {
        if (rootNode !== null) {
            this.inorder (rootNode.left);
            console.log (rootNode.data);
            this.inorder (rootNode.right);
        }
    }
}

/**
Input:
50 70 30 60 90 20 80 65 55 25


Output:
Elements of the tree :
20
25
30
50
55
60
65
70
80
90
The total number of external nodes in the tree is :
7
**/