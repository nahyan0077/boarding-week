class WeightedGraph {
    constructor() {
        this.adjList = {}
    }
    addEdges(v1, v2, w){
        if (!this.adjList[v1]) {
            this.adjList[v1] = new Map()
        }
        if (!this.adjList[v2]) {
            this.adjList[v2] = new Map()
        }
        this.adjList[v1].set(v2, w)
        this.adjList[v2].set(v1, w)
    }
    removeVertex(v){
        for(let vert of this.adjList[v].keys()){
            this.removeEdge(vert, v)
        }
        delete this.adjList[v]
    }
    removeEdge(v1, v2){
        this.adjList[v1].delete(v2)
        this.adjList[v2].delete(v1)
    }
    print(){
        for(let vert in this.adjList){
            console.log(vert , " ----> ",this.adjList[vert]);
        }
    }
}


const wg = new WeightedGraph()

wg.addEdges("A","B",2)
wg.addEdges("B","C",6)
wg.addEdges("C","A",3)

wg.removeVertex("A")

wg.print()

