import * as React from 'react';
import * as styles from './scoreValue.scss';

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
  scoreId: number;
  id: number;
  value: number;
  update: (value: number) => void;
};

const scoreValue: React.FC<Props> = props => {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const nextValue = (props.value + 1) % 4;
    props.update(nextValue);
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

export default scoreValue;
