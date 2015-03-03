# natspec.js
Javascript Library used to evaluate natspec expressions

[![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url]

[travis-image]: https://travis-ci.org/ethereum/natspec.js.svg
[travis-url]: https://travis-ci.org/ethereum/natspec.js
[coveralls-image]: https://coveralls.io/repos/ethereum/natspec.js/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/r/ethereum/natspec.js?branch=master

## Usage

It exposes global object `natspec` with method `evaluateExpression`.

```javascript
var natspecExpression = "Will multiply `a` by 7 and return `a * 7`.";
var evaluatedExpression = natspec.evaluateExpression(natspecExpression, abi, transaction);
console.log(evaluatedExpression); // "Will multiply 4 by 7 and return 28."
```
