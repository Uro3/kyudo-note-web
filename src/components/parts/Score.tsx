import * as React from 'react';

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
  update: (id: number) => void;
};

const Score: React.FC<Props> = props => {
  const onClick = (): void => {
    props.update(props.id);
  };

  const sign = signMap.get(props.value) || Sign.None;

  return (
    <button className="og-score" onClick={onClick}>
      <span className={sign === Sign.None ? 'og-transparent' : ''}>
        {sign}
      </span>
    </button>
  );
};

export default Score;
