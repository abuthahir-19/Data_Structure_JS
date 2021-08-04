import { createReadStream } from "fs";
import { stackLinkedList } from "./stackLLAPi.js";

var reader = createReadStream ('Linked List Data Structure/Stack Representation of LL/Linked List Representation/tests/inputLL.txt');
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
    var n = +readLine () ;
    var list = readLine ().split(' ').map(Number);
    var stackLL = new stackLinkedList (n);
    for (const val of list) {
        stackLL.push (val);
    }
    console.log ('Total no of element in the stack :', stackLL.size());
    console.log ('Elements of the stack in (FILO) principle :');
    while (stackLL.size() != 0) {
        console.log (stackLL.pop());
    }
}