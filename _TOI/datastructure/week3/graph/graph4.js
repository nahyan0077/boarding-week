class Graph {
    constructor() {
        this.adjList = {}
    }
    addVertex(vertex1, vertex2) {
        if (!this.adjList[vertex1]) {
            this.adjList[vertex1] = new Set()
        }
        if (!this.adjList[vertex2]) {
            this.adjList[vertex2] = new Set()
        }
        this.adjList[vertex1].add(vertex2)
        // this.adjList[vertex2].add(vertex1)
    }
    removeVertex(vertex) {
        if (!this.adjList[vertex]) {
            return null
        }
        for (let vert of this.adjList[vertex]) {
            this.removeEdges(vert, vertex)
        }
        delete this.adjList[vertex]
    }
    removeEdges(vertex1, vertex2) {
        this.adjList[vertex1].delete(vertex2)
        this.adjList[vertex2].delete(vertex1)
    }
    print() {
        for (let vert in this.adjList) {
            if ([...this.adjList[vert]].length) {
                console.log(vert + " --> " + [...this.adjList[vert]]);
            }
        }
    }
    dfs(vertex) {
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
                for (let child of this.adjList[curr]) {
                    stack.push(child)
                }
            }
        }
    }
    bfs(vertex) {
        if (!this.adjList[vertex]) {
            return null
        }
        const queue = [vertex]
        let visitted = {}
        visitted[vertex] = true
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr);
            for (let child of this.adjList[curr]) {
                if (!visitted[child]) {
                    visitted[child] = true
                    queue.push(child)
                }
            }
        }
    }
    isCircular(vertex) {
        if (!this.adjList[vertex]) {
            return null
        }

        let parent = {}
        let visited = {}
        let queue = [vertex]
        visited[vertex] = true
        parent[vertex] = -1

        while (queue.length) {
            let curr = queue.shift()
            for (let child of this.adjList[curr]) {
                if (!visited[child]) {
                    visited[child] = true
                    queue.push(child)
                    parent[child] = curr;
                } else if (parent[curr] != child) {
                    return true
                }
            }
        }
        return false
    }
}

const gp = new Graph()

gp.addVertex("A", "B")
gp.addVertex("B", "C")
gp.addVertex("C", "A")

// gp.removeVertex("A")


gp.print()

gp.dfs("A")

console.log("------------");


gp.bfs("A")

console.log(gp.isCercular("A"))
