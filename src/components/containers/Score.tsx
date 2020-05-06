import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppActions } from '../../store';
import { update } from '../../modules/record';
import Score from '../parts/Score';

type Props = {
  scoreSetId: number;
};

const mapDispatchToProps = (dispatch: Dispatch<AppActions>, ownProps: Props) => {
  const {scoreSetId} = ownProps;
  return {
    update: (id: number) => dispatch(update(scoreSetId, id))
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Score);
