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
    print(){
        for (let vertx in this.adjList) {
            console.log(vertx , "  ---->  ",[...this.adjList[vertx]])
            
        }
    }
    deleteVertex(vertex){
        if (!this.adjList[vertex]) {
            return null
        }
        for(let vert of this.adjList[vertex]){
            this.deleteEdges(vert, vertex)
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
            console.log(queue);
            
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
        if (!this.adjList[vertex]) {
            return null
        }
        let stack = [vertex]
        
        let visitted = {}
        while (stack.length) {
            console.log(stack);

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
gp.addEdges("A","C")
gp.addEdges("C","D")



gp.print()

gp.bfs("A")
console.log("=======");

gp.dfs("A")
