import * as React from 'react';
import Score from '../Score';
import {ScoreState} from '../../types';

type Props = {
  scoreIds: number[],
  add: () => void,
};

const ScoreGroup: React.FC<Props> = props => {
  const scoreUnits = props.scoreIds.map(id => 
    <Score key={id} id={id}></Score> 
  );

  return (
    <div>
      {scoreUnits}
      <button onClick={props.add}>追加</button>
    </div>
  );
};

export default ScoreGroup;
