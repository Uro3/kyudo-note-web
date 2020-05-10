import { connect } from 'react-redux';
import { AppState } from '../../store';
import Cirtified from '../commons/Cirtified';

type StateProps = {
  isLoggedIn: boolean;
};

const mapStateToProps = (state: AppState): StateProps => ({
  isLoggedIn: state.Auth.isLoggedIn,
});

export default connect(
  mapStateToProps
)(Cirtified);
