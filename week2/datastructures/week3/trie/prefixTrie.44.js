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
    collectWords(node=this.root, word="", list=[]){
        if(node.isEnd){
            list.push(word)
        }
        for(let char in node.children){
            this.collectWords(node.children[char], word + char, list)
        }
        return list
    }
}

const pt = new PrefixTrie()

pt.insert("nahyan")
pt.insert("nayeem")
pt.insert("nabeel")

console.log(pt.autoComplete("nah"));


console.log(pt.search("nahyan"))

console.log(pt.collectWords());
