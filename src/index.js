import React, {Component} from 'react';
import {render} from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import {Provider, Subscribe} from 'unstated';
import TwitterContainer from './containers/TwitterContainer';
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

let twitterContainer = new TwitterContainer();

const App = () => (
  <Provider inject={[twitterContainer]}>
    <Subscribe to={[TwitterContainer]}>
      {twitter => <Twitter twitter={twitter} />}
    </Subscribe>
  </Provider>
);

class Twitter extends Component {
  componentDidMount() {
    console.log('twitter', this.props.twitter);
    this.props.twitter.retrieveTweets().then(data => {
      console.log(data);
    });
  }
  render() {
    return (
      <div className="app">
        <Container>
          <Sidebar
            as={Menu}
            icon="labeled"
            inverted
            vertical
            visible={true}
            width="thin">
            <Menu.Item as="a">
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="gamepad" />
              Games
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="camera" />
              Channels
            </Menu.Item>
          </Sidebar>
          <Header as={'h1'}>Does this work</Header>

          <Button>Click Here</Button>
        </Container>
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById('app'));
