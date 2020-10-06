// Defines the Intern class, an extension of Employee. Adds another value, for "school", allows the user to retrieve that value via the getSchool method, and updates getRole to return "Intern".

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;