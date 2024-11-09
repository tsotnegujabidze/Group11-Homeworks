class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    };

    displayInfo() {
        console.log(`Name: ${this.name}, email: ${this.email}`);
    };

    static compareUsers(user1, user2) {
        return user1.email === user2.email
    };
};

const user1 = new User("Luka", "luka123@gmail.com");
const user2 = new User("Anna", "anna123@mail.com");

user1.displayInfo();
user2.displayInfo();

console.log(User.compareUsers(user1, user2));