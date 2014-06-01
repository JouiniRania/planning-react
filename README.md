planning-react
==============

This is an attempt to build a planning view for Tuleap with React.

Usage
-----

Clone this repository then install dependencies:

```sh
npm install
```

Build javascript files:

```sh
npm run-script build-dev
# to compile on the fly, use watch-dev
# npm run-script watch-dev
```

Then launch a server with `public/` as "DocumentRoot". Example using python:

```sh
(cd public && python -m SimpleHTTPServer)
```

Then visit [http://localhost:8000](http://localhost:8000) in a web browser.
