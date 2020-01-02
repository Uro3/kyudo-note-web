import * as React from 'react';
import ScoreUnit from '../ScoreUnit';
import {ScoreState} from '../../types';

type Props = {
  scores: ScoreState[],
  add: () => void,
};

const ScoreGroup: React.FC<Props> = props => {
  const scoreUnits = props.scores.map(score => 
    <ScoreUnit key={score.id} id={score.id} values={score.values}></ScoreUnit> 
  );

  return (
    <div>
      {scoreUnits}
      <button onClick={props.add}>追加</button>
    </div>
  );
};

export default ScoreGroup;
