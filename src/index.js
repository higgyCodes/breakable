import React, {Component, Fragment} from 'react';
import {render} from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import {Provider} from 'unstated';
import {Icon, Image, Menu, Container} from 'semantic-ui-react';

import Datadog from './Datadog';
import Twitter from './Twitter';
import TwitterContainer from './containers/TwitterContainer';
import PlacesContainer from './containers/PlacesContainer';

let twitterContainer = new TwitterContainer();
let placesContainer = new PlacesContainer();
const ROUTES = ['twitter', 'datadog'];

//if ('serviceWorker' in navigator) {
//  navigator.serviceWorker
//    .register('./sw.js')
//    .then(function(registration) {
//      console.log('Registration successful, scope is:', registration.scope);
//    })
//    .catch(function(error) {
//      console.log('Service worker registration failed, error:', error);
//    });
//}

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      route: ROUTES[0],
    };
  }

  render() {
    return (
      <div className="app">
        <Provider inject={[placesContainer, twitterContainer]}>
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
        </Provider>
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById('app'));
