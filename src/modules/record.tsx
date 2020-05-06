import { Action } from 'redux';
import { RecordState, ScoreSetState } from '../type';
import { STORAGE_NAME } from '../constants';

const ADD = 'app/record/ADD' as const;
const UPDATE = 'app/record/UPDATE' as const;

interface AddAction extends Action {
  type: typeof ADD;
}

export const add = (): AddAction => ({
  type: ADD
});

interface UpdateAction extends Action {
  type: typeof UPDATE;
  payload: {
    id: number;
    index: number;
  };
}

export const update = (id: number, index: number): UpdateAction => ({
  type: UPDATE,
  payload: {
    id: id,
    index: index
  }
});

export type RecordActions = AddAction | UpdateAction;

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

export default function reducer(state: RecordState = initialState, action: RecordActions): RecordState {
  switch (action.type) {
    case ADD: {
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
    case UPDATE: {
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
}
