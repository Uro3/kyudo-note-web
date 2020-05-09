import * as React from 'react';
import Record from '../containers/Record';
import { ScoreSetState } from '../../types/record';
import { STORAGE_NAME } from '../../constants';
import firebase from '../../firebase';

const CreateRecord: React.FC = () => {
  const db = firebase.firestore();
  const user = firebase.auth().currentUser;

  const getSavedScore = (scoreSets: ScoreSetState[]): ScoreSetState[] => {
    return scoreSets.filter(scoreSet =>
      scoreSet.scores.some(score => score)
    );
  };

  const saveTemporary = (scoreSets: ScoreSetState[]): void => {
    const data = JSON.stringify(getSavedScore(scoreSets));
    localStorage.setItem(STORAGE_NAME, data);
  };

  const save = (scoreSets: ScoreSetState[]): void => {
    if (user) {
      db.collection('records').add({
        uid: user.uid,
        scores: getSavedScore(scoreSets),
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
  };

  return (
    <div className="container">
      <Record save={save} saveTemporary={saveTemporary} />
    </div>
  );
};

export default CreateRecord;
