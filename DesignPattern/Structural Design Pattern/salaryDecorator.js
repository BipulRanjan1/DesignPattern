var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Concrete Component: Represents a basic employee
var BasicEmployee = /** @class */ (function () {
    function BasicEmployee(salary, employeeName) {
        this.salary = salary;
        this.employeeName = employeeName;
    }
    BasicEmployee.prototype.calculateSalary = function () {
        return this.salary;
    };
    Object.defineProperty(BasicEmployee.prototype, "name", {
        get: function () {
            return this.employeeName;
        },
        enumerable: false,
        configurable: true
    });
    return BasicEmployee;
}());
// Decorator: Base class for all bonus decorators
var BonusDecorator = /** @class */ (function () {
    function BonusDecorator(employee) {
        this.employee = employee;
    }
    return BonusDecorator;
}());
// Concrete Decorator: Represents a bonus based on hierarchy level
var HierarchyBonus = /** @class */ (function (_super) {
    __extends(HierarchyBonus, _super);
    function HierarchyBonus(employee) {
        return _super.call(this, employee) || this;
    }
    HierarchyBonus.prototype.calculateSalary = function () {
        var baseSalary = this.employee.calculateSalary();
        // Assuming hierarchy level is based on the length of the employee's name
        var bonus = this.employee instanceof BasicEmployee ? this.employee.name.length * 100 : 0;
        return baseSalary + bonus;
    };
    return HierarchyBonus;
}(BonusDecorator));
// Usage
var basicEmployee = new BasicEmployee(5000, "John Doe");
console.log("Basic Employee Salary: ".concat(basicEmployee.calculateSalary()));
var employeeWithBonus = new HierarchyBonus(basicEmployee);
console.log("Employee with Hierarchy Bonus Salary: ".concat(employeeWithBonus.calculateSalary()));
