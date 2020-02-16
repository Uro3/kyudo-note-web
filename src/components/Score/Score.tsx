import * as React from 'react';
import * as styles from './score.scss';
import {  ScoreValueContainer } from '../ScoreValue';
import { ScoreState } from '../../types';

const Score: React.FC<ScoreState> = props => {
  const ScoreValues = props.values.map((value, index) => 
    <ScoreValueContainer key={index} id={index} value={value} scoreId={props.id}></ScoreValueContainer> 
  );

  return (
    <div className={styles.row}>
      {ScoreValues}
    </div>
  );
};

export default Score;
