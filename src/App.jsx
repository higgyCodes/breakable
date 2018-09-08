import React from 'react';
import { render } from 'react-dom';

const App = () =>
    <div className="app">
      <h1>Does this work</h1>
    </div>

render(React.createElement(App), document.getElementById('app'));

