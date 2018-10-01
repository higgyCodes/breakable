import React, {Fragment} from 'react';
import {Header, Grid} from 'semantic-ui-react';

const Secondary = () => {
  return (
    <Fragment>
      <Header as={'h1'}>Datadog</Header>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <iframe
              title="datadog-test"
              src={`https://app.datadoghq.com/graph/embed?token=${
                process.env.REACT_APP_DATADOG_TOKEN
              }&height=300&width=600&legend=true`}
              width="600"
              height="300"
              frameborder="0"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Fragment>
  );
};

export default Secondary;
