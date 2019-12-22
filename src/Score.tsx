import * as React from 'react';
import styles from './styles/score.scss';

type Props ={
  id: number;
  value: number;
  onClick: (index: number, value: number) => void;
}

export default class Score extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props)
    this.onClick = this.onClick.bind(this);
  }

  onClick(event: React.MouseEvent<HTMLButtonElement>) {
    this.props.onClick(this.props.id, (this.props.value+1)%4);
  }

  getSign(value: number) {
    switch (value) {
      case 1:
        return <span>×</span>;
      case 2:
        return <span>○</span>;
      case 3:
        return <span>?</span>;
      default:
        return <span className={styles.transparent}>-</span>;;
    }
  }

  render() {
    return (
        <button className={styles.score} onClick={this.onClick}>
          {this.getSign(this.props.value)}
        </button>
    );
  }
}
