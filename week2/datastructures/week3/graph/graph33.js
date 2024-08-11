class Graph {
    constructor() {
        this.adjList = {}
    }
    addVertex(vertex1){
        if (!this.adjList[vertex1]) {
            this.adjList[vertex1] = new Set()
        }
    }
    addEdges(vertex1, vertex2){
        if (!this.adjList[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.adjList[vertex2]) {
            this.addVertex(vertex2)
        }
        this.adjList[vertex1].add(vertex2)
        this.adjList[vertex2].add(vertex1)
    }
    deleteVertex(vertex){
        if (!this.adjList[vertex]) {
            return null
        }
        for(let vertx of this.adjList[vertex]){
            this.deleteEdges(vertx, vertex)
        }
    }
    deleteEdges(vertex1, vertex2){
        this.adjList[vertex1].delete(vertex2)
        this.adjList[vertex2].delete(vertex1)
    }
    bfs(vertex){
        if (!this.adjList[vertex]) {
            return null
        }
        let queue = [vertex]
        let visitted = {}
        visitted[vertex] = true
        while (queue.length) {
            console.log(visitted)
            let curr = queue.shift()
            console.log(curr)
            for(let child of this.adjList[curr]){
                if (!visitted[child]) {
                    queue.push(child)
                    visitted[child] = true
                }
            }
        }
    }
    dfs(vertex){
        if ( !this.adjList[vertex] ) {
            return null
        }
        const stack = [vertex]
        let visitted = {}
        while (stack.length) {
            console.log(visitted)
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
gp.addEdges("B","C")
gp.addEdges("C","D")
gp.addEdges("D","A")

// gp.bfs("B")

console.log("--------------");


gp.dfs('B')

console.log(gp) 