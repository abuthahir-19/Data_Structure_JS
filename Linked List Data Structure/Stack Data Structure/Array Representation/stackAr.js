import { StackArr } from "./stackLL.js";
import { createReadStream } from "fs";

var reader = createReadStream ('Linked List Data Structure/Stack Representation of LL/tests/stackarinput.txt');
reader.resume();
reader.setEncoding ('utf-8');

var inputString = '';
var currentLine = 0;

reader.on ('data', chunk => {
    inputString += chunk;
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
    var n = +readLine();
    var list = readLine ().split(' ').map(Number);
    var stack = new StackArr(n);
    for (const val of list) {
        stack.push (val);
    }
    console.log ('Elements of the stack :');
    let topVal = stack.pop();
    while (topVal != 'Stack Underflow') {
        console.log (topVal);
        topVal = stack.pop();
    }
}