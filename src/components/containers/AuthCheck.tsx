import { connect } from 'react-redux';
import { AppState } from '~/store';
import AuthCheck from '~/components/commons/AuthCheck';

type StateProps = {
  isLoggedIn: boolean;
};

const mapStateToProps = (state: AppState): StateProps => ({
  isLoggedIn: state.Auth.isLoggedIn,
});

export default connect(
  mapStateToProps
)(AuthCheck);
