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
    insert(word){
        for(let i = 0; i < word.length; i++){
            let node = this.root
            for(let j = i; j < word.length; j++){
                if (!node.children[word[j]]) {
                    node.children[word[j]] = new TrieNode()
                }
                node = node.children[word[j]]
            }
            node.isEnd = true
        }
    }
    print(node = this.root, word = "", list=[] ){
        if (node.isEnd) {
            list.push(word)
        }
        for(let char in node.children){
            this.print(node.children[char], word + char, list)
        }
        return list
    }
}

const st = new SuffixTrie()

st.insert("nahyan")
st.insert("naheem")

console.log(st.print()) 