let handler = {
    set: function (obj,prop,value) {
        if (!Number.isInteger(value)) {
            throw new TypeError('the prop is not an integer');
        }
        obj[prop] = value;
        return true
    }
};

let person = new Proxy({},handler);
person.age = 10;
console.log(person.age);
person.age = 'young';
