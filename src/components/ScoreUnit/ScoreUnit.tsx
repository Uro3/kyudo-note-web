import * as React from 'react';
import * as styles from './scoreUnit.scss';
import {ScoreContainer} from '../Score';

type Props = {
  id: number;
  values: number[];
};

const ScoreUnit: React.FC<Props> = props => {
  const scores = props.values.map((value, index) => 
    <ScoreContainer key={index} id={index} parentId={props.id} value={value}></ScoreContainer> 
  );

  return (
    <div className={styles.row}>
      {scores}
    </div>
  );
};

export default ScoreUnit;
