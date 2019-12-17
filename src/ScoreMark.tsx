import * as React from 'react';

type Props ={
  value: number;
}

export default class ScoreMark extends React.Component<Props, {}> {
  render() {
    let str: string;
    switch (this.props.value) {
      case 0:
        str = ' ';
        break;
      case 1:
        str = '×';
        break;
      case 2:
        str = '○';
        break;
      case 3:
        str = '?';
        break;
      default:
        str = '';
        break;
    }
  return <span>{str}</span>
  }
}
