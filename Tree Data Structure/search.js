//JavaScript Code to implement serach operation in Binary Search Tree

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
    var searchVal = +readLine ();
    console.log ('The element to be searched is %d', searchVal);
    console.log ('Search Result :');
    var res = bst.searchNode (root, searchVal);
    if (res) {
        console.log ('Element found');
    }
    else console.log ('Element not Found !!');
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

    searchNode (root, key) {
        if (root === null) {
            return null;
        }
        else if (key < root.data) {
            return this.searchNode (root.left, key);
        }
        else return root;
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
The element to be searched is 80
Search Result :
Element found

Input:
50 70 30 60 90 20 80 65 55 25
12

Output:
Elements of the tree :
25
30
50
55
60
65
70
80
90
The element to be searched is 80
Search Result :
Element found
PS F:\DS Algo Using JS> node "f:\DS Algo Using JS\Tree Data Structure\search.js"
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
The element to be searched is 12
Search Result :
Element not Found !!
**/