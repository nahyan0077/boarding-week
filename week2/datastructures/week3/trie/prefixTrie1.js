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
    insert(word) {
        let node = this.root
        for (let i = 0; i < word.length; i++) {
            if (!node.children[word[i]]) {
                node.children[word[i]] = new TrieNode()
            }
            node = node.children[word[i]]
        }
        node.isEnd = true
    }
    search(word) {
        let node = this.root
        for (let char in word) {
            if (!node.children[char]) {
                return false
            }
            node = node.children[char]
        }
        return node.isEnd
    }
    print(node = this.root, word = "", result = []) {
        if (node.isEnd) {
            result.push(word)
        }
        for (let char in node.children) {
            this.print(node.children[char], word + char, result)
        }
        return result
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
    collectWords (node, word, list){
        if (node.isEnd) {
            list.push(word)
        }
        for(let char in node.children){
            this.collectWords(node.children[char], word + char, list)
        }
    }
}

const pt = new PrefixTrie()

pt.insert("nahyan")
pt.insert("amal")
pt.insert("ashiq")

console.log(pt.autoComplete("a"))

console.log(pt.print())
