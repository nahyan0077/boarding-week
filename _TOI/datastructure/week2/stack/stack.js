class Stack {
    constructor(size) {
        this.items = []
        this.size = 0
    }
    isEmpty(){
        return this.size == 0
    }
    push(value){
        this.items.push(value)
        this.size++
    }
    pop(){
        if (this.isEmpty()) {
            return null
        }
        this.items.pop()
        this.size--
    }
    print(){
        if (this.isEmpty()) {
            console.log("stack is emtpy");
            return            
        }else{
            console.log(this.items);
        }
    }
    reverse(){
        let temp = []
        while(this.items.length){
            temp.push(this.items.pop())
        }
        this.items = temp
    }
    rmvMid(){
        let temp = []
        let mid = Math.floor(this.items.length / 2)
        let i = 0
        while (i < mid) {
            temp.push(this.items.pop())
            i++
        }
        this.items.pop()
        while (temp.length) {
            this.items.push(temp.pop())
        }
    }
}

const st = new Stack(10)


st.push(3)
st.push(56)
st.push(2)
st.push(87)
st.push(9)
st.push(6)
st.push(8)

st.reverse()
st.rmvMid()

st.print()