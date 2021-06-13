//JavaScript Program to Find out the Height of the Binary Search Tree.
import { createReadStream } from "fs";
import { BST } from "./bst.js";

var readable = createReadStream ('Tree Data Structure/treeInput.txt');

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
       bst.insert (val);
    }
    var root = bst.root;
    console.log ('Elements of the tree :');
    bst.inorder (root);
    console.log ('The Maximum depth or height of the Tree is :');
    console.log (bst.height (root));
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