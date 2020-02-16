import {Action} from 'redux';
import {ScoreGroupState, ScoreState} from '../types';
import {STORAGE_NAME} from '../constants';

const ADD = 'app/scoreGroup/ADD' as const;
const UPDATE = 'app/scoreGroup/UPDATE' as const;

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

export type ScoreGroupActions = AddAction | UpdateAction;

let localData: ScoreState[] = [];
const localDataJson = localStorage.getItem(STORAGE_NAME);
if (localDataJson) {
  try {
    localData = JSON.parse(localDataJson);
  } catch (e) {
    console.error(e);
  }
}

const initialState: ScoreGroupState = {
  scores: localData.length > 0 ? localData : [{
    id: 0,
    values: [0, 0, 0, 0],
  }]
};

export default function reducer(state: ScoreGroupState = initialState, action: ScoreGroupActions): ScoreGroupState {
  switch (action.type) {
    case ADD: {
      const lastId = Math.max(...state.scores.map(score => score.id));
      const newScore = {
        id: lastId + 1,
        values: [0, 0, 0, 0]
      };
      return {
        ...state,
        scores: [...state.scores, newScore],
      };
    }
    case UPDATE: {
      const {id, index} = action.payload;
      const newScores = state.scores.map(score => {
        if (score.id === id) {
          const value = score.values[index]
          score.values[index] = (value + 1) % 4;
        }
        return score;
      });
      return {
        ...state,
        scores: newScores,
      };
    }
    default: {
      return state;
    }
  }
}
