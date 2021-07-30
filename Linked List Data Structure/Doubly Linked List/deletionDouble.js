import { createReadStream } from "fs";
import { DoublyList } from "./doublyList.js";

var readable = createReadStream ('./Linked List/Doubly Linked List/tests/deletion.txt');
readable.resume ();
readable.setEncoding ('utf-8');

var inputString = '';
var currentLine = 0;


readable.on ('data', data => {
    inputString += data;
});

readable.on ('end', _ => {
    inputString = inputString.trim().split ('\n').map (string => {
        return string.trim();
    });
    main ();
});

function readLine () {
    return inputString[currentLine++];
}

function main () {
    var list = readLine ().split (' ').map(Number);
    var DoubleList = new DoublyList ();
    for (const item of list) {
        DoubleList.add (item);
    }
    console.log ('Elements of the doubly Linked list :');
    DoubleList.printList ();

    //Deleting an item by specifying it explicitly
    var del = +readLine();
    console.log ('Element going to be deleted is %d', del);
    DoubleList.delete (del);
    console.log ('After deletion :');
    DoubleList.printList();

    //Deleting an item from the list by specifying its position
    var pos = +readLine ();
    console.log ('Deleting an item at position %d', pos);
    DoubleList.deleteAtPos (pos);
    console.log ('After deletion :');
    DoubleList.printList();

   //Deleting an item at the beginning of the list
    console.log ('Deleting an item at the beginning of the list :');
    DoubleList.deleteAtBeg();
    console.log ('After deletion :');
    DoubleList.printList();

    //Deleting an item at the end of the list
    console.log ('Deleting an item at the end of the list :');
    DoubleList.deleteAtEnd ();
    console.log ('After deletion :');
    DoubleList.printList();
}


/**
Input:
50 70 30 60 90 20 80 65 55 25
30
6

Output:
Elements of the doubly Linked list :
50 70 30 60 90 20 80 65 55 25
Element going to be deleted is 30
After deletion :
50 70 60 90 20 80 65 55 25
Deleting an item at position 6
After deletion :
50 70 60 90 20 65 55 25
Deleting an item at the beginning of the list :
After deletion :
70 60 90 20 65 55 25
Deleting an item at the end of the list :
After deletion :
70 60 90 20 65 55
**/