## About

![](https://travis-ci.org/mgechev/javascript-algorithms.svg?branch=master)

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

- Go to the parent directory of the `javascript-algorithms` folder and call:

```bash
git clone https://github.com/mgechev/javascript-algorithms.git javascript-algorithms-docs
```

- Go to the `javascript-algorithms-docs` folder and change current branch to `gh-pages`:

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

Call:

```bash
gulp test
```

and all `*.spec.js` files will be executed.

## Contributions

Fork the repo and make requred changes. After that push your changes in branch, which is named according to the changes you did.
Initiate the PR.

Make sure you're editor makes validations according to the `.jshintrc` in the root directory of the repository.

Before pushing to the repository run:

```bash
gulp build
```

If the build is not successful fix your code in order the tests and jshint validation to run successfully and after that create a pull request.

## Contributors

[<img alt="mgechev" src="https://avatars.githubusercontent.com/u/455023?v=3&s=117" width="117">](https://github.com/mgechev) |[<img alt="AndriiHeonia" src="https://avatars.githubusercontent.com/u/773648?v=3&s=117" width="117">](https://github.com/AndriiHeonia) |[<img alt="Jakehp" src="https://avatars.githubusercontent.com/u/1854569?v=3&s=117" width="117">](https://github.com/Jakehp) |[<img alt="pvoznenko" src="https://avatars.githubusercontent.com/u/1098414?v=3&s=117" width="117">](https://github.com/pvoznenko) |[<img alt="FilipeFalcaoBatista" src="https://avatars.githubusercontent.com/u/9125631?v=3&s=117" width="117">](https://github.com/FilipeFalcaoBatista) |[<img alt="lekkas" src="https://avatars.githubusercontent.com/u/5211478?v=3&s=117" width="117">](https://github.com/lekkas) |
:---: |:---: |:---: |:---: |:---: |:---: |
[mgechev](https://github.com/mgechev) |[AndriiHeonia](https://github.com/AndriiHeonia) |[Jakehp](https://github.com/Jakehp) |[pvoznenko](https://github.com/pvoznenko) |[FilipeFalcaoBatista](https://github.com/FilipeFalcaoBatista) |[lekkas](https://github.com/lekkas) |

[<img alt="deniskyashif" src="https://avatars.githubusercontent.com/u/5999271?v=3&s=117" width="117">](https://github.com/deniskyashif) |[<img alt="infusion" src="https://avatars.githubusercontent.com/u/197742?v=3&s=117" width="117">](https://github.com/infusion) |[<img alt="Microfed" src="https://avatars.githubusercontent.com/u/613179?v=3&s=117" width="117">](https://github.com/Microfed) |[<img alt="contra" src="https://avatars.githubusercontent.com/u/425716?v=3&s=117" width="117">](https://github.com/contra) |[<img alt="ysharplanguage" src="https://avatars.githubusercontent.com/u/1055314?v=3&s=117" width="117">](https://github.com/ysharplanguage) |[<img alt="fanixk" src="https://avatars.githubusercontent.com/u/921156?v=3&s=117" width="117">](https://github.com/fanixk) |
:---: |:---: |:---: |:---: |:---: |:---: |
[deniskyashif](https://github.com/deniskyashif) |[infusion](https://github.com/infusion) |[Microfed](https://github.com/Microfed) |[contra](https://github.com/contra) |[ysharplanguage](https://github.com/ysharplanguage) |[fanixk](https://github.com/fanixk) |

## License

The code in this repository is distributed under the terms of the MIT license.
