class TextEditor {
    private content: string;
   
    constructor() {
      this.content = "";
    }
    setContent(content: string) {
      this.content = content;
    }
    getContent(): string {
      return this.content;
    }
    createMemento(): Memento {
      return new Memento(this.content);
    }
   
    restoreFromMemento(memento: Memento): void {
      this.content = memento.getContent();
    }
  }
  class Memento {
    private state: string;
   
    constructor(state: string) {
      this.state = state;
    }
    getContent(): string {
      return this.state;
    }
  }
  class HistoryManager {
    private mementos: Memento[];
   
    constructor() {
      this.mementos = [];
    }
    saveMemento(memento: Memento): void {
      this.mementos.push(memento);
    }
    undo(editor: TextEditor): void {
      const lastmemento = this.mementos.pop();
      if (lastmemento) {
        editor.restoreFromMemento(lastmemento);
      }
    }
  }
  const editor = new TextEditor();
  const history1 = new HistoryManager();
  editor.setContent("Hello World");
  console.log(editor.getContent());
   
  const snapshot = editor.createMemento();
  history1.saveMemento(snapshot);
   
  editor.setContent("This is new line added");
  console.log(editor.getContent());
   
  history1.undo(editor);
  console.log(editor.getContent());