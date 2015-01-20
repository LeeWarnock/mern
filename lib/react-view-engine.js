var replace$ = ''.replace;
var React = require('react');
var path = require('path');

global.React = global.react = require('react/addons');
global.animate = React.addons.CSSTransitionGroup;
global.classSet = React.addons.classSet;

module.exports = function(layoutFn){
  return function(view, locals, callback){
    var viewFileName, layout, extension, ref$, Component, Layout, e;
    viewFileName = path.relative(locals.settings.views, view).replace('\\', '/');
    locals.layout || (locals.layout = 'layouts/default');
    layout = locals.settings.views + "/" + locals.layout;
    extension = locals.settings['view engine'];
    locals.component = replace$.call(viewFileName, "." + extension, '');
    locals.props = import$((ref$ = locals._locals).props || (ref$.props = {}), locals.props);
    delete locals._locals;
    delete locals.cache;
    delete locals.settings;
    try {
      Component = require(view);
      Layout = require(layout);
      locals.content = React.renderToString(
        <Layout {...locals.props} >
          <Component {...locals.props} />
        </Layout>
        );

      import$(locals, ((ref$ = locals.props).helpers || (ref$.helpers = {})).data);
      locals.props.helpers = {};
      return callback(null, layoutFn(locals));
    } catch (e$) {
      e = e$;
      console.error(e.stack);
      return callback(new Error("Could not require component: " + view));
    }
  };
};

function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) {
    if (own.call(src, key)) {
      obj[key] = src[key];
    }
  }
  return obj;
}
