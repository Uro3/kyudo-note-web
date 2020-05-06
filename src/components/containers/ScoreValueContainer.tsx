import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppActions } from '../../store';
import { update } from '../../modules/scoreGroup';
import ScoreValue from '../parts/ScoreValue';

type Props = {
  scoreId: number;
};

const mapDispatchToProps = (dispatch: Dispatch<AppActions>, ownProps: Props) => {
  const {scoreId} = ownProps;
  return {
    update: (id: number) => dispatch(update(scoreId, id))
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(ScoreValue);
