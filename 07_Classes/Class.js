class User {

    constructor(firstname, lastname, credit) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.credits = credit;
    }

    getFullName() {
        let fullname = `${this.firstname} ${this.lastname} is my full name`;
        return fullname;
    }

    editName(newName) {
        // deliminator is space
        // newName gets converted into array with space seperated
        const myName = newName.split(' ');
        this.firstname = myName[0];
        this.lastname = myName[1];
    }


}


class Teacher extends User {
    constructor(firstname, lastname, credit, subject) {
        // first line must be super
        super(firstname, lastname, credit);
        this.subject = subject;
    }

    // Method overriding
    getFullName() {
        let fullname = `${this.firstname} ${this.lastname} is my full name and I teach ${this.subject}`;
        return fullname;

    }

    favDrink(name) {
        console.log(`My fav. drink is ${name}`);
    }
}

const john = new Teacher('John', 'Anderson', 34, 'Python');
console.log(john.getFullName());

john.favDrink('Ice Tea')

john.editName('Hohn Andreson');
console.log(john.getFullName());

// const sammy = new User();
// console.log(sammy);




