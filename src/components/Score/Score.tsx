import * as React from 'react';
import * as styles from './score.scss';
import {ScoreValueContainer} from '../ScoreValue';

type Props = {
  id: number;
};

const Score: React.FC<Props> = props => {
  const scores = [...Array(4)].map((_, index) => 
    <ScoreValueContainer key={index} id={index} scoreId={props.id}></ScoreValueContainer> 
  );

  return (
    <div className={styles.row}>
      {scores}
    </div>
  );
};

export default Score;
