var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var expect = require('expect');
var Home = require('./Home');

describe('home', function () {
  it('renders without problems', function () {
    var home = TestUtils.renderIntoDocument(<Home />);
    expect(home).toExist();
  });
});
