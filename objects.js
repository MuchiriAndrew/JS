// first and longer way to do it
/*let person = new Object();

person.name = "Andrew";
person.eyeColour = "Black";
person.age = "20";

// console.log(person.name);

person.updateAge = function() {
    return ++person.age;
}

console.log(person.age);
person.updateAge();
console.log(person.age);*/

let person ={
    name: "Andrew",
    eyeColour: "Blue",
    age: "20",
    updateAge: function (){
        return ++person.age;
    }
}

let person02 ={
    name: "Andrew",
    eyeColour: "Blue",
    age: "20",
    updateAge: function (){
        return ++person.age;
    }
}