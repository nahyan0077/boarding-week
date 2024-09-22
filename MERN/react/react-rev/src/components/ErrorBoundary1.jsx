import React from "react";

export default class ErrorBoundary1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {hasError: false}
    }
    static getDerivedStateFromError () {
        return {hasError : true}
    }

    componentDidCatch(error, errorInfo){
        console.log(error, errorInfo);
        
    }

    render () {
        if (this.state.hasError) {
            return (
                <h2> Fallback UI : Error catched here... </h2>
            )
        }
        return this.props.children
    }
    
}