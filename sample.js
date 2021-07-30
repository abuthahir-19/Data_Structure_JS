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
    var n = +readLine ();
    var list = readLine().split(' ').map(Number);
    var bst = new BST ();
    var root = bst.getRootNode();
    for (const val of list) {
        bst.insert (val);
    }
    var root = bst.getRootNode();
    console.log ('Elements of the list : ');
    bst.printInorderTraversal (root);

    try {
        var d = +readLine ();
        console.log ('Element going to be deleted is %d', d);
        if (!isNaN (d)) {
            bst.delete (d);
            console.log ('Elements of the list after deletion : ');
            bst.printInorderTraversal (root);
        }else console.log ('Please enter a valid data !!');
    }catch (er) {
        console.log (er.name + ' : ' + er.message);
    }
    console.log (root);
}

class Node {
    constructor (key) {
        this.data = key;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor () {
        this.root = null;
    }

    getRootNode () {
        return this.root;
    }

    #insertNode (root, data) {
        if (root == null) return( new Node (data));

        if (data < root.data) {
            root.left = this.#insertNode (root.left, data);
        }
        else if (data > root.data) {
            root.right = this.#insertNode (root.right, data);
        }
        else {
            return root;
        }
        return root;
    }

    insert (data) {
        this.root = this.#insertNode (this.root, data);
    }

    #findMinNode (root) {
        var current = root;
        while (current.left != null) {
            current = current.left;
        }
        return current;
    }

    #deleteNode (root, data) {
        if (root == null) {
            throw new Error ('Element not found, Please enter valid input !!');
        }

        if (data < root.data) {
            root.left = this.#deleteNode (root.left, data);
            return root;
        }
        else if (data > root.data) {
            root.right = this.#deleteNode (root.right, data);
            return root;
        }

        else {
            if (root.left == null && root.right == null) {
                root = null;
                return root;
            }
            
            if (root.left == null) {
                root = root.right;
                return root;
            }
            else if (root.right == null) {
                root = root.left;
                return root;
            }

            var min = this.#findMinNode (root.right);
            root.data = min.data;
            root.right = this.#deleteNode (root.right, min.data);
        }
        return root;
    }

    delete (data) {
        this.root = this.#deleteNode (this.root, data);
    }

    printInorderTraversal (root) {
        if (root != null) {
            this.printInorderTraversal (root.left);
            console.log  (root.data);
            this.printInorderTraversal (root.right);
        }
    }
}