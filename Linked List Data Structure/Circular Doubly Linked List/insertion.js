import { createReadStream } from "fs";
import { CircularDouble } from "./circulardouble.js";

var readable = createReadStream ("Linked List/Circular Doubly Linked List/test/insertion.txt");
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
    var n = +readLine();
    var list = readLine().split(' ').map(Number);
    var obj = new CircularDouble ();
    for (const val of list) {
        obj.add (val);
    }
    console.log ('Initial List values :');
    console.log (...obj.Values());
    
    console.log ('Inserting a element at specified position : ');
    var [key, index] = readLine().split(' ').map(Number);

    console.log ('Element = %d, Index = %d', key, index);
    obj.addAtPosition (key, index);
    console.log ('List elements after insertion :');
    console.log (...obj.Values());

    var [frontKey, backKey] = readLine ().split(' ').map(Number);
    console.log ('Inserting an element (say %d) at the front of the circular doubly linked list : ', frontKey);
    obj.addAtFront (frontKey);
    
    console.log ('List elements after insertion :');
    console.log (...obj.Values());

    console.log ('Inserting an element (say %d) at the end of the circular doubly linked list : ', backKey);
    obj.addAtBack(backKey);
    
    console.log ('List elements after insertion :');
    console.log (...obj.Values());

    console.log ('Length of the list can be predicted using the utility :');
    console.log (obj.Length());
}