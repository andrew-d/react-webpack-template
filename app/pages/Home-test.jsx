import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import Home from './Home';


describe('home', function () {
  it('renders without problems', function () {
    var home = TestUtils.renderIntoDocument(<Home />);
    expect(home).toExist();
  });
});
