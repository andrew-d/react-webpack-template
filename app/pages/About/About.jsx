import Icon from 'react-fa';
import React from 'react';

import styles from './styles';


export default class About extends React.Component {
  render() {
    return (
      <div className={styles}>
        <p>This is the about page, demonstrating a component-local style.</p>

        <p>
          This is an icon from the react-fa project: <Icon name='spinner' spin />
        </p>
      </div>
    );
  }
}
