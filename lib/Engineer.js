// Defines the Engineer class, an extension of Employee. Adds another value, for "Github", allows the user to retrieve that value via the getGithub method, and updates getRole to return "Engineer".

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;