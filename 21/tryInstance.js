function Person(name) {
    if (this instanceof Person) {
        this.name = name;
    } else {
        throw new Error('You must use new with Person');
    }
}

//let person = Person('John');
let person = Person.call(new Person(),'John');