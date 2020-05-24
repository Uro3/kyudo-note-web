import * as React from 'react';
import Record from '../containers/Record';
import { ScoreSetState } from '../../types/record';
import { STORAGE_NAME } from '../../constants';
import firebase from '../../firebase';
import dateUtil from '../../lib/dateUtil';

const CreateRecord: React.FC = () => {
  const [date, setDate] = React.useState(dateUtil.today);

  const onDateChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setDate(event.target.value);
  };

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
    const db = firebase.firestore();
    const user = firebase.auth().currentUser;
    if (user) {
      db.collection('records').add({
        uid: user.uid,
        scores: getSavedScore(scoreSets),
        date: date,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
  };

  return (
    <div className="container">
      <input className="input is-small og-input-date" type="date" value={date} onChange={onDateChanged} />
      <Record save={save} saveTemporary={saveTemporary} />
    </div>
  );
};

export default CreateRecord;
