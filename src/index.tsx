import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ScoreField from './ScoreField';

class App extends React.Component {
  render() {
    const list = [1, 0, 1, 1]
    return (
      <ScoreField />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
