class Graph {
    constructor() {
        this.adjList = {}
    }
    addVertex(vertex) {
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = new Set()
        }
    }
    addEdge(vertex1, vertex2) {
        if (!this.adjList[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.adjList[vertex2]) {
            this.addVertex(vertex2)
        }
        this.adjList[vertex1].add(vertex2)
        this.adjList[vertex2].add(vertex1)
    }
    deleteVertex(vertex) {
        if (!this.adjList[vertex]) {
            return null
        }
        for (let adVer of this.adjList[vertex]) {
            this.deleteEdge(vertex, adVer)
        }
    }
    deleteEdge(vertex1, vertex2) {
        this.adjList[vertex1].delete(vertex2)
        this.adjList[vertex2].delete(vertex1)
    }
    print() {
        for (let vertex in this.adjList) {
            console.log(vertex + "  ---> " + [...this.adjList[vertex]]);

        }
    }
    bfs(vertex) {
        if (!this.adjList[vertex]) {
            return null
        }
        let queue = [vertex]
        let visitted = {}
        visitted[vertex] = true
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr);
            for (let child of this.adjList[curr]) {
                if (!visitted[child]) {
                    queue.push(child)
                    visitted[child] = true
                }
            }
        }
    }
    bfs1(vertex){
        if (!this.adjList[vertex]) {
            return null
        }
        let queue = [vertex]
        let visitted = {}
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr);
            for(let child of this.adjList[vertex]){
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

gp.addEdge("A", "B")
gp.addEdge("B", "C")
gp.addEdge("C", "A")

// gp.bfs('A')
// gp.bfs1('B')
gp.dfs('B')

gp.print()