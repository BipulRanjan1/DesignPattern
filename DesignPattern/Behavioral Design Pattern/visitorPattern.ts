// Element interface for XML and JSON elements
interface Element {
    accept(visitor: Visitor): void;
}

// Concrete XML Element: XMLNode
class XMLNode implements Element {
    constructor(private name: string, private attributes: Map<string, string>, private children: Element[]) {}

    accept(visitor: Visitor): void {
        visitor.visitXMLNode(this);
        this.children.forEach(child => child.accept(visitor));
    }

    getName(): string {
        return this.name;
    }

    getAttributes(): Map<string, string> {
        return this.attributes;
    }

    getChildren(): Element[] {
        return this.children;
    }
}

// Concrete JSON Element: JSONObject
class JSONObject implements Element {
    constructor(private properties: Map<string, any>) {}

    accept(visitor: Visitor): void {
        visitor.visitJSONObject(this);
    }

    getProperties(): Map<string, any> {
        return this.properties;
    }
}

// Visitor interface
interface Visitor {
    visitXMLNode(node: XMLNode): void;
    visitJSONObject(object: JSONObject): void;
}

// Concrete Visitor: XMLPrinter
class XMLPrinter implements Visitor {
    visitXMLNode(node: XMLNode): void {
        console.log(`<${node.getName()}>`);
        node.getAttributes().forEach((value, key) => {
            console.log(`  ${key}="${value}"`);
        });
    }

    visitJSONObject(object: JSONObject): void {
        console.log(JSON.stringify(object.getProperties(), null, 2));
    }
}

// Usage
const xmlNode = new XMLNode(
    "person",
    new Map([["id", "123"], ["name", "John"]]),
    [new XMLNode("age", new Map(), [new JSONObject(new Map([["years", 30]]))])]
);

const jsonVisitor = new XMLPrinter();
xmlNode.accept(jsonVisitor);
