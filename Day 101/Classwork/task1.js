class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
    
    speak() {
        console.log("This animal makes a sound.");
    };
}

class Dog extends Animal {
    speak () {
        console.log("Bark!");
    };
};

class Cat extends Animal {
    speak () {
        console.log("Meow!");
    }
};