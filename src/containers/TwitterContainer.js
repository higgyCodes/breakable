import {Container} from 'unstated';
import axios from 'axios';

export default class TwitterContainer extends Container {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      tweets: {},
      tweetIds: [],
    };
    this.selectors = {
      getTweetIds: () => this.state.tweetIds || [],
      getTweetDetails: tweetId => this.state.tweets[tweetId] || {},
      getTweetLocations: () =>
        this.state.tweetIds.reduce(
          (prev, curr) =>
            Object.assign(prev, {
              [curr]: this.state.tweets[curr].user.location,
            }),
          {},
        ),
    };
  }

  retrieveTweets() {
    this.setState({isLoading: true});

    return axios.get('http://localhost:3000/tweets').then(res => {
      let tweets = {};
      let tweetIds = [];
      res.data.statuses.forEach(tweet => {
        tweets[tweet.id] = tweet;
        tweetIds.push(tweet.id);
      });
      this.setState({tweets, tweetIds, isLoading: false});
    });
  }
}
