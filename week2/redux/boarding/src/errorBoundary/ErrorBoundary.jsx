import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isError: false };
  }

  static getDerivedStateFromError(error) {
    return { isError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error from error boundary", error, errorInfo);
  }

  render() {
    if (this.state.isError) {
      return (
        <div>
          <h1>Oops! Something went wrong.</h1>
          <button onClick={() => window.location.reload()}>Reload</button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
