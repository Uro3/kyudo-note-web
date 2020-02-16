import { createStore, combineReducers } from 'redux';
import ScoreGroup, { ScoreGroupActions } from './modules/scoreGroup';

const reducers = combineReducers({
  ScoreGroup
});

const store = createStore(reducers);

export default store;

export type AppActions = ScoreGroupActions;
export type AppState = ReturnType<typeof store.getState>;
