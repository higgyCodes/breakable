import React, {Component, Fragment} from 'react';
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

import Datadog from './Datadog';
import Twitter from './Twitter';

let twitterContainer = new TwitterContainer();
const ROUTES = ['twitter', 'datadog'];

const App = () => (
  <Provider inject={[twitterContainer]}>
    <Subscribe to={[TwitterContainer]}>
      {twitter => <AppMenu twitter={twitter} />}
    </Subscribe>
  </Provider>
);

class AppMenu extends Component {
  constructor(props) {
    super();
    console.log(props);
    this.state = {
      route: ROUTES[0],
    };
  }

  componentDidMount() {
    const tester = process.env.GOOGLE_MAPS_API_KEY;
    this.props.twitter.retrieveTweets().then(data => {
      console.log(data);
    });
  }

  render() {
    return (
      <div className="app">
        <Menu inverted>
          <Menu.Item>
            <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
          </Menu.Item>
          <Menu.Item onClick={this.onToggle}>
            <Icon name="sidebar" />
          </Menu.Item>
          <Menu.Item onClick={() => this.setState({route: ROUTES[0]})}>
            Twitter
          </Menu.Item>
          <Menu.Item onClick={() => this.setState({route: ROUTES[1]})}>
            Datadog
          </Menu.Item>
        </Menu>
        <Container>
          {this.state.route === ROUTES[0] ? <Twitter /> : <Datadog />}
        </Container>
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById('app'));
