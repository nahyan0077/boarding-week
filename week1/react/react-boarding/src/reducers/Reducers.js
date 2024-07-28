function reducer (state,action) {
    switch (action.type) {
        case "+":
            return {count: state.count + 1}
        case "-":
            return {count: state.count - 1}
    
        default:
            throw new Error();
    }
}

export default reducer