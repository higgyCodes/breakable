import React, {Component} from 'react';
import {render} from 'react-dom';
import {Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {Provider, Subscribe} from 'unstated';
import TwitterContainer from './containers/TwitterContainer';

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
        <Button>Click Here</Button>
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById('app'));
