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
                return null
            }
            node = node.children[char]
        }
        return node.isEnd
    }
    print(node = this.root, word="", result = [] ){
        if (node.isEnd) {
            result.push(word)
        }
        for(let char in node.children){
            this.print(node.children[char], word + char, result)
        }
        return result
    }
}

const pt = new PrefixTrie()

pt.insert("nahyan")

console.log(pt.print())

