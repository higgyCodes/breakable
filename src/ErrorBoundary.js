import React, {Component} from 'react';

const errorMessage = <h1>Eeeeek!</h1>;

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  componentDidCatch(error, info) {
    console.log(error, info);
    // Display fallback UI
    this.setState({hasError: true});
    // You can also log the error to an error reporting service
  }

  render() {
    return this.state.hasError ? errorMessage : this.props.children;
  }
}
