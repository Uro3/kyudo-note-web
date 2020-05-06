import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState, AppActions } from '../../store';
import { add } from '../../modules/record';
import Record from '../parts/Record';

const mapStateToProps = (state: AppState) => ({
  scoreSets: state.Record.scoreSets
});

const mapDispatchToProps = (dispatch: Dispatch<AppActions>) => ({
  add: () => dispatch(add())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Record);
