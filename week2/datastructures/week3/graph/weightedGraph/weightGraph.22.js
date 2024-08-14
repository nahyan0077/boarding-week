class WeightedGraph {
    constructor() {
        this.adjList = {}
    }
    addVertex(v1, v2, w){
        if (!this.adjList[v1]) {
            this.adjList[v1] = new Map()
        }
        if (!this.adjList[v2]) {
            this.adjList[v2] = new Map()
        }
        this.adjList[v1].set(v2,w)
        this.adjList[v2].set(v1,w)
    }
    removeVertex(v){
        for(let vert of this.adjList[v]){
            this.removeEdges(vert, v)
        }
    }
    removeEdges(v1, v2){
        this.adjList[v1].delete(v2)
        this.adjList[v2].delete(v1)
    }
    print(){
        for(let ver in this.adjList){
            console.log(ver , " ---> ", this.adjList[ver]);
            
        }
    }
}

const gp = new WeightedGraph()

gp.addVertex("A","B", 3)
gp.addVertex("C","B", 8)
gp.addVertex("D","A", 7)


gp.print()