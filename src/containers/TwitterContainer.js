import {Container} from 'unstated';
import axios from 'axios';

export default class TwitterContainer extends Container {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      tweets: {},
    };
  }

  retrieveTweets() {
    this.setState({isLoading: true});

    return axios.get('http://localhost:3000/tweets').then(e => {
      console.log('event', e);
    });
  }
}
