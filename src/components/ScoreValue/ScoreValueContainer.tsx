import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {AppState, AppActions} from '../../store';
import {update} from '../../modules/scoreGroup';
import ScoreValue from './ScoreValue'

type Props = {
  scoreId: number;
  id: number;
};

const mapStateToProps = (state: AppState, ownProps: Props) => {
  const {scoreId, id} = ownProps;
  const score = state.ScoreGroup.scores.find(score => score.id === scoreId);
  const value = score ? score.values[id] : 0;
  return {
    value: value
  }
};

const mapDispatchToProps = (dispatch: Dispatch<AppActions>, ownProps: Props) => {
  const {scoreId, id} = ownProps;
  return {
    update: (value: number) => dispatch(update(scoreId, id, value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScoreValue);
