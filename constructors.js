//creating an object blueprint

function Person(name, eyeColor, age) {
    this.name = name;
    this.eyeColor = eyeColor;
    this.age = age;
    this.updateAge = function () {
        return ++this.age;
    };
}

//creating the objects and passing in the information

let person01 = new Person("Andrew", "Black", 20);
let person02= new Person("Jones", "Brown", 22);

//it is a faster way to do it other than creating objects one at a time

console.log(person01.name);
console.log(person01.updateAge);
//etc
