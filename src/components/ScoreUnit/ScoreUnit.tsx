import * as React from 'react';
import * as styles from './scoreUnit.scss';
import {ScoreValueContainer} from '../ScoreValue';

type Props = {
  id: number;
  values: number[];
};

const ScoreUnit: React.FC<Props> = props => {
  const scores = props.values.map((value, index) => 
    <ScoreValueContainer key={index} id={index} parentId={props.id} value={value}></ScoreValueContainer> 
  );

  return (
    <div className={styles.row}>
      {scores}
    </div>
  );
};

export default ScoreUnit;
