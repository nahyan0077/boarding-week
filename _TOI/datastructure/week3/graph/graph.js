class Graph {
    constructor() {
        this.adjList = {}
    }
    addEdges(vertex1, vertex2){
        if (!this.adjList[vertex1]) {
            this.adjList[vertex1] = new Set()
        }
        if (!this.adjList[vertex2]) {
            this.adjList[vertex2] = new Set()
        }
        this.adjList[vertex1].add(vertex2)
        this.adjList[vertex2].add(vertex1)
    }
    deleteVertex(vertex){
        for(let vert in this.adjList){
            this.deleteEdges(vert, vertex)
        }
        delete this.adjList[vertex]
    }
    deleteEdges(vertex1, vertex2){
        this.adjList[vertex1].delete(vertex2)
        this.adjList[vertex2].delete(vertex1)
    }
    print(){
        for(let vert in this.adjList){
            console.log(vert , "  --->> ", [...this.adjList[vert]]);
            
        }
    }
    bfs(vertex){
        if(!this.adjList[vertex]){
            return null
        }
        let queue = [vertex]
        let visitted = {}
        visitted[vertex] = true
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr);
            for(let child of this.adjList[curr]){
                if (!visitted[child]) {
                    visitted[child] = true
                    queue.push(child)
                }
            }
        }
    }
    dfs(vertex){
        if (!this.adjList[vertex]) {
            return null
        }
        let stack = [vertex]
        let visitted = {}
        while (stack.length) {
            let curr = stack.pop()
            if (!visitted[curr]) {
                console.log(curr);
                visitted[curr] = true
                for(let child of this.adjList[curr]){
                    stack.push(child)
                }
            }
        }
    }
}

const gp = new Graph()

gp.addEdges("A","B")
gp.addEdges("C","B")
gp.addEdges("C","d")

gp.deleteVertex("A")

gp.print()

gp.bfs("C")

console.log("===============");


gp.dfs("C")

