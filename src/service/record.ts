import { functions } from '~/firebase.ts';
import { ScoreSetState } from '~/types/record';

const saveRecordFunction = functions.httpsCallable('saveRecord');

const saveRecord = async (scores: ScoreSetState[], date: string): Promise<void> => {  
  const params = {
    scores,
    date,
  }
  await saveRecordFunction(params);
};

export {
  saveRecord
};
