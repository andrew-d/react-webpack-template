// This must come first, in this order
import 'ie8';
import 'html5shiv/dist/html5shiv';
import 'html5shiv/dist/html5shiv-printshiv';
import 'babel/polyfill';

import Marty from 'marty';
import React from 'react';
import Router from 'react-router';

// Import vendor styles here.
import 'bootstrap/dist/css/bootstrap.css';

if( process.env.NODE_ENV !== 'production' ) {
  // Dev tool support
  window.React = React;
  window.Marty = Marty;
}

import routes from './Routes';
Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler />, document.body);
});
