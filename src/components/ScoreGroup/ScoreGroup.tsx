import * as React from 'react';
import Score from '../Score';
import {ScoreState} from '../../types';

type Props = {
  scores: ScoreState[],
  add: () => void,
};

const ScoreGroup: React.FC<Props> = props => {
  const scoreUnits = props.scores.map(score => 
    <Score key={score.id} id={score.id} values={score.values}></Score> 
  );

  return (
    <div>
      {scoreUnits}
      <button onClick={props.add}>追加</button>
    </div>
  );
};

export default ScoreGroup;
