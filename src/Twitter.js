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
} from 'semantic-ui-react';
import GoogleMaps from './GoogleMaps';

const Twitter = () => {
  return (
    <Fragment>
      <Header as={'h1'}>Twitter</Header>
      <GoogleMaps />
    </Fragment>
  );
};

export default Twitter;
