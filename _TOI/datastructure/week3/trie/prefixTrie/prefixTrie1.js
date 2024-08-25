class TrieNode {
    constructor() {
        this.childen = {}
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
            if (!node.childen[char]) {
                node.childen[char] = new TrieNode()
            }
            node = node.childen[char]
        }
        node.isEnd = true
    }
    search(word){
        let node = this.root
        for(let char of word){
            if (!node.childen[char]) {
                return false
            }
            node = node.childen[char]
        }
        return node.isEnd
    }
    autoComplete(word){
        let node = this.root
        for(let char of word){
            if (!node.childen[char]) {
                return []
            }
            node = node.childen[char]
        }
        let list = []
        this.collectWords(node, word, list)
        return list
    }
    collectWords(node, word, list){
        if (node.isEnd) {
             list.push(word)
        }
        for(let char in node.childen){
            this.collectWords(node.childen[char], word + char, list)
        }
    }
}


const tr = new PrefixTrie()

tr.insert("nahyan")
tr.insert("naheem")
tr.insert("nahean")


console.log(tr.autoComplete("nah"))


