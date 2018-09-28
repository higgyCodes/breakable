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

const Secondary = () => {
  return (
    <Fragment>
      <Header as={'h1'}>Datadog</Header>
      <iframe
        src={`https://app.datadoghq.com/graph/embed?token=${
          process.env.REACT_APP_DATADOG_TOKEN
        }&height=300&width=600&legend=true`}
        width="600"
        height="300"
        frameborder="0"
      />
    </Fragment>
  );
};

export default Secondary;
