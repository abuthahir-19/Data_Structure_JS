class Graph {
    constructor () {
        this.adjacencyList = {};
    }

    addVertex (vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }

    addEdge (source, destination) {
        if (!this.adjacencyList[source]) {
            this.adjacencyList[source] = [];
        }
        if (!this.adjacencyList[destination]) {
            this.adjacencyList[destination] = [];
        }

        this.adjacencyList[source].push (destination);
        this.adjacencyList[destination].push (source);
    }

    removeEdge (source, destinaton) {
        this.adjacencyList[source] = this.adjacencyList[source].filter (vertex => vertex != destinaton);
        this.adjacencyList[destinaton] = this.adjacencyList[destinaton].filter (vertex => vertex != source);
    }

    removeVertex (vertex) {
        while (this.adjacencyList[vertex]) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge (vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
}