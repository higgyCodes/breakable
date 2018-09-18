import React, {Fragment} from 'react';
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
} from 'semantic-ui-react';
import GoogleMaps from './GoogleMaps';

const Twitter = () => {
  return (
    <Fragment>
      <Header as={'h1'}>Twitter</Header>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <Segment padded>
              <h2>Working here</h2>
            </Segment>
            <Segment padded>
              <h2>Working here</h2>
            </Segment>
            <Segment padded>
              <h2>Working here</h2>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <GoogleMaps />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Fragment>
  );
};

export default Twitter;
