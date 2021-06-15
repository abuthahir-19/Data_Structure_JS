import { createReadStream} from "fs";
import { DoublyList } from "./doublyList.js";

var readable = createReadStream ('./Linked List/Doubly Linked List/tests/insertion.txt');
readable.resume ();
readable.setEncoding ('utf-8');

var inputString = '';
var currentLine = 0;

readable.on ('data', data => {
    inputString += data;
});

readable.on ('end', _ => {
    inputString = inputString.trim().split ('\n').map(string => {
        return string.trim();
    });
    main ();
});

function readLine () {
    return inputString [currentLine++];
}

function main () {
    var list = readLine ().split(' ').map(Number);
    var dList = new DoublyList ();

    //Inserting an value always at the end of the list 
    for (const item of list) {
        dList.add (item);
    }
    console.log ('Elements of the Doubly Linked List :');
    dList.printList ();

    //Inserting a value at the specified position (position starts from 1);

    var [item, pos] = readLine ().split (' ').map (Number);
    console.log ('Inserting element %d at %dth position :', item, pos);
    dList.addAtPosition (item, pos);
    dList.printList ()

    //Inserting a value at the beginning of the list
    var begIns = +readLine ();
    console.log ('Inserting an element %d at the beginning', begIns);
    dList.addAtBeg (begIns);
    dList.printList ();

    //Inserting a value at the end of the list
    var endIns = +readLine ();
    console.log ('Inserting an element %d at the end :', endIns);
    dList.addAtEnd (endIns);
    dList.printList ();
}

/**
Input :
50 70 30 60 90 20 80 65 55 25
45 4
10
30

Output:
Elements of the Doubly Linked List :
50 70 30 60 90 20 80 65 55 25
Inserting element 45 at 4th position :  
50 70 30 45 60 90 20 80 65 55 25        
Inserting an element 10 at the beginning
10 50 70 30 45 60 90 20 80 65 55 25     
Inserting an element 30 at the end :    
10 50 70 30 45 60 90 20 80 65 55 25 30  
**/