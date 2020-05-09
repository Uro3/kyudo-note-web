import types, { UpdateIsLoggedInAction, UpdateIsLoadedAction } from './types';

const updateIsLoggedIn = (isLoggedIn: boolean): UpdateIsLoggedInAction => ({
  type: types.UPDATE_IS_LOGGED_IN,
  payload: {
    isLoggedIn
  }
});

const updateIsLoaded = (isLoaded: boolean): UpdateIsLoadedAction => ({
  type: types.UPDATE_IS_LOADED,
  payload: {
    isLoaded
  }
});

export default {
  updateIsLoggedIn,
  updateIsLoaded,
}
