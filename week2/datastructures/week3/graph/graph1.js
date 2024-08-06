class Graph {
    constructor() {
        this.adjList = {}
    }
    addVertex(vertex){
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = new Set()
        }
    }
    addEdges(vertex1,  vertex2){
        if (!this.adjList[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.adjList[vertex2]) {
            this.addVertex(vertex2)
        }
        this.adjList[vertex1].add(vertex2)
        this.adjList[vertex2].add(vertex1)
    }
    removeVertex(vertex1, vertex2){
        this.adjList[vertex1].delete(vertex2)
        this.adjList[vertex2].delete(vertex1)
    }
    removeEdges(vertex){
        if (!this.adjList[vertex]) {
            return null
        }
        for(let adjVert of this.adjList[vertex]){
            this.removeVertex(vertex, adjVert)
        }
    }
}

const gp = new Graph()

gp.addEdges('A','B')
gp.addEdges('B','C')
gp.addEdges('C','A')

gp.removeEdges('B')

console.log(gp);
