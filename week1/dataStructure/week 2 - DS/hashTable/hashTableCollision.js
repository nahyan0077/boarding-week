class HashTableCollision {
    constructor(size) {
        this.table = Array(size)
        this.size = size
    }
    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key, value) {
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
    remove(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        if (bucket) {
            let sameKey = bucket.find((item) => item[0] == key)
            if (sameKey) {
                bucket.splice(bucket.indexOf(sameKey))
            }
        }
    }
    print(){
        for(let i = 0; i < this.table.length; i++){
            if (this.table[i]) {
                console.log(this.table[i]);
            }
        }
    }
}

const ht = new HashTableCollision(20)

ht.set("name","nahyan")
ht.set("name1","ajmal")
ht.set("eman","ajmal")
ht.set("age",24)

console.log(ht.get("name"));

ht.print()