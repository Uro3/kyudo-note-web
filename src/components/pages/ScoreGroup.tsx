import * as React from 'react';
import Score from '../parts/Score';
import { ScoreState } from '../../type';
import { STORAGE_NAME } from '../../constants';
import firebase from '../../firebase';

type Props = {
  scores: ScoreState[];
  add: () => void;
};

const ScoreGroup: React.FC<Props> = props => {
  const db = firebase.firestore();
  const user = firebase.auth().currentUser;

  const scoreUnits = props.scores.map(score => 
    <Score key={score.id} id={score.id} values={score.values}></Score> 
  );

  const onClickTemporarySave = (): void => {
    const savedScores = props.scores.filter(scores =>
      scores.values.some(value => value)
    );
    const data = JSON.stringify(savedScores);
    localStorage.setItem(STORAGE_NAME, data);
  };

  const onClickSave = (): void => {
    if (user) {
      db.collection('records').add({
        uid: user.uid,
        score: props.scores,
      });
    }
  };

  return (
    <div className="container">
      {scoreUnits}
      <div className="og-vspace">
        <button className="button is-small" onClick={props.add}>追加</button>
        <button className="button is-small" onClick={onClickTemporarySave}>一時保存</button>
      </div>
      <div className="og-vspace">
        <button className="button is-small" onClick={onClickSave}>保存</button>
      </div>
    </div>
  );
};

export default ScoreGroup;
