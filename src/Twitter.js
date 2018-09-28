import React, {Component, Fragment} from 'react';
import {Header, Image, Segment, Grid, List} from 'semantic-ui-react';
import {Subscribe} from 'unstated';

import TwitterContainer from './containers/TwitterContainer';
import PlacesContainer from './containers/PlacesContainer';
import Mapbox from './Mapbox';
import GoogleMaps from './GoogleMaps';
import ErrorBoundary from './ErrorBoundary';
import Tweets from './Tweets';

export default class TwitterContents extends Component {
  render() {
    return (
      <Fragment>
        <Header as={'h1'}>Twitter</Header>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Subscribe to={[TwitterContainer]}>
                {twitterContainer => (
                  <Tweets
                    getTweetIds={twitterContainer.selectors.getTweetIds}
                    getTweetDetails={twitterContainer.selectors.getTweetDetails}
                    retrieveTweets={twitterContainer.retrieveTweets}
                  />
                )}
              </Subscribe>
            </Grid.Column>
            <Grid.Column>
              <Subscribe to={[PlacesContainer, TwitterContainer]}>
                {(placesContainer, twitterContainer) => (
                  <ErrorBoundary
                    fallback={
                      <GoogleMaps
                        getTweetIds={twitterContainer.selectors.getTweetIds}
                        getTweetDetails={
                          twitterContainer.selectors.getTweetDetails
                        }
                        placesContainer={placesContainer}
                      />
                    }>
                    <Mapbox
                      getTweetIds={twitterContainer.selectors.getTweetIds}
                      getTweetDetails={
                        twitterContainer.selectors.getTweetDetails
                      }
                      placesContainer={placesContainer}
                    />
                  </ErrorBoundary>
                )}
              </Subscribe>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Fragment>
    );
  }
}
