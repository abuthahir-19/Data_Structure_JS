import { createReadStream } from "fs";
import { QueueLL } from "./QueueLL.js";

var reader = createReadStream ('Linked List Data Structure/Queue Data Structure/Linked List Representation/tests/input.txt');
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
    var n = +readLine();
    var list = readLine().split(' ').map(Number);
    var queueLL = new QueueLL ();
    for (const value of list) {
        queueLL.enQueue (value);
    }
    console.log ('Size of the queue :');
    console.log (queueLL.length());

    console.log ('Front element in the queue :');
    console.log (queueLL.frontElement());

    console.log ('Last element in the queue :');
    console.log (queueLL.LastElement());

    console.log ('To check the queue is empty :')
    console.log (queueLL.isEmpty());

    console.log ('Elements of the queue: ');
    while (queueLL.length()) {
        console.log (queueLL.deQueue());
    }

    console.log ('To check the queue is empty :')
    console.log (queueLL.isEmpty());
}