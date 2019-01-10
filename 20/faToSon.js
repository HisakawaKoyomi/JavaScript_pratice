function Animal(name) {
    this.name = name;
}
Animal.prototype.say = function () {
    console.log(this.name + ' say hi' );
};
function Cat(name) {
    this.name = name;
}

Cat.prototype = new Animal('animal');
Cat.constructor = Cat;

let cat = new Cat('kitty');
cat.say();
