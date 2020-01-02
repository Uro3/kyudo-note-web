import * as React from 'react';
import ScoreUnit from '../ScoreUnit';

type Props = {
  scores: number[][],
  add: () => void,
};

const ScoreGroup: React.FC<Props> = props => {
  const scoreUnits = props.scores.map((values, index) => 
    <ScoreUnit key={index} id={index} values={values}></ScoreUnit> 
  );

  return (
    <div>
      {scoreUnits}
      <button onClick={props.add}>追加</button>
    </div>
  );
};

export default ScoreGroup;
