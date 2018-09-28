import React, {Component, Fragment} from 'react';
import {Header, Image, Segment, Grid, List} from 'semantic-ui-react';

export default class TweetsContents extends Component {
  componentDidMount() {
    this.props.retrieveTweets();
  }

  render() {
    const {getTweetIds, getTweetDetails} = this.props;
    return getTweetIds().map(id => (
      <Tweet key={id} id={id} getTweetDetails={getTweetDetails} />
    ));
  }
}

const Tweet = ({id, getTweetDetails}) => {
  const details = getTweetDetails(id);
  return (
    <Segment padded>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column width={3}>
            <Image src={details.user.profile_image_url} size="tiny" circular />
          </Grid.Column>
          <Grid.Column width={13}>
            <Header size="medium">{details.user.name}</Header>
            <p>{details.text}</p>
            <List horizontal>
              <List.Item icon="marker" content={details.user.location} />
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};
