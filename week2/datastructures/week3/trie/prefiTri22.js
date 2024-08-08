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
    autoComplete(word){
        let node = this.root
        for(let char of word){
            if (!node.children[char]) {
                return null
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
tr.insert("ajmal")
tr.insert("thakku")
tr.insert("adithyab")

console.log(tr.autoComplete('a'))