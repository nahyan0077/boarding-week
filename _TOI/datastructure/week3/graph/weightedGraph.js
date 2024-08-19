class WeightedGraph {
    constructor() {
        this.adjList = {}
    }
    addEdges(vertex1, vertex2, w){
        if (!this.adjList[vertex1]) {
            this.adjList[vertex1] = new Map()
        }
        if (!this.adjList[vertex2]) {
            this.adjList[vertex2] = new Map()
        }
        this.adjList[vertex1].set(vertex1, w)
        this.adjList[vertex2].set(vertex2, w)
    }
    removeVertex(vertex){
        if(!this.adjList[vertex]) return
        for(let vert of this.adjList[vertex].keys()){
            this.removeEdges(vert, vertex)
        }
        delete this.adjList[vertex]
    }
    removeEdges(vertex1, vertex2){
        if (this.adjList[vertex1]) {
            this.adjList[vertex1].delete(vertex2)
        }
        if (this.adjList[vertex2]) {
            this.adjList[vertex2].delete(vertex1)
        }
    }
}

const wt = new WeightedGraph()

wt.addEdges("A","B",10)
wt.addEdges("B","C",20)
wt.addEdges("D","A",30)

wt.removeVertex("A")

console.log(wt);
