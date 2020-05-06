import * as React from 'react';
import ScoreValueContainer from './ScoreValueContainer';
import { ScoreState } from '../../type';

const Score: React.FC<ScoreState> = props => {
  const ScoreValues = props.values.map((value, index) => 
    <ScoreValueContainer key={index} id={index} value={value} scoreId={props.id}></ScoreValueContainer> 
  );

  return (
    <div className="og-score-row">
      {ScoreValues}
    </div>
  );
};

export default Score;
