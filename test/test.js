var assert = require('assert');
var natspec = require('../natspec.js');

describe('natspec', function () {
    it('should evaluate simple expression', function () {
        // given
        var expression = "`x = 1` + `y = 2` will be equal `x + y`";

        // when
        var result = natspec.evaluateExpression(expression);

        // then
        assert.equal(result, "1 + 2 will be equal 3");
    });
});


