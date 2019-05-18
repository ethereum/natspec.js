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
var natspec = require('natspec');

var natspecExpression = "Will multiply `a` by 7 and return `a * 7`.";
var call = {
    method: 'multiply',
    abi: abi,
    transaction: transaction
};

var evaluatedExpression = natspec.evaluateExpression(natspecExpression, call);
console.log(evaluatedExpression); // "Will multiply 4 by 7 and return 28."
```

More examples are available [here](https://github.com/ethereum/natspec.js/blob/master/test/test.js).

## Building

```bash
npm run-script build
```

## Testing (mocha)

```bash
npm test
```

## Testing (go)

```bash
go test
```

## Specification

The NatSpec documentation is maintained at:

* https://solidity.readthedocs.io/en/v0.5.8/natspec-format.html?highlight=Natspec
* https://vyper.readthedocs.io/en/latest/structure-of-a-contract.html#natspec-metadata
