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
    delete(word) {
        this._delete(this.root, word, 0);
    }

    _delete(node, word, index) {
        if (index === word.length) {
            if (!node.isEnd) return false; 
            node.isEnd = false;            
            return Object.keys(node.children).length === 0;
        }
        const char = word[index];
        const childNode = node.children[char];
        if (!childNode) return false; 
        
        const shouldDeleteChildNode = this._delete(childNode, word, index + 1);

        if (shouldDeleteChildNode) {
            delete node.children[char];
            return Object.keys(node.children).length === 0 && !node.isEnd;
        }
        return false;
    }

    delete1(word){
        this._delete1(this.root, word, 0)
    }

    _delete1(node, word, index){
        if (index === word.length) {
            if (!node.isEnd) return false
            node.isEnd = false
            return Object.keys(node.children).length === 0
        }

        let char = word[index]
        let childNode = node.children[char]
        if(!childNode) return false
        const shouldDeleteChildNode = this._delete1(childNode, word, index + 1)

        if (shouldDeleteChildNode) {
            delete node.children[char]
            return Object.keys(node.children).length == 0 && !node.isEnd
        }
    }
}

const pt = new prefixTrie()

pt.insert("nahyan")
pt.insert("ajmalin")
pt.insert("ajayasb")
pt.insert("ajmadin")

pt.delete("ajmalin")

// console.log(pt.root.children.a.children.j.children.m);


console.log(pt.autoComplete("aj"))



