import { createReadStream } from "fs";
import { List } from "./singleList.js";

var readable = createReadStream ('Linked List/Singly Linked List/tests/deletion.txt');

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
    for (const item of list) {
        listObj.add (item);
    }
    console.log ('Elements of the list :');
    listObj.printList ();

    // Specifying the element directly that is going to be deleted 

    var d = +readLine ();
    console.log ('Element going to be deleted is : %d', d);
    listObj.delete (d);
    console.log ('After deletion :');
    listObj.printList ();

    // Spcifying the position of the element in the list that is going to be deleted 
    var pos = +readLine ();
    console.log ('Deleting the element at the position %d', pos);
    listObj.removeAt (pos);
    console.log ('After deletion :');
    listObj.printList ();

    // Deleting the element at the beginning of the list

    console.log ('Elements before deletion :');
    listObj.printList ();
    listObj.removeAtBeg ();
    console.log ('After deletion :');
    listObj.printList ();

    // Deleting the element at the end of the list
    console.log ('Elements before deletion :');
    listObj.printList ();
    listObj.removeAtEnd ();
    console.log ('After deletion :');
    listObj.printList ();
}

/**
Input:
50 70 30 60 90 20 80 65 55 25
60
4

Output:
Elements of the list :
50 70 30 60 90 20 80 65 55 25
Element going to be deleted is : 60   
After deletion :
50 70 30 90 20 80 65 55 25
Deleting the element at the position 4
After deletion :
50 70 30 20 80 65 55 25
Elements before deletion :
50 70 30 20 80 65 55 25
After deletion :
70 30 20 80 65 55 25
Elements before deletion :
70 30 20 80 65 55 25
After deletion :
70 30 20 80 65 55
**/