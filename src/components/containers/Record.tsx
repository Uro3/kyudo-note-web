import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState, AppActions } from '~/store';
import { recordAction } from '~/modules/record';
import { ScoreSetState } from '~/types/record';
import Record from '~/components/parts/Record';

type StateProps = {
  scoreSets: ScoreSetState[];
};

type DispatchProps  = {
  add: () => void;
}

const mapStateToProps = (state: AppState): StateProps => ({
  scoreSets: state.Record.scoreSets
});

const mapDispatchToProps = (dispatch: Dispatch<AppActions>): DispatchProps => ({
  add: (): AppActions => dispatch(recordAction.add())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Record);
