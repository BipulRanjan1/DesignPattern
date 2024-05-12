 
// builder pattern for restaurent menu in typescript

class MenuItem {
    name: string;
    price: number;
    description: string;
 
    constructor(name: string, price: number, description: string) {
        this.name = name;
        this.price = price;
        this.description = description;
    }
}
 
class MenuBuilder {
    private items: MenuItem[] = [];
 
    addItem(name: string, price: number, description: string): MenuBuilder {
        this.items.push(new MenuItem(name, price, description));
        return this;
    }
 
    build(): MenuItem[] {
        return this.items;
    }
}
 
const menu = new MenuBuilder()
    .addItem("Spaghetti Carbonara", 12.99, "Classic Italian pasta with bacon, eggs, and Parmesan cheese.")
    .addItem("Grilled Salmon", 18.99, "Fresh grilled salmon served with seasonal vegetables.")
    .addItem("Cheesecake", 6.99, "Decadent New York style cheesecake.")
    .build();
 
// Display menu items
menu.forEach(item => {
    console.log(`${item.name} - $${item.price.toFixed(2)}: ${item.description}`);
});