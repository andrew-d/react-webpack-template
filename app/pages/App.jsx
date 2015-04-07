var React = require('react'),
    RouteHandler = require('react-router').RouteHandler,
    ReactBootstrap = require('react-bootstrap'),
    ReactRouterBootstrap = require('react-router-bootstrap');

var NavItemLink = ReactRouterBootstrap.NavItemLink,
    Nav = ReactBootstrap.Nav,
    Navbar = ReactBootstrap.Navbar;


var App = React.createClass({
  render: function() {
    return (
      <div className='page-wrapper'>
        <Navbar fluid={true} staticTop={true} brand='Template'>
          <Nav>
            <NavItemLink to='index'>
              Home
            </NavItemLink>
            <NavItemLink to='about'>
              About
            </NavItemLink>
          </Nav>
        </Navbar>

        <div className='container-fluid'>
          <RouteHandler />
        </div>
      </div>
    );
  },
});


module.exports = App;
