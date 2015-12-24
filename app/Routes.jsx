import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Require routes
import About from './pages/About';
import App from './pages/App';
import Home from './pages/Home';
import TypeScript from './pages/TypeScript';


const Routes = (
  <Route path='/' component={App}>
    {/* Introduction page */}
    <IndexRoute component={Home} />

    {/* Demo page for TypeScript */}
    <Route path='/ts' component={TypeScript} />

    {/* About page */}
    <Route path='/about' component={About} />
  </Route>
);


export default Routes;
