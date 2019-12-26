import * as React from 'react';
import ScoreUnit from '../ScoreUnit';

type State = {
  num: number;
}

export default class ScoreGroup extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
      num: 1
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(event: React.MouseEvent<HTMLButtonElement>) {
    this.setState(state => ({
      num: state.num + 1
    }));
  }

  render() {
    const scoreUnits = Array(this.state.num).fill(0).map((values, index) => 
      <ScoreUnit key={index}></ScoreUnit> 
    );
    return (
      <div>
        {scoreUnits}
        <button onClick={this.onClick}>追加</button>
      </div>
    );
  }
}
