class Node {
    constructor (element) {
        this.data = element;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class BST {
    constructor () {
        this.root = null;
        this._count = 0;
        this._eNode = 0;
        this._internal = 0;
        this._nodeCount = 1;
    }

    getRootNode () {
        return this.root;
    }

    height (node) {
        if (node == null) return 0;
        return node.height;
    }

    #insertNode (root, key) {
        if (root == null) return (new Node (key));

        if (key < root.data) {
            root.left = this.#insertNode (root.left, key);
        }
        else if (key > root.data) {
            root.right = this.#insertNode (root.right, key);
        }
        else {
            return root;   
        }

        root.height = Math.max (this.height (root.left), this.height (root.right)) + 1;
        return root;
    }

    insert (data) {
        this.root = this.#insertNode (this.root, data);
        this._count += 1;
    }

    findMinNode (root) {
        var curr = root;
        while (curr.left !== null) {
            curr = curr.left;
        }return curr;
    }

    findMaxNode (root) {
        var curr = root;
        while (curr.right !== null) {
            curr = curr.right;
        }
        return curr;
    }

    max () {
        return this.findMaxNode (this.root);
    }

    min () {
        return this.findMinNode (this.root);
    }

    externalNodes (root) {
        if (root !== null) {
            if (root.left === null && root.right == null) this._eNode += 1;
            if (root.left !== null) this.externalNodes (root.left);
            if (root.right !== null) this.externalNodes (root.right);
        }
    }
    
    external () {
        return this._eNode;
    }

    internalNodes (root) {
        if (root !== null) {
            if (root.left !== null || root.right !== null) this._internal += 1;
            if (root.left !== null) this.internalNodes (root.left);
            if (root.right !== null) this.internalNodes (root.right);
        }
    }

    internal () {
        return this._internal;
    }

    #searchNode (root, key) {
        if (root === null) {
            return 0;
        }
        else if (key < root.data) {
            return this.#searchNode (root.left, key);
        }
        else if (key > root.data) {
            return this.#searchNode (root.right, key);
        }
        else if (key == root.data) return 1;
    }

    find (key) {
        if (this.#searchNode (this.root, key)) return 'true';
        else return 'false';
    }

    totalNodes (root) {
        if (root == null) return root;
        else {
            if (root.left != null) this._nodeCount += 1;
            if (root.right != null) this._nodeCount += 1; 
        }
        this.totalNodes (root.left);
        this.totalNodes (root.right);
    }

    total () {
        return this._count;
    }

    #deleteNode (root, key) {
        if (root === null) throw new Error ('Element not found');

        if (key < root.data) {
            root.left = this.#deleteNode (root.left, key);
            return root;
        }
        else if (key > root.data) {
            root.right = this.#deleteNode (root.right, key);
            return root;
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
            else if (root.right == null) {
                root = root.left;
                return root;
            }
            var min = this.findMinNode (root.right);
            root.data = min.data;
            root.right = this.#deleteNode (root.right, min.data);
        }
        root.height = 1 + Math.max (this.height (root.left), this.height (root.right));
        return root;
    }   

    delete (data) {
        this.root = this.#deleteNode (this.root, data);
        this._count -= 1;
    }

    count () {
        return this._count;
    }

    inorder (root) {
        if (root !== null) {
            this.inorder (root.left);
            console.log (root.data);
            this.inorder (root.right);
        }
    }
}

export { BST };