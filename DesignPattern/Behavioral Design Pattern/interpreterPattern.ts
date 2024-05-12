// Interface for expressions
interface Expression {
    interpret(context: string): boolean;
}

// Concrete expression for matching a literal character
class LiteralExpression implements Expression {
    private literal: string;

    constructor(literal: string) {
        this.literal = literal;
    }

    interpret(context: string): boolean {
        return context === this.literal;
    }
}

// Concrete expression for matching any character
class DotExpression implements Expression {
    interpret(context: string): boolean {
        return context.length === 1;
    }
}

// Concrete expression for alternation
class AlternationExpression implements Expression {
    private expression1: Expression;
    private expression2: Expression;

    constructor(expression1: Expression, expression2: Expression) {
        this.expression1 = expression1;
        this.expression2 = expression2;
    }

    interpret(context: string): boolean {
        return this.expression1.interpret(context) || this.expression2.interpret(context);
    }
}

// Regular Expression Engine
class RegExpEngine {
    private expression: Expression;

    constructor(expression: Expression) {
        this.expression = expression;
    }

    match(input: string): boolean {
        return this.expression.interpret(input);
    }
}

// Usage
const literalA = new LiteralExpression("A");
const literalB = new LiteralExpression("B");
const dot = new DotExpression();
const alternation = new AlternationExpression(literalA, literalB);

const regexEngine = new RegExpEngine(alternation);

console.log(regexEngine.match("A")); // Output: true
console.log(regexEngine.match("B")); // Output: true
console.log(regexEngine.match("C")); // Output: false
