import { createReadStream } from "fs";

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
    var obj = {};
    var vertex = 1;
    if (!obj[vertex]) {
        obj[vertex] = [];
    }
    console.log(obj);
}