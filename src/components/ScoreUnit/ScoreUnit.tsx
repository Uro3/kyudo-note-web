import * as React from 'react';
import * as styles from './scoreUnit.scss';
import Score from '../Score';

type Props = {
  id: number;
  values: number[];
  onChanged: (index1: number, index2: number, value: number) => void;
};

export default class ScoreUnit extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.onChanged = this.onChanged.bind(this);
  }

  onChanged(index: number, nextValue: number) {
    this.props.onChanged(this.props.id, index, nextValue);
  }

  render() {
    const scoreMarks = this.props.values.map((value, index) => 
      <Score key={index} id={index} value={value} onClick={this.onChanged}></Score> 
    );
    return (
      <div className={styles.row}>
        {scoreMarks}
      </div>
    );
  }
}
