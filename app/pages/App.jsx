var React = require('react'),
    RouteHandler = require('react-router').RouteHandler;

var ReactBootstrap = require('react-bootstrap'),
    Nav = ReactBootstrap.Nav,
    Navbar = ReactBootstrap.Navbar;

var ReactRouterBootstrap = require('react-router-bootstrap'),
    NavItemLink = ReactRouterBootstrap.NavItemLink;


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
