import * as React from 'react';
import Record from '~/components/containers/Record';
import { ScoreSetState } from '~/types/record';
import { STORAGE_NAME } from '~/constants';
import { saveRecord } from '~/service/record';
import dateUtil from '~/lib/dateUtil';

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

  const save = async (scoreSets: ScoreSetState[]): Promise<void> => {
    try {
      await saveRecord(getSavedScore(scoreSets), date);
    } catch (error) {
      console.log(error);
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
