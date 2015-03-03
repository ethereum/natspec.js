
/**
 * This object should be used to evaluate natspec expression
 * It has one method evaluateExpression which shoul be used
 */
var natspec = (function () {
    /// Helper method
    /// Should be called to copy values from object to global context
    var copyToContext = function (obj, context) {
        var keys = Object.keys(obj);
        keys.forEach(function (key) {
            context[key] = obj[key];
        });
    }

    /// Helper method
    /// Should be called to get method with given name from the abi
    /// @param contract's abi
    /// @param name of the method that we are looking for
    var getMethodWithName = function(abi, name) {
        for (var i = 0; i < abi.length; i++) {
            if (abi[i].name === name) {
                return abi[i];
            }
        }
        //console.warn('could not find method with name: ' + name);
        return undefined;
    };

    /// Function called to get all contract's storage values
    /// @returns hashmap with contract properties which are used
    /// TODO: check if this function will be used
    var getContractProperties = function (address, abi) {
        return {};
    };

    /// Function called to get all contract's methods
    /// @returns hashmap with used contract's methods
    /// TODO: check if this function will be used
    var getContractMethods = function (address, abi) {
        return {};
    };

    /// Function called to get all contract method input variables
    /// @returns hashmap with all contract's method input variables
    var getMethodInputParams = function (method, params) {
        return method.inputs.reduce(function (acc, current, index) {
            acc[current.name] = params[index];
            return acc;
        }, {});
    };

    /// Should be called to evaluate single expression
    /// Is internally using javascript's 'eval' method
    /// @param expression which should be evaluated
    /// @param [abi] of contract
    /// @param [transaction] raw transaction
    var evaluateExpression = function (expression, abi, transaction) {
        abi = [];
        transaction = {}; 
        var self = this;
        
        var method = getMethodWithName(abi, method);
        if (method) {
            var input = getMethodInputParams(method, params);
            copyToContext(input, self);
        }

        var evaluatedExpression = "";

        // match everything in `` quotes
        var pattern = /\`(?:\\.|[^`\\])*\`/gim
        var match;
        var lastIndex = 0;
        while ((match = pattern.exec(expression)) !== null) {
            var startIndex = pattern.lastIndex - match[0].length;

            var toEval = match[0].slice(1, match[0].length - 1);

            evaluatedExpression += expression.slice(lastIndex, startIndex);
            evaluatedExpression += eval(toEval).toString();
        
            lastIndex = pattern.lastIndex;
        }

        evaluatedExpression += expression.slice(lastIndex);
        
        return evaluatedExpression;
    };

    return {
        evaluateExpression: evaluateExpression
    };

})();

if (typeof(module) !== 'undefined')
    module.exports = natspec; 

