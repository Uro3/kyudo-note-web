import * as React from 'react';
import * as styles from './scoreUnit.scss';
import Score from '../Score';

type Props = {
  id: number;
  values: number[];
  onChanged: (index1: number, index2: number, value: number) => void;
};

const ScoreUnit: React.FC<Props> = props => {
  const onChanged = (index: number, nextValue: number) => {
    props.onChanged(props.id, index, nextValue);
  };

  const scores = props.values.map((value, index) => 
    <Score key={index} id={index} value={value} onClick={onChanged}></Score> 
  );

  return (
    <div className={styles.row}>
      {scores}
    </div>
  );
};

export default ScoreUnit;
