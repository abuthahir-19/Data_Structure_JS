import { createReadStream } from "fs";
import { StackArr } from './Linked List Data Structure/Stack Data Structure/Array Representation/stackArray.js'
var readable = createReadStream ('./input.txt');
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
    var list = readLine ().split (' ').map(Number);
    var stack = new StackArr (n)
    for (const val of list) {
        stack.push (val);
    }
    console.log ('Elements of the stack :');

    while (stack.size()) {
        console.log (stack.pop());
    }
}
