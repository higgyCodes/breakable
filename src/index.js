import React, {Component} from 'react';
import {render} from 'react-dom';
import {Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {Provider, Subscribe} from 'unstated';
import TwitterContainer from './containers/TwitterContainer';

const App = () => <Twitter />;

class Twitter extends Component {
  render() {
    return (
      <Provider>
        <Subscribe to={[TwitterContainer]}>
          {twitter => (
            <div className="app">
              <Button>Click Here</Button>
            </div>
          )}
        </Subscribe>
      </Provider>
    );
  }
}

render(React.createElement(App), document.getElementById('app'));
