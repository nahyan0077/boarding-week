class HashTable {
    constructor(size) {
        this.table = Array(size)
        this.size = size
    }
    hash(key){
        let total = 0
        for(let i = 0; i < key.length; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key, value){
        let index = this.hash(key)
        let bucket = this.table[index]
        if (!bucket) {
            this.table[index] = [[key, value]]
        }else{
            let sameKey = bucket.find((item) => item[0] == key)
            if (sameKey) {
                sameKey[1] = value
            }else{
                bucket.push([key, value])
            }
        }
    }
    get(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        if (bucket) {
            let sameKey = bucket.find((item) => item[0] == key)
            return sameKey
        }
        return undefined
    }
}


const ht = new HashTable(20)

ht.set("name","nahyan")
ht.set("age",34)

console.log(ht.get("name"))