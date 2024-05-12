// Concrete expression for matching a literal character
var LiteralExpression = /** @class */ (function () {
    function LiteralExpression(literal) {
        this.literal = literal;
    }
    LiteralExpression.prototype.interpret = function (context) {
        return context === this.literal;
    };
    return LiteralExpression;
}());
// Concrete expression for matching any character
var DotExpression = /** @class */ (function () {
    function DotExpression() {
    }
    DotExpression.prototype.interpret = function (context) {
        return context.length === 1;
    };
    return DotExpression;
}());
// Concrete expression for alternation
var AlternationExpression = /** @class */ (function () {
    function AlternationExpression(expression1, expression2) {
        this.expression1 = expression1;
        this.expression2 = expression2;
    }
    AlternationExpression.prototype.interpret = function (context) {
        return this.expression1.interpret(context) || this.expression2.interpret(context);
    };
    return AlternationExpression;
}());
// Regular Expression Engine
var RegExpEngine = /** @class */ (function () {
    function RegExpEngine(expression) {
        this.expression = expression;
    }
    RegExpEngine.prototype.match = function (input) {
        return this.expression.interpret(input);
    };
    return RegExpEngine;
}());
// Usage
var literalA = new LiteralExpression("A");
var literalB = new LiteralExpression("B");
var dot = new DotExpression();
var alternation = new AlternationExpression(literalA, literalB);
var regexEngine = new RegExpEngine(alternation);
console.log(regexEngine.match("A")); // Output: true
console.log(regexEngine.match("B")); // Output: true
console.log(regexEngine.match("C")); // Output: false
