import {Container} from 'unstated';
import axios from 'axios';

export default class TwitterContainer extends Container {
  increment() {
    this.setState({count: this.state.count + 1});
  }

  decrement() {
    this.setState({count: this.state.count - 1});
  }
  retrieveTweets() {
    return axios.get('http://apis.is/car?number=aa031');
  }
}
