import React, { Component } from 'react'

class ErrorBoundary extends Component {

    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, infor) => {
        this.setState({
            hasError: true,
            errorMessage: error
        });
    }

    render() {
        let hasError = this.state.hasError;
        let errorMessage = this.state.errorMessage;
        if (hasError) {
            return <h1>{errorMessage}</h1>
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;
