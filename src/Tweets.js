import React, {Component} from 'react';
import {Header, Image, Segment, Grid, List} from 'semantic-ui-react';

export default class TweetsContents extends Component {
  componentDidMount() {
    this.props.retrieveTweets();
    this.props.setTwitterPoll();
  }

  componentWillUnmount() {
    this.props.removeTwitterPoll();
  }

  render() {
    return this.props
      .getTweetIds()
      .map(id => (
        <Tweet key={id} id={id} tweetDetails={this.props.getTweetDetails(id)} />
      ));
  }
}

const Tweet = ({id, tweetDetails}) => (
  <Segment padded>
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column width={3}>
          <Image
            src={tweetDetails.user.profile_image_url}
            size="tiny"
            circular
          />
        </Grid.Column>
        <Grid.Column width={13}>
          <Header size="medium">{tweetDetails.user.name}</Header>
          <p>{tweetDetails.text}</p>
          <List horizontal>
            <List.Item icon="marker" content={tweetDetails.user.location} />
          </List>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);
