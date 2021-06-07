const fs = require('fs');

var readable = fs.createReadStream (__dirname + '\\avlinput.txt');

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
    var avl = new AVL ();
    var root = avl.getRootNode();
    for (const val of list) {
        root = avl.insert (root, val);
    }
    console.log ('Elements of the AVL Tree :');
    avl.inorder (root);
    console.log (root);
    var d = +readLine();
    console.log ('Element that is going to be deleted is %d', d);
    avl.delete (root, d);
    console.log ('After deletion :');
    avl.inorder (root);
    console.log (root);
}

class Node {
    constructor (key) {
        this.data = key;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVL {
    constructor () {
        this.root = null;
    }

    getRootNode () {
        return this.root;
    }

    height (node) {
        if (node == null) return 0;
        return node.height;
    }

    leftRotate (x) {
        let y = x.right;
        let t2 = y.left;
        x.right = t2;
        y.left = x;

        x.height = 1 + (Math.max (this.height (x.left), this.height (x.right)));
        y.height = 1 + (Math.max (this.height (y.leftf), this.height (y.right)));
        return y;
    }

    rightRotate (y) {
        let x = y.left;
        let t2 = x.right;
        y.left = t2;
        x.right = y;

        x.height = 1 + (Math.max (this.height (x.left), this.height (x.right)));
        y.height = 1 + (Math.max (this.height (y.leftf), this.height (y.right)));
        
        return x;
    }

    getBalanceFactor (node) {
        if (node == null || (node.left == null && node.right == null)) return 0;
        return (this.height (node.left) - this.height (node.right));
    }
    insertNode (node, key) {
        
    }
    insert (node, key) {
        if (node === null) {
            return (new Node (key));
        }

        if (key < node.data) {
            node.left = this.insert (node.left, key);
        }
        else if (key > node.data) {
            node.right = this.insert (node.right, key);
        }

        else{
            return node;
        }
        node.height = 1 + Math.max (this.height (node.left), this.height (node.right));

            let balanceFactor = this.getBalanceFactor (node);

            if (balanceFactor > 1) {
                if (key < node.left.data) {
                    return this.rightRotate (node);
                }
                else if (key > node.left.data) {
                    node.left = this.leftRotate (node.left);
                    return this.rightRotate (node);
                }
            }

            if (balanceFactor < -1) {
                if (key > node.right.data) {
                    return this.leftRotate (node);
                }
                else if (key < node.right.data) {
                    node.right = this.rightRotate (node.right);
                    return this.leftRotate (node);
                }
            }
            return node;
    }

    findMinNode (root) {
        var current = root.right;
        while (current && current.left != null) {
            current = current.left;
        }
        return current;
    }

    delete (root, key) {
        if (root == null) {
            return root;
        }
        if (key < root.data) {
            root.left = this.delete (root.left, key);
        }
        else if (key > root.data) {
            root.right = this.delete (root.right, key);
        }
        else {
            if (root.left == null && root.right == null) {
                root = null;
                return root;
            }
            else if (root.left == null) {
                root = root.right;
                return root;
            }
            else if (root.right === null) {
                root = root.left;
                return root;
            }

            var min = this.findMinNode (root);
            root.data = min.data;
            root.right = this.delete (root.right, min.data);
            return root;
        }
        root.height = 1 + (Math.max (this.height (root.left), this.height (root.right)));

        let balanceFactor = this.getBalanceFactor (root);
        if (balanceFactor > 1) {
            if (key < root.left.data) {
                return this.rightRotate (root);
            }
            else if (key > root.left.data) {
                root.left = this.leftRotate (root.left);
                return this.rightRotate (root);
            }
        }

        if (balanceFactor < -1) {
            if (key > root.right.data) {
                return this.leftRotate (root);
            }

            else if (key > root.right.data) {
                root.right = this.rightRotate (root.right);
                return this.leftRotate (root);
            }
        }
        return root;
    }

    inorder (root) {
        if (root !== null) {
            this.inorder (root.left);
            console.log (root.data);
            this.inorder (root.right);
        }
    }
}