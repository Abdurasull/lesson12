// 1-misol
class Person {
    #name;
    #age;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    greet() {
        return `Salom, mening ismim ${this.#name}, yoshim ${this.#age}.`;
    }
}

const person = new Person("Abdurasul", 27);
console.log(person.greet());

// 2-misol
class BankAccount {
    #balance;
    constructor(balance) {
        this.#balance = balance;
    }
    deposit(amount) {
        this.#balance += amount;
    }
    withdraw(amount) {
        if (this.#balance >= amount) {
            this.#balance -= amount;
        } else {
            return 'Yetarli mablag‘ mavjud emas!';
        }
    }
    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(100);
account.deposit(50);
console.log(account.getBalance());

// 3-misol
class Rectangle {
    #width;
    #height;
    constructor(width, height) {
        this.#width = width;
        this.#height = height;
    }
    area() {
        return this.#width * this.#height;
    }
    perimeter() {
        return 2 * (this.#width + this.#height);
    }
}

const rect = new Rectangle(10, 5);
console.log(rect.area());
console.log(rect.perimeter());

// 4-misol
class Student {
    #name;
    #id;
    #grades;
    constructor(name, id, grades) {
        this.#name = name;
        this.#id = id;
        this.#grades = grades;
    }
    calculateAverage() {
        return this.#grades.reduce((a, b) => a + b, 0) / this.#grades.length;
    }
}

const student = new Student("Ali", "S123", [90, 85, 88]);
console.log(student.calculateAverage());

// 5-misol
class Clock {
    displayTime() {
        setInterval(() => {
            console.log(new Date().toLocaleTimeString());
        }, 1000);
    }
}

const clock = new Clock();
clock.displayTime();

// 6-misol
class Employee {
    #name;
    #position;
    #salary;
    constructor(name, position, salary) {
        this.#name = name;
        this.#position = position;
        this.#salary = salary;
    }
    giveRaise(percentage) {
        this.#salary += this.#salary * (percentage / 100);
    }
    getSalary() {
        return this.#salary;
    }
}

const employee = new Employee("Bek", "Developer", 1000);
employee.giveRaise(10);
console.log(employee.getSalary());

// 7-misol
class Order {
    #items;
    constructor() {
        this.#items = [];
    }
    addItem(item, quantity) {
        this.#items.push({ item, quantity });
    }
    removeItem(item) {
        this.#items = this.#items.filter(i => i.item !== item);
    }
    calculateTotal() {
        return this.#items.reduce((total, i) => total + i.quantity, 0);
    }
}

const order = new Order();
order.addItem("Olma", 3);
console.log(order.calculateTotal());

// 8-misol
class Calculator {
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
    static multiply(a, b) {
        return a * b;
    }
    static divide(a, b) {
        return b !== 0 ? a / b : 'Bo‘lish mumkin emas';
    }
}

console.log(Calculator.add(5, 3));

// 9-misol
class Stack {
    #stack;
    constructor() {
        this.#stack = [];
    }
    push(item) {
        this.#stack.push(item);
    }
    pop() {
        return this.#stack.pop();
    }
    isEmpty() {
        return this.#stack.length === 0;
    }
}

const stack = new Stack();
stack.push(1);
console.log(stack.isEmpty());

// 10-misol
class Vehicle {
    #speed;
    constructor(speed) {
        this.#speed = speed;
    }
}
class Car extends Vehicle {
    #fuel;
    constructor(speed, fuel) {
        super(speed);
        this.#fuel = fuel;
    }
}

const car = new Car(120, "Benzin");
console.log(car);
