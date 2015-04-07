import InlineCss from 'react-inline-css';
import React from 'react';

var About = React.createClass({
  statics: {
    css() {
      return `
        & {
          font-family: monospace;
        }

        & p {
          color: blue;
        }
      `;
    },
  },

  render() {
    return (
      <InlineCss stylesheet={About.css()}>
        <p>This is the about page, demonstrating an inline style.</p>
      </InlineCss>
    );
  },
});


module.exports = About;
