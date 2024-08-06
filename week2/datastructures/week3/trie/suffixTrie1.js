class TrieNode {
    constructor() {
        this.children = {}
        this.isEnd = false
    }
}

class SuffixTrie {
    constructor() {
        this.root = new TrieNode()
    }
    insert(word) {
        for (let i = 0; i < word.length; i++) {
            let node = this.root
            for (let j = i; j < word.length; j++) {
                if (!node.children[word[j]]) {
                    node.children[word[j]] = new TrieNode()
                }
                node = node.children[word[j]]
            }
            node.isEnd = true
        }
    }
    search(word) {
        let node = this.root
        for (let i = 0; i < word.length; i++) {
            if (!node.children[word[i]]) {
                return false
            }
            node = node.children[word[i]]
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

}

const tr = new SuffixTrie()

tr.insert("nahyan")
tr.insert("ajmal")
tr.insert("shinas")

console.log(tr.print());
