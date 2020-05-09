import { Action } from 'redux';

const UPDATE_IS_LOGGED_IN = 'app/auth/UPDATE_IS_LOGGED_IN' as const;
const UPDATE_IS_LOADED = 'app/auth/UPDATE_IS_LOADED' as const;

export interface UpdateIsLoggedInAction extends Action {
  type: typeof UPDATE_IS_LOGGED_IN;
  payload: {
    isLoggedIn: boolean;
  };
}

export interface UpdateIsLoadedAction extends Action {
  type: typeof UPDATE_IS_LOADED;
  payload: {
    isLoaded: boolean;
  };
}

export type AuthActions = UpdateIsLoggedInAction | UpdateIsLoadedAction;

export default {
  UPDATE_IS_LOGGED_IN,
  UPDATE_IS_LOADED,
}
