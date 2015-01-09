## About

This repository contains JavaScript implementations of different famous Computer Science algorithms.

*Note: not all algorithms are well tested so bugs are quite possible.*

## Development

To install all dev dependencies use:

```Bash
npm install
```

To generate documentation use:

```Bash
./node_modules/.bin/jsdoc -c ./conf.json
```

and documentation will be available in docs folder. After the merging regenerated documentation to `gh-pages` branch it will be available <a href="http://andreygeonya.github.io/javascript-algorithms/docs/" target="_blank">online</a>.

To run the tests use:

```Bash
./node_modules/jasmine-node/bin/jasmine-node test/
```

and all `*.spec.js` files will be executed.

## Contributions

Fork the repo and make requred changes. After that push your changes in branch, which is named according to the changes you did.
Initiate the PR.

## Contributors

[![mgechev](https://avatars.githubusercontent.com/u/455023?v=3&s=117)](https://github.com/mgechev)[![Microfed](https://avatars.githubusercontent.com/u/613179?v=3&s=117)](https://github.com/Microfed)[![contra](https://avatars.githubusercontent.com/u/425716?v=3&s=117)](https://github.com/contra)

## License

The code in this repository is distributed under the terms of the MIT license.
