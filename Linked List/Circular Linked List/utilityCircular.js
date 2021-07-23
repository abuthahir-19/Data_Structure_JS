import { createReadStream, read } from "fs";
import { CircularList } from "./circularList.js";

var readable = createReadStream ('Linked List/Circular Linked List/tests/utility.txt');
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
    
    console.log ('To know about the data stored in head of the list :');
    console.log (circularList.getHead().data);
    console.log ('To know about the data stored in the tail of the list :');
    console.log (circularList.getTail().data);

    console.log ('To know whether the list is empty or not :');
    console.log (circularList.isEmpty());

    console.log ('Whether the value is present in the list or not :');
    console.log ('Checking whether 25 is present or not :');
    console.log (circularList.isPresent (25)); //false

    console.log ('Checking whether 20 is present or not :');
    console.log (circularList.isPresent (20)); //true

    console.log ('Index of the element :');
    console.log ('Index of 20 : ' + circularList.indexOf (20));

    console.log ('Converting a list to Array :');
    console.log (circularList.toArray());

    console.log ('Converting a list to String :');
    console.log (circularList.toString().split(',').join(' '));
}