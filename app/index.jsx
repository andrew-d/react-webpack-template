// This must come first
import 'babel/polyfill';

import Marty from 'marty';
import React from 'react';
import Router from 'react-router';

import routes from './Routes';

// Import vendor styles here.
import 'bootstrap/dist/css/bootstrap.css';

if( process.env.NODE_ENV !== 'production' ) {
  // Dev tool support
  window.React = React;
  window.Marty = Marty;
}

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler />, document.body);
});
