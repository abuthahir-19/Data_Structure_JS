class Node {
    constructor (key) {
        this.data = key;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

export class AVL {
    constructor () {
        this.root = null;
        this._count = 0;
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
        if (node === null) {
            return (new Node (key));
        }

        if (key < node.data) {
            node.left = this.insertNode (node.left, key);
        }
        else if (key > node.data) {
            node.right = this.insertNode (node.right, key);
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

    insert (key) {
        this.root = this.insertNode (this.root, key);
        this._count += 1;
    }

    clear () {
        this._count = 0;
        this.root = null;
    }
    
    findMinNode (root) {
        var current = root;
        while (current.left != null) {
            current = current.left;
        }
        return current;
    }

    min () {
        return this.findMinNode (this.root).data;
    }

    findMaxNode (root) {
        var current = root;
        while (current.right != null) current = current.right;
        return current;
    }

    max () {
        return this.findMaxNode (this.root).data;
    }

    count () {
        return this._count;
    }

    deleteNode (root, key) {
        if (root == null) {
            return root;
        }

        if (key < root.data) {
            root.left = this.deleteNode (root.left, key);
        }
        else if (key > root.data) {
            root.right = this.deleteNode (root.right, key);  
        }
        else {
            if (root.left == null || root.right == null) {
                let temp = null;
                if (temp === root.left) {
                    temp = root.right;
                }
                else {
                    temp = root.left;
                }

                if (temp == null) {
                    temp = root;
                    root = null;
                } else {
                    root = temp;
                }
            }
            else {
                let temp = this.findMinNode (root.right);
                root.data = temp.data;
                root.right = this.deleteNode (root.right, temp.data);
            }
        }
        if (root == null) return root;

        root.height = 1 + (Math.max (this.height (root.left), this.height (root.right)));

        let balanceFactor = this.getBalanceFactor (root);
        if (balanceFactor > 1) {
            if (this.getBalanceFactor (root.left) >= 0)
                return this.rightRotate (root);
            else {
                root.left = this.leftRotate (root.left);
                return this.rightRotate (root);
            }
        }

        if (balanceFactor < -1) {
            if (this.getBalanceFactor (root.right) <= 0) {
                return this.leftRotate (root);
            } else {
                root.right = this.rightRotate (root.right);
                return this.leftRotate (root);
            }
        }

        return root;
    }

    delete (data) {
        this.root = this.deleteNode (this.root, data);
    }

    search (root, key) {
        if (root == null) return 0;

        if (key < root.data) {
            return this.search (root.left, key);
        }
        else if (key > root.data) {
            return this.search (root.right, key);
        }
        else if (key == root.data) {
            return 1;
        }
    }
    
    find (key) {
        if (this.search (this.root, key)) return 'true';
        else return 'false';
    }

    inorder (root) {
        if (root !== null) {
            this.inorder (root.left);
            console.log (root.data);
            this.inorder (root.right);
        }
    }
}