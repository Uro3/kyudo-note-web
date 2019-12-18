import * as React from 'react';

import ScoreUnit from './ScoreUnit';

type State = {
  num: number;
}

export default class ScoreGroup extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
      num: 1
    };
  }

  render() {
    const scoreMarks = Array(this.state.num).fill(0).map((values, index) => 
      <ScoreUnit key={index}></ScoreUnit> 
    );
  return <div>{scoreMarks}</div>;
  }
}
