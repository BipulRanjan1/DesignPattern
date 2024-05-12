var TextEditor = /** @class */ (function () {
    function TextEditor() {
        this.content = "";
    }
    TextEditor.prototype.setContent = function (content) {
        this.content = content;
    };
    TextEditor.prototype.getContent = function () {
        return this.content;
    };
    TextEditor.prototype.createMemento = function () {
        return new Memento(this.content);
    };
    TextEditor.prototype.restoreFromMemento = function (memento) {
        this.content = memento.getContent();
    };
    return TextEditor;
}());
var Memento = /** @class */ (function () {
    function Memento(state) {
        this.state = state;
    }
    Memento.prototype.getContent = function () {
        return this.state;
    };
    return Memento;
}());
var HistoryManager = /** @class */ (function () {
    function HistoryManager() {
        this.mementos = [];
    }
    HistoryManager.prototype.saveMemento = function (memento) {
        this.mementos.push(memento);
    };
    HistoryManager.prototype.undo = function (editor) {
        var lastmemento = this.mementos.pop();
        if (lastmemento) {
            editor.restoreFromMemento(lastmemento);
        }
    };
    return HistoryManager;
}());
var editor = new TextEditor();
var historyy = new HistoryManager();
editor.setContent("Hello World");
console.log(editor.getContent());
var snapshot = editor.createMemento();
historyy.saveMemento(snapshot);
editor.setContent("This is new line added");
console.log(editor.getContent());
historyy.undo(editor);
console.log(editor.getContent());
