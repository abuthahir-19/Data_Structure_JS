import { createReadStream } from "fs";
import { PriorityQueueLL } from "./priorQueueLL.js";

var reader = createReadStream ('Priority Queue/Linked List Implementation/tests/input.txt');
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
    var queueLL = new PriorityQueueLL ();
    var data = readLine();
    while (data != undefined) {
        var [key, priority] = data.split(' ').map(Number);
        queueLL.enQueue (key, priority);
        data = readLine();
    }

    console.log ('Length of the queue before dequeue operation :');
    console.log (queueLL.length());

    console.log ('\nElements of the queue :');
    while (queueLL.length()) {
        console.log (queueLL.deQueue());
    }

    console.log ('\nLength of the queue after dequeue operation :');
    console.log (queueLL.length());
}