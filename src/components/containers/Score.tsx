import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppActions } from '~/store';
import { recordAction } from '~/modules/record';
import Score from '~/components/parts/Score';

type Props = {
  scoreSetId: number;
};

type DispatchProps  = {
  update: (id: number) => void;
}

const mapDispatchToProps = (dispatch: Dispatch<AppActions>, ownProps: Props): DispatchProps => {
  const {scoreSetId} = ownProps;
  return {
    update: (id: number): AppActions => dispatch(recordAction.update(scoreSetId, id))
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Score);
