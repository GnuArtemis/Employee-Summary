// Defines the Manager class, an extension of Employee. Adds another value, for "Office", allows the user to retrieve that value via the getOffice method, and updates getRole to return "Manager".

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;