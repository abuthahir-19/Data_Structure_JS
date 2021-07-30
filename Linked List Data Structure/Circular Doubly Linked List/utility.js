import { CircularDouble } from "./circulardouble.js";
import { createReadStream } from "fs";

var readable = createReadStream ("Linked List/Circular Doubly Linked List/test/deletion.txt");
readable.resume();
readable.setEncoding ("utf-8");

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
    var n = +readLine ();
    var list = readLine().split(' ').map(Number);
    var utilObj = new CircularDouble();
    for (const val of list) {
        utilObj.add (val);
    }
    console.log ('List values :');
    console.log (...utilObj.Values());

    console.log ('Length of the list :');
    console.log (...utilObj.Values());

    console.log ('Index of the specified element :');
    utilObj.indexOf (10) == -1 ? console.log ('Element not found'):
    console.log ('Element found in the list at %d', utilObj.indexOf(10));

    console.log ('Get Element at the specified position :');
    console.log (utilObj.getElementAt (5));

    console.log ('Array representation :');
    console.log (utilObj.toArray());

    console.log ('String representation :');
    console.log (utilObj.toString().split(',').join(' '));

    console.log ('To find the list is empty :');
    console.log (utilObj.isEmpty());

    console.log ('Get the value stored in the head position :');
    console.log (utilObj.getHead());

    console.log ('Get the element at the end of the list :');
    console.log (utilObj.getTail());
}