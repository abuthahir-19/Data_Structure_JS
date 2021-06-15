import { createReadStream } from "fs";
import { List } from "./singleList.js";

var readable = createReadStream ('Linked List/Singly Linked List/tests/insertion.txt');

readable.resume();
readable.setEncoding ('utf-8');

let inputString = '';
let currentLine = 0;

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
    var list = readLine ().split(' ').map(Number);
    var listObj = new List ();
    //Inserting an element always at the end of the linked list
    for (const item of list) {
        listObj.add (item);
    }
    console.log ('Elements of the list :');
    listObj.printList ();

    // Inserting an element at the specified position in the linked list
    var [pos, item] = readLine ().split (' ').map (Number);
    console.log ('Elements before insertion :');
    listObj.printList ();
    listObj.addAtPositon (item, pos);
    console.log ('After insertion :');
    listObj.printList();

    //Inserting an element at the beginning of the linked list
    var begItem = +readLine ();
    console.log ('Elements of the list before insertion :');
    listObj.printList ();
    listObj.addAtBeg (begItem);
    console.log ('After insertion :');
    listObj.printList ();

    //Inserting an element at the end of the linked list
    var endItem = +readLine ();
    console.log ('Elements of the list before insertion :');
    listObj.printList ();
    listObj.addAtEnd (endItem);
    console.log ('After insertion :');
    listObj.printList ();
}

/**
Input:
50 70 30 60 90 20 80 65 55 25
5 12
10
30

Output:
Elements of the list :
50 70 30 60 90 20 80 65 55 25
Elements before insertion :
50 70 30 60 90 20 80 65 55 25
After insertion :
50 70 30 60 12 90 20 80 65 55 25
Elements of the list before insertion :
50 70 30 60 12 90 20 80 65 55 25
After insertion :
10 50 70 30 60 12 90 20 80 65 55 25
Elements of the list before insertion :
10 50 70 30 60 12 90 20 80 65 55 25
After insertion :
10 50 70 30 60 12 90 20 80 65 55 25 30
**/