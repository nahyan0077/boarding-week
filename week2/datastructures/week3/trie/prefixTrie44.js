class TrieNode {
    constructor() {
        this.children = {}
        this.isEnd = false
    }
}

class PrefixTrie {
    constructor() {
        this.root = new TrieNode()
    }
    insert(word){
        let node = this.root
        for(let char of word){
            if (!node.children[char]) {
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.isEnd = true
    }
    search(word){
        let node = this.root
        for(let char of word){
            if (!node.children[char]) {
                return false
            }
            node = node.children[char]
        }
        return node.isEnd
    }
    print(node=this.root, word= "", list=[]){
        if (node.isEnd) {
            list.push(word)
        }
        for(let char in node.children){
            this.print(node.children[char], word + char, list)
        }
        return list
    }
    autoComplete(word){
        let node = this.root
        for(let char of word){
            if (!node.children[char]) {
                return []
            }
            node = node.children[char]
        }
        let list = []
        this.collectWords(node, word, list)
        return list
    }
    collectWords(node, word, list){
        if (node.isEnd) {
            list.push(word)
        }
        for(let char in node.children){
            this.collectWords(node.children[char], word + char, list)
        }
    }
}

const tr = new PrefixTrie()

tr.insert("nahyan")
tr.insert("thakkku")
tr.insert("jishnu")
tr.insert("naheem")

console.log(tr.print());

console.log(tr.autoComplete("nah"))