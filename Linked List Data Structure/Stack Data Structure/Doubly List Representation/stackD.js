import { createReadStream } from "fs";
import { stackDoubleList } from "./stackDouble.js";

var reader = createReadStream ('Linked List Data Structure/Stack Data Structure/Doubly List Representation/tests/input.txt');
reader.resume();
reader.setEncoding ('utf-8');

var inputString = '';
var currentLine = 0;

reader.on ('data', chunck => {
    inputString += chunck;
});

reader.on ('end', _ => {
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
    var list = readLine ().split(' ').map(Number);
    var stackD = new stackDoubleList ();
    for (const val of list) {
        stackD.push (val);
    }
    console.log ('Length of the list :');
    console.log (stackD.length());

    console.log ('Elements of the list :');
    console.log (...stackD.toArray());

    console.log ('Reversing the stack elements :');
    console.log (...stackD.reverse());

    console.log ('Elements of the Stack by poping out the keys :');
    while (stackD.length()) {
        console.log (stackD.pop());
    }

    console.log ('Length of the stack after poped out all elements :');
    console.log (stackD.length());
}