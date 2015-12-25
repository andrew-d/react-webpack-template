/// <reference path='../../typings/react/react.d.ts'/>
/// <reference path='../../typings/react/react-dom.d.ts'/>
/// <reference path='../../typings/react/react-addons-test-utils.d.ts'/>
/// <reference path='../../typings/mocha/mocha.d.ts'/>
/// <reference path='../../typings/chai/chai.d.ts'/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

import TypeScript from '../../app/pages/TypeScript';


describe('TypeScript', () => {
  it('renders without problems', function () {
    const page = TestUtils.renderIntoDocument(<TypeScript />);
    const title = TestUtils.findRenderedDOMComponentWithTag(page, 'h1');

    expect(ReactDOM.findDOMNode(title).textContent).to.eql('TypeScript');
  });
});
