import React, {Component} from 'react';

export default class ErrorBoundary extends React.Component {
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
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}
