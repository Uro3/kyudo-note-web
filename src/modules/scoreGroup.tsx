import {Action} from 'redux';

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
    index1: number;
    index2: number;
    value: number;
  };
}

export const update = (index1: number, index2: number, value: number): UpdateAction => ({
  type: UPDATE,
  payload: {
    index1: index1,
    index2: index2,
    value: value,
  }
});

export type ScoreGroupActions = AddAction | UpdateAction;

const initialState = {
  scores: [[0, 0, 0, 0]]
};

export default function reducer(state = initialState, action: ScoreGroupActions) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        scores: [
          ...state.scores,
          [0, 0, 0, 0]
        ]
      };
    case UPDATE:
      const newScores = [...state.scores];
      newScores[action.payload.index1][action.payload.index2] = action.payload.value;
      return {
        ...state,
        scores: newScores,
      };
    default:
      return state;
  }
}
