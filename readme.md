## About

This repository contains JavaScript implementations of different famous Computer Science algorithms.

API reference with usage examples available <a href="https://mgechev.github.io/javascript-algorithms/" target="_blank">here</a>.

*Note: not all algorithms are well tested so bugs are quite possible.*

## Development

To install all dev dependencies use:

```Bash
npm install
```

To setup documentation repository:

* go to the parent directory of the root of `javascript-algorithms`;
* clone `javascript-algorithms` to directory called `javascript-algorithms-docs` (`git clone git@github.com:mgechev/javascript-algorithms.git javascript-algorithms-docs`);
* change current branch in `javascript-algorithms-docs` to `gh-pages` (`git checkout gh-pages`).

To generate documentation call:

`gulp jsdocs` inside `javascript-algorithms` folder. Content of the `javascript-algorithms-docs` will be updated and you will be able to look it in your browser.


To run tests use:

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