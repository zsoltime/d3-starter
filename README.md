# D3.js Starter

> D3.js starter with hot reload

## Source

> Make sure you add link(s) to source(s) :)

## Tools Used

- [D3.js](https://d3js.org/)
- [Babel.js compiler](https://babeljs.io/)
- [ESLint linter](http://eslint.org/) with [Airbnb's JS config](https://github.com/airbnb/javascript)
- [Jest](https://jestjs.io/) test framework
- [Sass](http://sass-lang.com/) preprocessor with [PostCSS' Autoprefixer](https://github.com/postcss/autoprefixer)
- [Webpack module bundler](https://webpack.js.org/)

## Install and Build

You need to have either [`yarn`](https://yarnpkg.com/lang/en/docs/install/) or [`npm`](https://www.npmjs.com/) installed on your computer.

#### Clone this repo

```bash
git clone https://github.com/zsoltime/d3-starter.git <new-folder-name>
cd <new-folder-name>
```

#### Install dependencies

```bash
yarn
# OR
npm install
```

#### Start dev server with hot reload

It builds HTML, CSS, and JavaScript bundle, starts a dev server and inject new versions of the files you edited at runtime. Open [http://localhost:8080](http://localhost:8080) to view it in browser.

```bash
yarn start
# OR
npm start
```

#### Build production bundle

It builds the "app" to the `dist` folder. It creates the JavaScript bundle, uglifies JS, minifies CSS, and adds hashes to filenames - ready to deploy.

```bash
yarn build
# OR
npm run build
```

#### Lint

Lint files using ESLint.

```bash
yarn lint
# OR
npm run lint
```

#### Run unit tests

Run unit tests with Jest.

```bash
yarn test
# OR
npm test
```
