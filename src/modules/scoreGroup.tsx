import {Action} from 'redux';
import {ScoreGroupState} from '../types';

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

const initialState: ScoreGroupState = {
  lastId: 0,
  scores: [{
    id: 0,
    values: [0, 0, 0, 0],
  }]
};

export default function reducer(state:ScoreGroupState = initialState, action: ScoreGroupActions) {
  switch (action.type) {
    case ADD: {
      const newId = state.lastId + 1;
      const newScore = {
        id: newId,
        values: [0, 0, 0, 0]
      };
      return {
        ...state,
        lastId: newId,
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
