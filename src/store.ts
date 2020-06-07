import { createStore, combineReducers } from 'redux';
import { recordReducer, RecordActions } from '~/modules/record';
import { authReducer, AuthActions } from '~/modules/auth';

const reducers = combineReducers({
  Record: recordReducer,
  Auth: authReducer,
});

const store = createStore(reducers);

export default store;

export type AppActions = RecordActions |  AuthActions;
export type AppState = ReturnType<typeof store.getState>;
