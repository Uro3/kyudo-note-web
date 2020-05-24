import { connect } from 'react-redux';
import { AppState } from '../../store';
import Navbar from '../commons/Navbar';

type StateProps = {
  isLoggedIn: boolean;
};

const mapStateToProps = (state: AppState): StateProps => ({
  isLoggedIn: state.Auth.isLoggedIn,
});

export default connect(
  mapStateToProps
)(Navbar);
