# natspec.js
Javascript Library used to evaluate natspec expressions

## Usage

It exposes global object `natspec` with method `evaluateExpression`.

```javascript
var natspecExpression = "Will multiply `a` by 7 and return `a * 7`.";
var evaluatedExpression = natspec.evaluateExpression(natspecExpression, abi, transaction);
console.log(evaluatedExpression); // "Will multiply 4 by 7 and return 28."
```
