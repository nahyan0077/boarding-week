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
}


const st = new SuffixTrie()

st.insert("nahyan")
st.insert("ajmal")
st.insert("anwar")
st.insert("yasar")

console.log(st.search("al"))

console.log(st.root);
