import * as React from 'react';
import * as styles from './score.scss';

export type ScoreValue = 0 | 1 | 2 | 3;

const next = new Map<ScoreValue, ScoreValue>([
  [0, 1], [1, 2], [2, 3], [3, 0]
]);

enum Sign {
  None = '-',
  Hit = '○',
  Miss = '×',
  Unknown = '?',
}

const signMap = new Map<ScoreValue, Sign>([
  [0, Sign.None],
  [1, Sign.Hit],
  [2, Sign.Miss],
  [3, Sign.Unknown],
]);

type Props = {
  id: number;
  value: ScoreValue;
  onClick: (index: number, value: ScoreValue) => void;
};

export default class Score extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(event: React.MouseEvent<HTMLButtonElement>) {
    const nextValue = next.get(this.props.value) || 0;
    this.props.onClick(this.props.id, nextValue);
  }

  render() {
    const sign = signMap.get(this.props.value) || Sign.None;
    return (
      <button className={styles.score} onClick={this.onClick}>
        <span className={sign === Sign.None ? styles.transparent : ''}>
          {sign}
        </span>
      </button>
    );
  }
}
