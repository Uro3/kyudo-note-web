import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppActions } from '../../store';
import { authAction } from '../../modules/auth';
import Auth from '../commons/Auth';

type DispatchProps  = {
  updateIsLoggedIn: (isLoggedIn: boolean) => void;
  updateIsLoaded: (isLoaded: boolean) => void;
}

const mapDispatchToProps = (dispatch: Dispatch<AppActions>): DispatchProps => {
  return {
    updateIsLoggedIn: (isLoggedIn: boolean): AppActions => dispatch(authAction.updateIsLoggedIn(isLoggedIn)),
    updateIsLoaded: (isLoaded: boolean): AppActions => dispatch(authAction.updateIsLoaded(isLoaded)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Auth);
