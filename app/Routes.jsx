import React from 'react';
import { Route, DefaultRoute } from 'react-router';

// Require routes
import About from './pages/About';
import App from './pages/App';
import Home from './pages/Home';


var Routes = (
  <Route handler={App} path='/'>
    {/* Introduction page */}
    <DefaultRoute name='index' handler={Home} />

    {/* About page */}
    <Route name='about' handler={About} />
  </Route>
);


module.exports = Routes;
