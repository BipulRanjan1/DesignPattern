// Component: Base class for all employees
interface Employee {
    calculateSalary(): number;
}
 
// Concrete Component: Represents a basic employee
class BasicEmployee implements Employee {
    constructor(private salary: number, private employeeName: string) {}
 
    calculateSalary(): number {
        return this.salary;
    }
 
    get name(): string {
        return this.employeeName;
    }
}
 
// Decorator: Base class for all bonus decorators
abstract class BonusDecorator implements Employee {
    constructor(protected employee: Employee) {}
 
    abstract calculateSalary(): number;
}
 
// Concrete Decorator: Represents a bonus based on hierarchy level
class HierarchyBonus extends BonusDecorator {
    constructor(employee: Employee) {
        super(employee);
    }
 
    calculateSalary(): number {
        const baseSalary = this.employee.calculateSalary();
        // Assuming hierarchy level is based on the length of the employee's name
        const bonus = this.employee instanceof BasicEmployee ? this.employee.name.length * 100 : 0;
        return baseSalary + bonus;
    }
}
 
// Usage
const basicEmployee = new BasicEmployee(5000, "John Doe");
console.log(`Basic Employee Salary: ${basicEmployee.calculateSalary()}`);
 
const employeeWithBonus = new HierarchyBonus(basicEmployee);
console.log(`Employee with Hierarchy Bonus Salary: ${employeeWithBonus.calculateSalary()}`);
 