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

let twitterContainer = new TwitterContainer();
const ROUTES = ['twitter', 'monitoring'];

const App = () => (
  <Provider inject={[twitterContainer]}>
    <Subscribe to={[TwitterContainer]}>
      {twitter => <Twitter twitter={twitter} />}
    </Subscribe>
  </Provider>
);

class Twitter extends Component {
  constructor(props) {
    super();
    console.log(props);
    this.state = {
      route: ROUTES[0],
    };
  }

  componentDidMount() {
    const tester = process.env.GOOGLE_MAPS_API_KEY;
    console.log('not working', tester);
    console.log('twitter', this.props.twitter);
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
          {this.state.route === ROUTES[0] ? <Primary /> : <Secondary />}
        </Container>
      </div>
    );
  }
}

const Primary = () => {
  return (
    <Fragment>
      <Header as={'h1'}>Twitter</Header>
      <iframe
        src="https://app.datadoghq.com/graph/embed?token=a97a9810265711839c22819143c893a91d3a5d7c2fdd6021b6fa7e672dfa4adb&height=300&width=600&legend=true"
        width="600"
        height="300"
        frameborder="0"
      />
    </Fragment>
  );
};

const Secondary = () => {
  return (
    <Fragment>
      <Header as={'h1'}>Datadog</Header>
      <iframe
        src="https://app.datadoghq.com/graph/embed?token=a97a9810265711839c22819143c893a91d3a5d7c2fdd6021b6fa7e672dfa4adb&height=300&width=600&legend=true"
        width="600"
        height="300"
        frameborder="0"
      />
    </Fragment>
  );
};

render(React.createElement(App), document.getElementById('app'));
render(React.createElement(App), document.getElementById('app'));
