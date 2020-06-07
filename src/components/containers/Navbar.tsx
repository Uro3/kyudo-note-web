import { connect } from 'react-redux';
import { AppState } from '~/store';
import Navbar from '~/components/commons/Navbar';

type StateProps = {
  isLoggedIn: boolean;
};

const mapStateToProps = (state: AppState): StateProps => ({
  isLoggedIn: state.Auth.isLoggedIn,
});

export default connect(
  mapStateToProps
)(Navbar);
