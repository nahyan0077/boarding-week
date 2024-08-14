class Graph {
    constructor() {
        this.adjList = {}
    }
    addVertex(vertex1, vertex2){
        if (!this.adjList[vertex1]) {
            this.adjList[vertex1] = new Set()
        }
        if (!this.adjList[vertex2]) {
            this.adjList[vertex2] = new Set()
        }
        this.adjList[vertex1].add(vertex2)
        this.adjList[vertex2].add(vertex1)
    }
    removeVertex(vertex){
        for(let vert of this.adjList[vertex]){
            this.removeEdges(vert, vertex)
        }
        delete this.adjList[vertex]
    }
    removeEdges(vertex1, vertex2){
        this.adjList[vertex1].delete(vertex2)
        this.adjList[vertex2].delete(vertex1)
    }
    print(){
        for(let vertex in this.adjList){
            console.log(vertex, "  ---->  ", [...this.adjList[vertex]]);
            
        }
    }
    bfs(vertex){
        if(!this.adjList[vertex]) return null
        let queue = [vertex]
        let visitted = {}
        visitted[vertex] = true
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr);
            for(let child of this.adjList[curr]){
                if (!visitted[child]) {
                    queue.push(child)
                    visitted[child] = true
                }
            }
            
        }
    }
    dfs(vertex){
        if(!this.adjList[vertex]) return null
        let stack = [vertex]
        let visitted = {}
        while (stack.length) {
            let curr = stack.pop()
            if(!visitted[curr]){
                visitted[curr] = true
                console.log(curr);
                for(let child of this.adjList[curr]){
                    stack.push(child)
                }
                
            }
        }
    }
}

const gp = new Graph()

gp.addVertex("A","B")
gp.addVertex("A","C")
gp.addVertex("C","D")

// gp.removeVertex("A")

gp.print()

console.log("---BFS--");
gp.bfs("A")

console.log("---DFS--");
gp.dfs("A")
