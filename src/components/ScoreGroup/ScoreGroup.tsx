import * as React from 'react';
import ScoreUnit from '../ScoreUnit';

const storageName = 'scores';

const ScoreGroup: React.FC = () => {
  let initialData = [[0, 0, 0, 0]];
  const json = localStorage.getItem(storageName);
  if (json) {
    try {
      initialData = JSON.parse(json);
      if (!Array.isArray(initialData) || initialData.length === 0) {
        initialData = [[0, 0, 0, 0]];
      }
    } catch (e) {
      console.error(e);
    }
  }
  const [scores, setScores] = React.useState(initialData);

  const onClickAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newScores = [...scores];
    newScores.push([0, 0, 0, 0]);
    setScores(newScores);
  }

  const onClickSave = (event: React.MouseEvent<HTMLButtonElement>) => {
    const savedScores = scores.filter(values => 
      values.some(value => value)
    );
    const data = JSON.stringify(savedScores);
    localStorage.setItem(storageName, data);
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
      <button onClick={onClickAdd}>追加</button>
      <button onClick={onClickSave}>一時保存</button>
    </div>
  );
};

export default ScoreGroup;
