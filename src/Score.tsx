import * as React from 'react';
import * as styles from './styles/score.scss';

export type ScoreValue = 0 | 1 | 2 | 3;

const next = new Map<ScoreValue, ScoreValue>([
  [0, 1], [1, 2], [2, 3], [3, 0]
]);

interface Sign {
  character: string;
  isVisible: boolean;
}

const signMap = new Map<ScoreValue, Sign>([
  [0, {character: '-', isVisible: false}],
  [1, {character: '○', isVisible: true}],
  [2, {character: '×', isVisible: true}],
  [3, {character: '?', isVisible: true}],
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
    const sign = signMap.get(this.props.value);
    if (sign) {
      return (
        <button className={styles.score} onClick={this.onClick}>
          <span className={sign.isVisible ? '' : styles.transparent}>
            {sign.character}
          </span>
        </button>
      );
    }
  }
}
