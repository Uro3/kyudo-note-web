import * as React from 'react';

import Score from './Score';

type State = {
  scores: number[];
}

export default class ScoreUnit extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
      scores: [1, 0, 1, 1]
    };
    this.onScoreChanged = this.onScoreChanged.bind(this);
  }

  onScoreChanged(index: number, value: number) {
    const scores = this.state.scores.slice();
    scores[index] = value;
    this.setState(state => ({
      scores: scores
    }));
  }

  render() {
    const scoreMarks = this.state.scores.map((score, index) => 
      <Score key={index} id={index} value={score} onClick={this.onScoreChanged}></Score> 
    );
  return <div>{scoreMarks}</div>;
  }
}
