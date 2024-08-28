class Stack {
    constructor() {
        this.queue1 = []
        this.queue2 = []
    }
    push(value){
        this.queue1.push(value)
    }
    pop(){
        while (this.queue1.length != 1) {
            this.queue2.push(this.queue1.shift())
        }
        let rmv = this.queue1.shift()
        while (this.queue2.length) {
            this.queue1.push(this.queue2.shift())
        }
        return rmv
    }
}

const st = new Stack()

st.push(1)
st.push(2)
st.push(3)
st.push(4)

console.log(st.pop())
