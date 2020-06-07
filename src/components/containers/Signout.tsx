import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppActions } from '~/store';
import { authAction } from '~/modules/auth';
import Signout from '~/components/pages/Signout';

type DispatchProps  = {
  updateIsLoggedIn: (isLoggedIn: boolean) => void;
}

const mapDispatchToProps = (dispatch: Dispatch<AppActions>): DispatchProps => {
  return {
    updateIsLoggedIn: (isLoggedIn: boolean): AppActions => dispatch(authAction.updateIsLoggedIn(isLoggedIn)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Signout);
