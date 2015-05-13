import Icon from 'react-fa';
import InlineCss from 'react-inline-css';
import React from 'react';


export default class About extends React.Component {
  // Inline styles for this class.
  static css = () => `
    & {
      font-family: monospace;
    }

    & p {
      color: blue;
    }
  `;

  render() {
    return (
      <InlineCss stylesheet={About.css()}>
        <p>This is the about page, demonstrating an inline style.</p>

        <p>
          This is an icon from the react-fa project: <Icon name='spinner' spin={true} />
        </p>
      </InlineCss>
    );
  }
}
