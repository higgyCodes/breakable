import {Container} from 'unstated';

export default class TwitterContainer extends Container {
  increment() {
    this.setState({count: this.state.count + 1});
  }

  decrement() {
    this.setState({count: this.state.count - 1});
  }
  retriveTweets() {}
}
