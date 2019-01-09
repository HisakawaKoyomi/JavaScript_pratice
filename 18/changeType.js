function Cat() {}
Object.defineProperty(Cat.prototype,Symbol.toStringTag,{
    value: 'Cat'
});


const cat = new Cat();
console.log(Object.prototype.toString.call(cat));