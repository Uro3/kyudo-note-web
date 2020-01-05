import * as React from 'react';
import Score from '../Score';
import {ScoreState} from '../../types';
import {STORAGE_NAME} from '../../constants';

type Props = {
  scores: ScoreState[],
  add: () => void,
};

const ScoreGroup: React.FC<Props> = props => {
  const scoreUnits = props.scores.map(score => 
    <Score key={score.id} id={score.id} values={score.values}></Score> 
  );

  const onClickSave = (event: React.MouseEvent<HTMLButtonElement>) => {
    const savedScores = props.scores.filter(scores =>
      scores.values.some(value => value)
    );
    const data = JSON.stringify(savedScores);
    localStorage.setItem(STORAGE_NAME, data);
  }

  return (
    <div>
      {scoreUnits}
      <button onClick={props.add}>追加</button>
      <button onClick={onClickSave}>一時保存</button>
    </div>
  );
};

export default ScoreGroup;
