import {createReadStream} from 'fs';
import {AVL} from './avltree.js';

var readable = createReadStream ('AVL Tree/avlinput.txt');

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
    var list = readLine ().split(' ').map(Number);
    var avl = new AVL();
    var root = avl.getRootNode ();
    for (const val of list) {
        avl.insert (val);
    }
    root = (avl.root)
    console.log ('Elements of the avl tree :');
    avl.inorder (root);
    console.log ('Node with Minimum element in AVL Tree :');
    console.log (avl.min());
    console.log ('Maximum element in the AVL Tree :');
    console.log (avl.max ());
}