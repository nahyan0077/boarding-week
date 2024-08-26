class TrieNode {
    constructor() {
        this.children = {}
        this.isEnd = false
    }
}

class prefixTrie {
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
    collectWords(node, word, list){
        if (node.isEnd) {
            list.push(word)
        }
        for(let char in node.children){
           this.collectWords(node.children[char], word+char, list)
        }
    }
    delete(word){
        this._delete(this.root, word)
    }
    _delete(node, word, i = 0){
        if (i == word.length) {
            if (!node.isEnd) {
                return false
            }
            node.isEnd = false
            return Object.keys(node.children).length == 0
        }

        const char = word[i]
        const childNode = node.children[char]
        if (!childNode) {
            return false
        }
        const shouldDeleteChildNode = this._delete(childNode, word, i + 1)
        if (shouldDeleteChildNode) {
            delete node.children[childNode]
            return Object.keys(node.children).length == 0 && !node.isEnd
        }
        return false    
    }
}


const pt =  new prefixTrie()

pt.insert("nahyan")
pt.insert("nithin")
pt.insert("haneen")
pt.insert("naveen")
pt.insert("nived")

pt.delete("nived")

console.log(pt.autoComplete("ni"));
