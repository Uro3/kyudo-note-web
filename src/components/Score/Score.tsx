import * as React from 'react';
import * as styles from './score.scss';
import {ScoreValueContainer} from '../ScoreValue';

type Props = {
  id: number;
  values: number[];
};

const Score: React.FC<Props> = props => {
  const scores = props.values.map((value, index) => 
    <ScoreValueContainer key={index} id={index} parentId={props.id} value={value}></ScoreValueContainer> 
  );

  return (
    <div className={styles.row}>
      {scores}
    </div>
  );
};

export default Score;
