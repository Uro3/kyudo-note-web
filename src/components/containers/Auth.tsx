import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState, AppActions } from '~/store';
import { authAction } from '~/modules/auth';
import Auth from '~/components/commons/Auth';

type StateProps = {
  isLoaded: boolean;
};

type DispatchProps  = {
  updateIsLoggedIn: (isLoggedIn: boolean) => void;
  updateIsLoaded: (isLoaded: boolean) => void;
}

const mapStateToProps = (state: AppState): StateProps => ({
  isLoaded: state.Auth.isLoaded,
});

const mapDispatchToProps = (dispatch: Dispatch<AppActions>): DispatchProps => {
  return {
    updateIsLoggedIn: (isLoggedIn: boolean): AppActions => dispatch(authAction.updateIsLoggedIn(isLoggedIn)),
    updateIsLoaded: (isLoaded: boolean): AppActions => dispatch(authAction.updateIsLoaded(isLoaded)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);
