import { Action } from 'redux';

const ADD = 'app/record/ADD' as const;
const UPDATE = 'app/record/UPDATE' as const;

export interface AddAction extends Action {
  type: typeof ADD;
}

export interface UpdateAction extends Action {
  type: typeof UPDATE;
  payload: {
    id: number;
    index: number;
  };
}

export type RecordActions = AddAction | UpdateAction;

export default {
  ADD,
  UPDATE
}
