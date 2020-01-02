import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {AppState, AppActions} from '../../store';
import {add} from '../../modules/scoreGroup';
import ScoreGroup from './ScoreGroup';

const mapStateToProps = (state: AppState) => ({
  scoreIds: state.ScoreGroup.scores.map(score => score.id)
});

const mapDispatchToProps = (dispatch: Dispatch<AppActions>) => ({
  add: () => dispatch(add())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreGroup);
