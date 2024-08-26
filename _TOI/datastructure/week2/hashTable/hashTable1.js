class hashTable {
    constructor(size) {
        this.items = []
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
        let bucket = this.items[index]
        if (!bucket) {
            this.items[index] = [[key, value]]
        }else{
            let sameKey = bucket.find(item => item[0] == key)
            if (sameKey) {
                sameKey[1] = value
            }else{
                bucket.push([key, value])
            }
        }
    }
    get(key){
        let index = this.hash(key)
        let bucket = this.items[index]
        if (bucket) {
            let sameKey = bucket.find(item => item[0] == key)
            if (sameKey) {
                return sameKey[1]
            }else{
                return -1
            }
        }
    }
}

const ht = new hashTable(23)

ht.set("nahyan",24)
ht.set("ajmal",23)

console.log(ht.get("nahyan"))