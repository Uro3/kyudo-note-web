import firebase from '~/firebase.ts';
import { ScoreSetState } from '~/types/record';

const saveRecord = async (scores: ScoreSetState[], date: string): Promise<void> => {
  const functions = firebase.app().functions('asia-northeast1');
  const saveRecordFunction = functions.httpsCallable('saveRecord');
  const params = {
    scores,
    date,
  }
  await saveRecordFunction(params);
};

export {
  saveRecord
};
