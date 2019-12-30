import * as React from 'react';
import ScoreUnit from '../ScoreUnit';

const ScoreGroup: React.FC = () => {
  const [scores, setScores] = React.useState([[0, 0, 0, 0]]);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newScores = [...scores];
    newScores.push([0,0,0,0]);
    setScores(newScores);
  }

  const onScoreChanged = (index1: number, index2: number, nextValue: number) => {
    const newScores = [...scores];
    newScores[index1][index2] = nextValue;
    setScores(newScores);
  }

  const scoreUnits = scores.map((values, index) => 
    <ScoreUnit key={index} id={index} values={values} onChanged={onScoreChanged}></ScoreUnit> 
  );

  return (
    <div>
      {scoreUnits}
      <button onClick={onClick}>追加</button>
    </div>
  );
};

export default ScoreGroup;
