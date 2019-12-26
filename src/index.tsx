import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ScoreGroup from './components/ScoreGroup';

class App extends React.Component {
  render() {
    const list = [1, 0, 1, 1]
    return (
      <ScoreGroup />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
