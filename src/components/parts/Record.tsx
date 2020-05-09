import * as React from 'react';
import ScoreSet from './ScoreSet';
import { ScoreSetState } from '../../types/record';

type Props = {
  scoreSets: ScoreSetState[];
  add: () => void;
  save: (scoreSets: ScoreSetState[]) => void;
  saveTemporary: (scoreSets: ScoreSetState[]) => void;
};

const CreateRecord: React.FC<Props> = props => {
  const scoreSets = props.scoreSets.map(scoreSet => 
    <ScoreSet key={scoreSet.id} id={scoreSet.id} scores={scoreSet.scores} />
  );

  const onClickTemporarySave = (): void => {
    props.saveTemporary(props.scoreSets);
  };

  const onClickSave = (): void => {
    props.save(props.scoreSets);
  };

  return (
    <div>
      {scoreSets}
      <div className="og-vspace">
        <button className="button is-small" onClick={props.add}>追加</button>
        <button className="button is-small" onClick={onClickTemporarySave}>一時保存</button>
      </div>
      <div className="og-vspace">
        <button className="button is-small" onClick={onClickSave}>保存</button>
      </div>
    </div>
  );
};

export default CreateRecord;
