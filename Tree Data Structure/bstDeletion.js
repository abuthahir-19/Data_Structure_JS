//JavaScript Code to implement Deletion in Binary Search Tree

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
    var root = bst.getRootNode ();
    for (const val of list) {
        bst.insert (val);
    }
    root = bst.getRootNode ();
    console.log ('Elements of the tree :');
    bst.inorder (root);
    console.log ('Count of the nodes before deletion :');
    console.log (bst.count());
    var d = +readLine();
    console.log ('The element to be deleted is %d', d);
    bst.delete (d);
    console.log ('After deletion the tree elements are :');
    bst.inorder (root);
    console.log ('Count of the nodes after deletion :');
    console.log (bst.count());
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