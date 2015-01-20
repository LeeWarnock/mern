# MERN

This is a boilerplate starter application using Node, Express, Mongoose and React, based on the [boilerplate app](https://github.com/madhums/node-express-mongoose) by madhums.

## React
React is a clientside view framework that can render its components on both the server and client. This makes it perfect for isomorphic applications. This behaviour is also setup as default in MERN. Rather than render into views and templates, we will instead render components within layout components using the `reactViewEngine`.

The following will render the nav component in `/app/components/shared/`.

```
res.render('shared/nav', {
  title: 'Page title',
  props: {
    items: [],
    color: "#3E3E3E"
  }
});
```

The props object is passed to the component at render time and is serialized to a data attribute in the HTML to sent to the client. When the client picks up the javascript, it will re-render the component using the props available on the page. Voila!

## Requirements

* [NodeJs](http://nodejs.org)
* [mongodb](http://mongodb.org)

## Install

```sh
$ git clone git://github.com/imranolas/mern.git && cd mern
$ npm install
```

Then visit [http://localhost:3000/](http://localhost:3000/)

## License

MIT
