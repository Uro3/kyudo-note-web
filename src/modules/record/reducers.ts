import types, { RecordActions } from './types';
import { RecordState, ScoreSetState } from  '~/types/record' 
import { STORAGE_NAME } from '~/constants';

let localData: ScoreSetState[] = [];
const localDataJson = localStorage.getItem(STORAGE_NAME);
if (localDataJson) {
  try {
    localData = JSON.parse(localDataJson);
  } catch (e) {
    console.error(e);
  }
}

const initialState: RecordState = {
  scoreSets: localData.length > 0 ? localData : [{
    id: 0,
    scores: [0, 0, 0, 0],
  }]
};

const recordReducer = (state: RecordState = initialState, action: RecordActions): RecordState => {
  switch (action.type) {
    case types.ADD: {
      const lastId = Math.max(...state.scoreSets.map(scoreSet => scoreSet.id));
      const newScore = {
        id: lastId + 1,
        scores: [0, 0, 0, 0]
      };
      return {
        ...state,
        scoreSets: [...state.scoreSets, newScore],
      };
    }
    case types.UPDATE: {
      const {id, index} = action.payload;
      const newScores = state.scoreSets.map(scoreSet => {
        if (scoreSet.id === id) {
          const value = scoreSet.scores[index]
          scoreSet.scores[index] = (value + 1) % 4;
        }
        return scoreSet;
      });
      return {
        ...state,
        scoreSets: newScores,
      };
    }
    default: {
      return state;
    }
  }
};

export default recordReducer;
