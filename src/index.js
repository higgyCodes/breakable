import React from 'react';
import {render} from 'react-dom';
import {Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const App = () => (
  <div className="app">
    <h1>Does this work here</h1>
    <Button>Click Here</Button>
  </div>
);

render(React.createElement(App), document.getElementById('app'));
