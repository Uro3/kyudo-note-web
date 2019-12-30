import * as React from 'react';
import * as styles from './score.scss';

const enum Sign {
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

const Score: React.FC<Props> = props => {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const nextValue = (props.value + 1) % 4;
    props.onClick(props.id, nextValue);
  };

  const sign = signMap.get(props.value) || Sign.None;

  return (
    <button className={styles.score} onClick={onClick}>
      <span className={sign === Sign.None ? styles.transparent : ''}>
        {sign}
      </span>
    </button>
  );
};

export default Score;
