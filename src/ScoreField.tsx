import * as React from 'react';

import ScoreGroup from './ScoreGroup';

type State = {
  num: number;
}

export default class ScoreField extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
      num: 1
    };
  }

  render() {
    const scoreMarks = Array(this.state.num).fill(0).map((values, index) => 
      <ScoreGroup key={index}></ScoreGroup> 
    );
  return <div>{scoreMarks}</div>;
  }
}
