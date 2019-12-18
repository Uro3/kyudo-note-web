import * as React from 'react';

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
      case 0:
        return '';
      case 1:
        return '×';
      case 2:
        return '○';
      case 3:
        return '?';
      default:
        return '';
    }
  }

  render() {
    return (
        <button onClick={this.onClick}>
          {this.getSign(this.props.value)}
        </button>
    );
  }
}
