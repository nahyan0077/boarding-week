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
    print(node=this.root, currWord="",result = []){
        if (node.isEnd) {
            result.push(currWord)
        }
        for(let char in node.children){
            this.print(node.children[char], currWord + char, result)
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
        this.collectWord(node, word, list)
        return list
    }
    collectWord(node, word, result){
        if (node.isEnd) {
            result.push(word)
        }
        for(let char in node.children){
            this.collectWord(node.children[char], word + char, result)
        }
    }
}

const tr = new PrefixTrie()

tr.insert("nahyan")
tr.insert("ajmal")
tr.insert("rrash")
tr.insert("nabeel")

console.log(tr.autoComplete('na'))

// console.log(tr.print())




