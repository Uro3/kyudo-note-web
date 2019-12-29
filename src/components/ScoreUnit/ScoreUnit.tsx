import * as React from 'react';
import * as styles from './scoreUnit.scss';
import Score from '../Score';

type State = {
  scores: number[];
};

export default class ScoreUnit extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
      scores: [0, 0, 0, 0]
    };
    this.onScoreChanged = this.onScoreChanged.bind(this);
  }

  onScoreChanged(index: number, nextValue: number) {
    const scores = this.state.scores.slice();
    scores[index] = nextValue;
    this.setState(state => ({
      scores: scores
    }));
  }

  render() {
    const scoreMarks = this.state.scores.map((score, index) => 
      <Score key={index} id={index} value={score} onClick={this.onScoreChanged}></Score> 
    );
    return <div className={styles.row}>{scoreMarks}</div>;
  }
}
