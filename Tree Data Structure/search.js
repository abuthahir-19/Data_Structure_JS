//JavaScript Code to implement serach operation in Binary Search Tree
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
    var searchVal = +readLine ();
    console.log ('The element to be searched is %d', searchVal);
    console.log ('Search Result :');
    if (bst.find (searchVal) == 'true') {
        console.log ('Element found');
    }
    else console.log ('Element not Found !!');
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