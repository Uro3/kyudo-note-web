import * as React from 'react';
import Score from '../containers/Score';
import { ScoreSetState } from '../../types/record';

const ScoreSet: React.FC<ScoreSetState> = props => {
  const Scores = props.scores.map((score, index) => 
    <Score key={index} id={index} value={score} scoreSetId={props.id} />
  );

  return (
    <div className="og-score-row">
      {Scores}
    </div>
  );
};

export default ScoreSet;
