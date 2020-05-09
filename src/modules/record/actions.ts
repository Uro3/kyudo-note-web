import types, { AddAction, UpdateAction } from './types';

const add = (): AddAction => ({
  type: types.ADD
});

const update = (id: number, index: number): UpdateAction => ({
  type: types.UPDATE,
  payload: {
    id: id,
    index: index
  }
});

export default {
  add,
  update,
}
