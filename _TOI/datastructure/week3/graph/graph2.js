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

    removeVertex(vertex){
        if (!this.adjList[vertex]) {
            return
        }
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
        if (!this.adjList) {
            console.log("empty");
            return null
        }
        for(let vert in this.adjList){
            console.log(vert+  "  ----> " + [...this.adjList[vert]]);
        }
    }
    bfs(vertex){
        if (!this.adjList[vertex]) {
            return null
        }
        const queue = [vertex]
        const visitted = {}
        visitted[vertex] = true
        while (queue.length) {
            const curr = queue.shift()
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
        const stack = [vertex]
        const visitted = {}
        visitted[vertex] = true
        while (stack.length) {
            const curr = stack.pop()
            if (!visitted[curr]) {
                console.log(curr)
                visitted[curr] = true
                for(let child of this.adjList[curr]){
                    stack.push(child)
                }
            }
        }
    }
}


const gp = new Graph()

gp.addEdges("A", "B")
gp.addEdges("B", "C")
gp.addEdges("C", "D")

// gp.removeVertex('A')

gp.bfs("A")

gp.print()

gp.dfs("A")

