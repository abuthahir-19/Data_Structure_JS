import { createReadStream } from "fs";
import { QueueArr } from "./QueueArr.js";

var reader = createReadStream ('Linked List Data Structure/Queue Data Structure/Array Representation/tests/input.txt');
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
    var N = +readLine();
    var list = readLine().split(' ').map(Number);
    var queue = new QueueArr (N);
    for (const val of list) {
        queue.enQueue (val);
    }
    console.log ('Size of the queue :');
    console.log (queue.size());

    console.log ('Front element in the queue :');
    console.log (queue.frontElement());

    console.log ('Last element in the queue :');
    console.log (queue.rearElement ());

    console.log ('To check the queue is empty :')
    console.log (queue.isEmpty());
    console.log ('Elements of the queue :');
    var frontData = queue.deQueue();
    while (frontData != undefined) {
        console.log (frontData);
        frontData = queue.deQueue();
    }
    console.log ('To check the queue is empty :')
    console.log (queue.isEmpty());
}