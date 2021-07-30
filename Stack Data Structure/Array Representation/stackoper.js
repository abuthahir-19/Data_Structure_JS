import { createReadStream } from "fs";
import { Stack } from "./stackArr.js";

var readable = createReadStream ('Stack Data Structure/Array Representation/input.txt');
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
    var stack = new Stack();
    var list = readLine().split(' ').map(Number);
    for (const val of list) {
        stack.push (val);
    }
    console.log (stack.peek())
    console.log ('Elements of the Stack :');
    var l = stack.size();
    for (let i = 0; i < l; i++) {
        console.log (stack.pop());
    }
}