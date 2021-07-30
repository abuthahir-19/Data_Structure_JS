import { createReadStream } from "fs";
import { CircularList } from "./circularList.js";

var readable = createReadStream ('Linked List/Circular Linked List/tests/insertion.txt');

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
    var n = +readLine();
    var list = readLine().split(' ').map(Number);
    var circularList = new CircularList();
    for (const val of list) {
        circularList.add (val);
    }
    console.log ('Initial List :');
    console.log (...circularList.Values());
    console.log ('After inserting a key at specified position : ');
    var [key, pos] = readLine().split(' ').map(Number);
    console.log ('In this case pos = %d and key = %d', pos, key);
    circularList.addAtPosition (key, pos);
    console.log (...circularList.Values());
    console.log ('After inserting a value (say 5) at beginning :');
    circularList.addAtBeg (5)
    console.log (...circularList.Values());
    console.log ('After inserting a value (say 55) at end :');
    circularList.addAtEnd (55)
    console.log (...circularList.Values());
}

/**
Input :
5
10 20 30 40 50
15 1

Output:
Initial List :
10 20 30 40 50
After inserting a key at specified position : 
In this case pos = 1 and key = 15
10 15 20 30 40 50
After inserting a value (say 5) at beginning :
5 10 15 20 30 40 50
After inserting a value (say 55) at end :     
5 10 15 20 30 40 50 55

**/