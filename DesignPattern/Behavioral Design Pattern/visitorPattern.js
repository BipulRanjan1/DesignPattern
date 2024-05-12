// Concrete XML Element: XMLNode
var XMLNode = /** @class */ (function () {
    function XMLNode(name, attributes, children) {
        this.name = name;
        this.attributes = attributes;
        this.children = children;
    }
    XMLNode.prototype.accept = function (visitor) {
        visitor.visitXMLNode(this);
        this.children.forEach(function (child) { return child.accept(visitor); });
    };
    XMLNode.prototype.getName = function () {
        return this.name;
    };
    XMLNode.prototype.getAttributes = function () {
        return this.attributes;
    };
    XMLNode.prototype.getChildren = function () {
        return this.children;
    };
    return XMLNode;
}());
// Concrete JSON Element: JSONObject
var JSONObject = /** @class */ (function () {
    function JSONObject(properties) {
        this.properties = properties;
    }
    JSONObject.prototype.accept = function (visitor) {
        visitor.visitJSONObject(this);
    };
    JSONObject.prototype.getProperties = function () {
        return this.properties;
    };
    return JSONObject;
}());
// Concrete Visitor: XMLPrinter
var XMLPrinter = /** @class */ (function () {
    function XMLPrinter() {
    }
    XMLPrinter.prototype.visitXMLNode = function (node) {
        console.log("<".concat(node.getName(), ">"));
        node.getAttributes().forEach(function (value, key) {
            console.log("  ".concat(key, "=\"").concat(value, "\""));
        });
    };
    XMLPrinter.prototype.visitJSONObject = function (object) {
        console.log(JSON.stringify(object.getProperties(), null, 2));
    };
    return XMLPrinter;
}());
// Usage
var xmlNode = new XMLNode("person", new Map([["id", "123"], ["name", "John"]]), [new XMLNode("age", new Map(), [new JSONObject(new Map([["years", 30]]))])]);
var jsonVisitor = new XMLPrinter();
xmlNode.accept(jsonVisitor);
