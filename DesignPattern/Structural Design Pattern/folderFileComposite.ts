// Component interface
interface FileSystems {
    getName(): string;
    list(): void;
}
 
// Leaf
class Files implements FileSystems{
    constructor(private name: string) {}
 
    getName(): string {
        return this.name;
    }
 
    list(): void {
        console.log(`File: ${this.getName()}`);
    }
}
 
// Composite
class Folders implements FileSystems {
    private files: (Files | Folders)[] = [];
 
    constructor(private name: string) {}
 
    getName(): string {
        return this.name;
    }
 
    add(file: Files | Folders): void {
        this.files.push(file);
    }
 
    list(): void {
        console.log(`Folder: ${this.getName()}`);
        this.files.forEach(file => file.list());
    }
}
 
// Usage
const root: Folders = new Folders("Root");
 
const folder1: Folders = new Folders("Folder 1");
folder1.add(new Files("File 1.1"));
folder1.add(new Files("File 1.2"));
 
const folder2: Folders = new Folders("Folder 2");
folder2.add(new Files("File 2.1"));
 
root.add(folder1);
root.add(folder2);
 
root.list();
