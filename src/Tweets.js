class TweetsContents extends Component {
  componentDidMount() {
    const {twitterContainer, placesContainer} = this.props;
    twitterContainer.retrieveTweets();
  }
  render() {}
}

//              {getTweetIds().map(id => (
//                <Tweet key={id} id={id} getTweetDetails={getTweetDetails} />
//              ))}
