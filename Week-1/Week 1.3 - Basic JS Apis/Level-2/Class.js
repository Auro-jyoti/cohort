class Animal {
    constructor (name, legCount, speaks) {
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }

    static myType() {
        console.log("Animal");
    }

    speak() {
        console.log("hi there "+this.speaks);
    }
}

// console.log(Animal.speak()); --> error
console.log(Animal.myType());
let dog = new Animal("dog", 4, "bow bow");
let cat = new Animal("cat", 4, "meow meow");

// function declared as static within the class can be called on a class
// where as function with no declaration can not be called on the class
// non static functions can only be called on objects of a class