import Icon from 'react-fa';
import InlineCss from 'react-inline-css';
import React from 'react';


class About extends React.Component {
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

// Inline styles for the above class.
About.css = () => `
  & {
    font-family: monospace;
  }

  & p {
    color: blue;
  }
`;


module.exports = About;
