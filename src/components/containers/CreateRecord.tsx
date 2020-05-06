import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState, AppActions } from '../../store';
import { add } from '../../modules/record';
import CreateRecord from '../pages/CreateRecord';

const mapStateToProps = (state: AppState) => ({
  scoreSets: state.Record.scoreSets
});

const mapDispatchToProps = (dispatch: Dispatch<AppActions>) => ({
  add: () => dispatch(add())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateRecord);
