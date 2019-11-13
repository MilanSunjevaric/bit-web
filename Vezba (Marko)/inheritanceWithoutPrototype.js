/* Zadatak 1.

Create constructor functions with properties representing the following:
Person: name, surname
Employee: inherits Person and has job and salary
Developer: inherits from Employee and has specialization
Manager: inherits from Employee and has department
 */

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getFullName() {
        var output = `${this.name} ${this.surname}`;
        return output;
    }
}
var person1 = new Person('Petar', 'Ilic')
person1.getFullName()

class Employee extends Person {
    constructor(name, surname, job, salary) {
        super(name, surname)
        this.job = job;
        this.salary = salary;
    }
    getSalary() {
        var output = `Salary: ${this.salary}`
        return output;
    }
    increaseSalary() {
        this.salary = this.salary + this.salary / 10
        return this.salary;

    }
    getProfile() {

        var output = `${this.getFullName()}|JOB: ${this.job} |SALARY: ${this.salary} rsd/month`;
        return output;
    }
}
var profile1 = new Employee('Petar', 'Ilic', 'Ecc', 149000)
profile1.getProfile()
profile1.increaseSalary()

console.log(profile1);


class Developer extends Employee {
    constructor(name, surname, job, salary, specialization) {
        super(name, surname, job, salary)
        this.specialization = specialization;
    }
    addSpecs() {
        var output = `${this.getProfile()} |SPEC: ${this.specialization}`;
        return output;
    }
}
var spec1 = new Developer('Petar', 'Ilic', 'Ecc', 149000, 'Marketing')
spec1.addSpecs()

class Manager extends Developer {
    constructor(name, surname, job, salary, specialization, department) {
        super(name, surname, job, salary, specialization)
        this.department = department;
    }
    addDepartment() {
        var output = ` ${this.addSpecs()} |DEP: ${this.department}`;
        console.log(output);
    }
}
var dep1 = new Manager('Petar', 'Ilic', 'Ecc', 149000, 'Marketing', 'ABC')

dep1.addDepartment()






/* Zadatak 2.
 */



