import types, { AuthActions } from './types';
import { AuthState } from  '~/types/auth' 

const initialState: AuthState = {
  isLoggedIn: false,
  isLoaded: false,
};

const authReducer = (state: AuthState = initialState, action: AuthActions): AuthState => {
  switch (action.type) {
    case types.UPDATE_IS_LOGGED_IN: {
      const { isLoggedIn } = action.payload;
      return {
        ...state,
        isLoggedIn,
      };
    }
    case types.UPDATE_IS_LOADED: {
      const { isLoaded } = action.payload;
      return {
        ...state,
        isLoaded,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
