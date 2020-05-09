import { createStore, combineReducers } from 'redux';
import { recordReducer, RecordActions } from './modules/record';

const reducers = combineReducers({
  Record: recordReducer
});

const store = createStore(reducers);

export default store;

export type AppActions = RecordActions;
export type AppState = ReturnType<typeof store.getState>;
