/* Zadatak 1.

Create constructor functions with properties representing the following:
Person: name, surname
Employee: inherits Person and has job and salary
Developer: inherits from Employee and has specialization
Manager: inherits from Employee and has department
 */

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}
Person.prototype.getFullName = function () {
    var output = this.name + ' ' + this.surname;
    return output;
}

var person1 = new Person('Petar', 'Ilic')
person1.getFullName()

function Employee(name, surname, job, salary) {

    Person.call(this, name, surname)
    this.job = job;
    this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype)
Employee.prototype.constructor = Person

Employee.prototype.getSalary = function () {
    output = `Salary: ${this.salary}`
    console.log(output);
}

Employee.prototype.increaseSalary = function () {
    this.salary = this.salary + this.salary / 10
    console.log(this.salary);
}

Employee.prototype.getProfile = function () {
    var output = this.getFullName() + '| JOB: ' + this.job + '| SALARY: ' + this.salary + ' rsd/month';
    return output;

}
var profile1 = new Employee('Petar', 'Ilic', 'Ecc', 149000)

profile1.getProfile()
profile1.getSalary()
profile1.increaseSalary()

function Developer(name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary)
    this.specialization = specialization;

}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Employee;

Developer.prototype.addSpecs = function () {

    var output = this.getProfile() + '| ' + 'SPEC: ' + this.specialization;
    return output;
}
var spec1 = new Developer('Petar', 'Ilic', 'Ecc', 149000, 'Marketing')

spec1.addSpecs()


function Manager(name, surname, job, salary, specialization, department) {
    Developer.call(this, name, surname, job, salary, specialization)
    this.department = department;
}
Manager.prototype = Object.create(Developer.prototype)
Manager.prototype.constructor = Developer



Manager.prototype.addDepartment = function () {
    var output = this.addSpecs() + ' | DEP: ' + this.department;
    console.log(output);
}

var dep1 = new Manager('Petar', 'Ilic', 'Ecc', 149000, 'Marketing', 'ABC')

dep1.addDepartment()




/* Zadatak 2.
 */



