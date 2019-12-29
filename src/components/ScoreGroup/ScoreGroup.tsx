import * as React from 'react';
import ScoreUnit from '../ScoreUnit';

type State = {
  scores: number[][];
}

export default class ScoreGroup extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
      scores: [[0, 0, 0, 0]]
    };
    this.onClick = this.onClick.bind(this);
    this.onScoreChanged = this.onScoreChanged.bind(this);
  }

  onClick(event: React.MouseEvent<HTMLButtonElement>) {
    const scores = [...this.state.scores];
    scores.push([0,0,0,0]);
    this.setState({scores: scores});
  }

  onScoreChanged(index1: number, index2: number, nextValue: number) {
    const scores = [...this.state.scores];
    scores[index1][index2] = nextValue;
    this.setState({scores: scores});
  }

  render() {
    const scoreUnits = this.state.scores.map((values, index) => 
      <ScoreUnit key={index} id={index} values={values} onChanged={this.onScoreChanged}></ScoreUnit> 
    );
    return (
      <div>
        {scoreUnits}
        <button onClick={this.onClick}>追加</button>
      </div>
    );
  }
}
