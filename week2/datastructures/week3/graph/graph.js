class Graph {
    constructor() {
        this.adjList = {}
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
    addVertex(vertex){
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = new Set()
        }
    }
    removeVertex(vertex){
        if(!this.adjList[vertex]) {
            return null
        }
        for(let adjVert of this.adjList[vertex]){
            this.removeEdges(vertex, adjVert)
        }
    }
    removeEdges(vertex1, vertex2){ 
        this.adjList[vertex1].delete(vertex2)
        this.adjList[vertex2].delete(vertex1)
    }
    print(){
        
        for(let vertex in this.adjList){
            console.log(vertex ,"---->", [...this.adjList[vertex]] );
            
        }
    }
    bfs(vertex){
        if (!this.adjList[vertex]) {
            return null
        }
        let visitted = {}
        let queue = [vertex]
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
        if (!this.adjList[vertex]) {
            return null
        }
        let visitted = {}
        let stack = [vertex]
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

gp.addEdges('A','B')
gp.addEdges('B','D')
gp.addEdges('C','A')

// gp.removeVertex('A')

gp.print()

// gp.bfs('B')
gp.dfs('B')

// console.log(gp);
