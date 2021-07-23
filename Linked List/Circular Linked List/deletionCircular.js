import { createReadStream } from "fs";
import { CircularList } from "./circularList.js";

var readable = createReadStream ('Linked List/Circular Linked List/tests/deletion.txt');

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
    var delKey = +readLine();
    console.log ('Element to be deleted  is %d:', delKey);
    circularList.remove (delKey);
    console.log ('After removal of element list becomes :');
    console.log (...circularList.Values());
    console.log ('After removing the element at position (say 3) :');
    circularList.removeAtPosition (3);
    console.log ('After removal of element at the specified position list becomes :');
    console.log (...circularList.Values());
    console.log ('After the removal of element at the beginning :');
    circularList.removeAtBeg();
    console.log (...circularList.Values());
    console.log ('After the removal of element at the end :');
    circularList.removeAtEnd();
    console.log (...circularList.Values());
}

/**
Input :
6
10 16 20 30 40 50
16

Output:
Initial List :
10 16 20 30 40 50
Element to be deleted  is 16:
After removal of element list becomes :
10 20 30 40 50
After removing the element at position (say 3) :
After removal of element at the specified position list becomes :
10 20 30 50
After the removal of element at the beginning :
20 30 50
After the removal of element at the end :
20 30
**/