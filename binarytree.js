const fs = require('fs');

var readable = fs.createReadStream ('foo.txt');

readable.resume ();
readable.setEncoding ('utf-8');

let inputString = '';
let currentLine = 0;
var inode = 0, enode = 0, nodeCount = 1, height = 0;

readable.on ('data', inputStdin => {
    inputString += inputStdin;
});

readable.on ('end', _ => {
    inputString = inputString.trim().split ('\n').map (string => {
        return string.trim();
    });

    main ();
});

function readLine () {
    return inputString[currentLine++];
}

function main () {
    // const n = +readLine ();
    var list = readLine().split(' ').map(Number);
    var bst = new BST();
    for (let i = 0; i < list.length; i++) {
        let element = list[i];
        bst.insert (element);
    }
    console.log ('Elements of the list :'); 
    var root = bst.getRootNode();
    bst.inorderTraversal (root);
    // console.log ('Count of the no of the nodes present in the tree :');
    // bst.noOfNodes (root);
    // console.log (nodeCount);
    // console.log ('Count of the non-leaf nodes :');
    // bst.internalNodes (root);
    // console.log (inode);
    // console.log ('Count of the leaf nodes in the tree :');
    // bst.externalNodes (root);
    // console.log (enode);
    console.log ('Elements of the tree after deleting 90 :');
    bst.delete (80);
    bst.inorderTraversal (root);
    // bst.inorderTraversal (root);
    // console.log ('Minimum value in the tree');
    // console.log (bst.minValue (root));
}

class Node {
    constructor (element) {
        this.data = element;
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

    insert (element) {
        var newNode = new Node (element);

        if (this.root == null) {
            this.root = newNode;
        }
        else {
            this.insertNode (this.root, newNode);    
        }
    }

    nodeWithLeftChild (root) {
        if (root === null) return root;
        if (root.left != null && root.right == null) {
            count += 1;
        }
        this.nodeWithLeftChild (root.left);
        this.nodeWithLeftChild (root.right);
    }

    findMaxNode (root) {
        var current = root;
        while (current && current.right != null) {
            current = current.right;
        }
        return current;
    }

    findMinNode (root) {
        var current = root.right;
        while (current && current.left != null) {
            current = current.left;
        }
        return current;
    }

    noOfNodes (root) {
        if (root == null) return 0;
        else {
            if (root.left != null) nodeCount += 1;
            if (root.right != null) nodeCount += 1;
        }
        this.noOfNodes (root.left);
        this.noOfNodes (root.right);
    }

    internalNodes (root) {
        if (root != null) {
            if (root.left !== null || root.right !== null) inode +=1;
            if (root.left !== null) this.internalNodes (root.left);
            if (root.right !== null) this.internalNodes (root.right);
        }
    }
    
    externalNodes (root) {
        if (root !== null) {
            if (root.left === null && root.right === null) enode += 1;
            if (root.left !== null) this.externalNodes (root.left);
            if (root.right !== null) this.externalNodes (root.right);
        }
    }

    treeHeight (root) {
        if (root === null) return height;
        else {
            var leftHeight = this.treeHeight (root.left);
            var rightHeight = this.treeHeight (root.right);
            if (leftHeight > rightHeight) return leftHeight + 1;
            else return rightHeight + 1;
        }
    }

    insertNode (rootNode, newNode) {
        if (rootNode.data > newNode.data) {
            if (rootNode.left == null) 
                rootNode.left = newNode;
            else this.insertNode (rootNode.left, newNode);
        }
        else {
            if (rootNode.right == null) 
                rootNode.right = newNode;
            else this.insertNode (rootNode.right, newNode);
        }
    }

    minValue (root) {
        var current = root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    delete (data) {
        this.root = this.deleteNode (this.root, data);
    }

    deleteNode (root, key) {
        if (root == null) return null;
        else if (key < root.data) {
            root.left = this.deleteNode (root.left, key);
        }
        else if (key > root.data) {
            root.right = this.deleteNode (root.right, key);
        }
        else {
            if (root.left == null && root.right == null) {
                root = null;
            }
            if (root.left == null) {
                root = root.right;
            }
            else if (root.right == null) {
                root = root.left;
            }
            var min = this.findMinNode (root);
            root.data = min.data;
            root.right = this.deleteNode (root.right, min.data);
        }
        return root;
    }
    
    search (root, key) {
        if (root == null) return null;
        else if (key < root.data) {
            return this.search (root.left, key);
        }
        else if (key > root.data) {
            return this.search (root.right, key);
        }
        else return root;
    }

    inorderTraversal (root) {
        if (root !== null) {
            this.inorderTraversal (root.left);
            console.log (root.data);
            this.inorderTraversal (root.right);
        }
    }
}

/**
10
50 70 30 60 90 20 80 65 55 25


8
30 20 10 50 60 45 5 1
**/