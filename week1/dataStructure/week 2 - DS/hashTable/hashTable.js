class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key, value){
        let index = this.hash(key)
        this.table[index] = value
    }
    get(key){
        let index = this.hash(key)
        return this.table[index]
    }
    remove(key){
        let index = this.hash(key)
        delete this.table[index]
    }
}

const ht = new HashTable(20)

ht.set("name","nahyan")
ht.set("age","nahyan")

ht.remove("name")

console.log(ht.get("name"))

console.log(ht);

let arr = [2,3,4,5,5]

