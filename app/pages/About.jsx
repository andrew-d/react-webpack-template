import InlineCss from 'react-inline-css';
import React from 'react';


class About extends React.Component {
  render() {
    return (
      <InlineCss stylesheet={About.css()}>
        <p>This is the about page, demonstrating an inline style.</p>
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
