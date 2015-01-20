/* global React, document*/

'use strict';

global.React = global.react = require('react/addons');
global.animate = React.addons.CSSTransitionGroup;
global.classSet = React.addons.classSet;

require('react-tap-event-plugin')();

var get = (val) => document.documentElement.getAttribute(val);
var propsJson = get('data-props');
if (propsJson) {
  var props = JSON.parse(propsJson);
}

var map = require('./component-map.js');

var mountPoint = document.getElementById('content');
if (mountPoint !== null) {
  var Layout = map[mountPoint.getAttribute('data-layout')];
  var Component = map[mountPoint.getAttribute('data-component')];

  var output = (
    <Layout {...props}>
      <Component {...props} />
    </Layout>
    );

  React.render(output, mountPoint);
}

console.log('app.js loaded');