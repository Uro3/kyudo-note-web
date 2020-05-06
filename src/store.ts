import { createStore, combineReducers } from 'redux';
import Record, { RecordActions } from './modules/record';

const reducers = combineReducers({
  Record
});

const store = createStore(reducers);

export default store;

export type AppActions = RecordActions;
export type AppState = ReturnType<typeof store.getState>;
