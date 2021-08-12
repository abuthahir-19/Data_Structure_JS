import { createReadStream } from "fs";
import { minHeap } from "./heap.js";

var reader = createReadStream ('Heap Data Structure/Min Heap/tests/input.txt');
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
    var list = readLine().split(' ').map(Number);
    var heapM = new minHeap ();
    for (const val of list) {
        heapM.insert (val);
    }
    console.log ('Elements of the heap :');
    console.log (...heapM.getList());
}