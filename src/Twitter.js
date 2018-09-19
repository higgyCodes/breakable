import React, {Component, Fragment} from 'react';
import {
  Button,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Container,
  Grid,
  List,
} from 'semantic-ui-react';
import {Subscribe} from 'unstated';

import TwitterContainer from './containers/TwitterContainer';
import GoogleMaps from './GoogleMaps';

class TwitterContents extends Component {
  componentDidMount() {
    this.props.twitterContainer.retrieveTweets();
  }

  render() {
    const {
      getTweetIds,
      getTweetDetails,
    } = this.props.twitterContainer.selectors;
    return (
      <Fragment>
        <Header as={'h1'}>Twitter</Header>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              {getTweetIds().map(id => (
                <Tweet id={id} getTweetDetails={getTweetDetails} />
              ))}
            </Grid.Column>
            <Grid.Column>
              <GoogleMaps />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Fragment>
    );
  }
}

const Tweet = ({id, getTweetDetails}) => {
  const details = getTweetDetails(id);
  console.log('details', details);
  return (
    <Segment padded key={id}>
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

export default function() {
  return (
    <Subscribe to={[TwitterContainer]}>
      {twitterContainer => (
        <TwitterContents twitterContainer={twitterContainer} />
      )}
    </Subscribe>
  );
}
