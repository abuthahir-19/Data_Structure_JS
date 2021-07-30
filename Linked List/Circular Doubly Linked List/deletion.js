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
    var deleteObj = new CircularDouble();
    for (const val of list) {
        deleteObj.add (val);
    }
    console.log ('List values :');
    console.log (...deleteObj.Values());


    console.log ('Deleting the specified value (say 30) :');
    deleteObj.delete(30);
    console.log (...deleteObj.Values());

    var ind = +readLine();
    console.log ('Deleting the element at index %d', ind);
    deleteObj.deleteAtPosition (ind);
    console.log (...deleteObj.Values());

    console.log ('Deleting the element at the front of the list :');
    deleteObj.deleteAtFront ();
    console.log (...deleteObj.Values());

    console.log ('Deleting the element at the end of the list :');
    deleteObj.deleteAtBack ();
    console.log (...deleteObj.Values());
}