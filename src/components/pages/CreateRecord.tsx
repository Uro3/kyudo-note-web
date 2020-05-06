import * as React from 'react';
import ScoreSet from '../parts/ScoreSet';
import { ScoreSetState } from '../../type';
import { STORAGE_NAME } from '../../constants';
import firebase from '../../firebase';

type Props = {
  scoreSets: ScoreSetState[];
  add: () => void;
};

const CreateRecord: React.FC<Props> = props => {
  const db = firebase.firestore();
  const user = firebase.auth().currentUser;

  const scoreSets = props.scoreSets.map(scoreSet => 
    <ScoreSet key={scoreSet.id} id={scoreSet.id} scores={scoreSet.scores} />
  );

  const getSavedScore = (): ScoreSetState[] => {
    return props.scoreSets.filter(scoreSet =>
      scoreSet.scores.some(score => score)
    );
  };

  const onClickTemporarySave = (): void => {
    const data = JSON.stringify(getSavedScore());
    localStorage.setItem(STORAGE_NAME, data);
  };

  const onClickSave = (): void => {
    if (user) {
      db.collection('records').add({
        uid: user.uid,
        scores: getSavedScore(),
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
  };

  return (
    <div className="container">
      {scoreSets}
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

export default CreateRecord;
