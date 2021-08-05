import { createReadStream } from "fs";
import { PriorityQueue } from "./priorQueueAr.js";

var reader = createReadStream ('Priority Queue/Array Implementation/tests/input.txt');
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
    var inp = readLine ();
    var priorityQueue = new PriorityQueue ()
    while (inp != undefined) {
        var [key, prio] = inp.split(' ').map(Number);
        priorityQueue.enQueue (key, prio);
        inp = readLine();
    }
    console.log ('Length of the Queue :');
    console.log (priorityQueue.length());

    console.log ('Front element :');
    console.log (priorityQueue.frontElement());

    console.log ('Last element :');
    console.log (priorityQueue.lastElement());

    console.log ('Elements of the Queue :');
    while (priorityQueue.length()) {
        console.log (priorityQueue.deQueue());
    }
}