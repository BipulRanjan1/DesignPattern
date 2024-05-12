// Leaf
var Files = /** @class */ (function () {
    function Files(name) {
        this.name = name;
    }
    Files.prototype.getName = function () {
        return this.name;
    };
    Files.prototype.list = function () {
        console.log("File: ".concat(this.getName()));
    };
    return Files;
}());
// Composite
var Folders = /** @class */ (function () {
    function Folders(name) {
        this.name = name;
        this.files = [];
    }
    Folders.prototype.getName = function () {
        return this.name;
    };
    Folders.prototype.add = function (file) {
        this.files.push(file);
    };
    Folders.prototype.list = function () {
        console.log("Folder: ".concat(this.getName()));
        this.files.forEach(function (file) { return file.list(); });
    };
    return Folders;
}());
// Usage
var root = new Folders("Root");
var folder1 = new Folders("Folder 1");
folder1.add(new Files("File 1.1"));
folder1.add(new Files("File 1.2"));
var folder2 = new Folders("Folder 2");
folder2.add(new Files("File 2.1"));
root.add(folder1);
root.add(folder2);
root.list();
