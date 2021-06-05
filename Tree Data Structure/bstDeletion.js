//JavaScript Code to implement Deletion in Binary Search Tree

const fs = require('fs');

var readable = fs.createReadStream (__dirname + '\\treeInput.txt');

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
    var d = +readLine();
    console.log ('The element to be deleted is %d', d);
    bst.deleteNode (root, d);
    console.log ('After deletion the tree elements are :');
    bst.inorder (root);
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

    findMinNode (root) {
        var current = root.right;
        while (current && current.left !== null) {
            current = current.left;
        }
        return current;
    }

    deleteNode (rootNode, element) {
        if (rootNode === null) {
            return 'Tree Empty';
        }
        else if (element < rootNode.data) {
            rootNode.left = this.deleteNode (rootNode.left, element);
            return rootNode;
        }
        else if (element > rootNode.data) {
            rootNode.right = this.deleteNode (rootNode.right, element);
            return rootNode;
        }
        else {
            if (rootNode.left === null && rootNode.right === null) {
                rootNode = null;
                return rootNode;
            }
            else if (rootNode.left === null) {
                rootNode = rootNode.right;
                return rootNode;
            }
            else if (rootNode.right === null) {
                rootNode = rootNode.left;
                return rootNode;
            }
            var min = this.findMinNode (rootNode);
            rootNode.data = min.data;
            rootNode.right = this.deleteNode (rootNode.right, min.data);
            return rootNode;
        }
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
80

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
The element to be deleted is 80       
After deletion the tree elements are :
20
25
30
50
55
60
65
70
90
**/