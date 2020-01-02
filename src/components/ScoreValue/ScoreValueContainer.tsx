import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {AppActions} from '../../store';
import {update} from '../../modules/scoreGroup';
import ScoreValue from './ScoreValue'

type Props = {
  parentId: number;
  id: number;
  value: number;
};

const mapDispatchToProps = (dispatch: Dispatch<AppActions>, ownProps: Props) => {
  const {parentId, id} = ownProps;
  return {
    update: (value: number) => dispatch(update(parentId, id, value))
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(ScoreValue);
