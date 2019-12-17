import * as React from 'react';

import ScoreMark from './ScoreMark';

type Props ={
  id: number;
  value: number;
  onClick: (index: number, value: number) => void;
}

export default class ScoreSet extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props)
    this.onClick = this.onClick.bind(this);
  }

  onClick(event: React.MouseEvent<HTMLButtonElement>) {
    this.props.onClick(this.props.id, (this.props.value+1)%4);
  }

  render() {
    return (
        <button onClick={this.onClick}>
          <ScoreMark value={this.props.value}></ScoreMark>
        </button>
    );
  }
}
