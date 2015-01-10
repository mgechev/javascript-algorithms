## About

This repository contains JavaScript implementations of different famous Computer Science algorithms.

API reference with usage examples available <a href="https://mgechev.github.io/javascript-algorithms/" target="_blank">here</a>.

*Note: not all algorithms are well tested so bugs are quite possible.*

## Development

**To install all dev dependencies**

Call:

```bash
npm install
```

**To setup repository with documentation**

1) go to the parent directory of the `javascript-algorithms` folder and call:

```bash
git clone git@github.com:mgechev/javascript-algorithms.git javascript-algorithms-docs
```

2) go to the `javascript-algorithms-docs` folder and change current branch to `gh-pages`:

```bash
git checkout gh-pages
```

Now you can see `index.html` file in this folder and open it in your browser. 

**To update .html files with documentation**

Go to the `javascript-algorithms` folder and call:

```bash
gulp jsdoc 
```

and all files in `javascript-algorithms-docs` folder will be updated.

**To run tests**

You should install `jasmine-node`:

```bash
npm install -g jasmine-node
```

Call:

```bash
jasmine-node test/
```

and all `*.spec.js` files will be executed.

## Contributions

Fork the repo and make requred changes. After that push your changes in branch, which is named according to the changes you did.
Initiate the PR.

## Contributors

[![mgechev](https://avatars.githubusercontent.com/u/455023?v=3&s=117)](https://github.com/mgechev)[![AndreyGeonya](https://avatars.githubusercontent.com/u/773648?v=3&s=117)](https://github.com/AndreyGeonya)[![Microfed](https://avatars.githubusercontent.com/u/613179?v=3&s=117)](https://github.com/Microfed)[![contra](https://avatars.githubusercontent.com/u/425716?v=3&s=117)](https://github.com/contra)

## License

The code in this repository is distributed under the terms of the MIT license.