import * as React from 'react';
import * as styles from './score.scss';

enum Sign {
  None = '-',
  Hit = '○',
  Miss = '×',
  Unknown = '?',
}

const signMap = new Map<number, Sign>([
  [0, Sign.None],
  [1, Sign.Hit],
  [2, Sign.Miss],
  [3, Sign.Unknown],
]);

type Props = {
  id: number;
  value: number;
  onClick: (index: number, value: number) => void;
};

export default class Score extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(event: React.MouseEvent<HTMLButtonElement>) {
    const nextValue = (this.props.value + 1) % 4;
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
