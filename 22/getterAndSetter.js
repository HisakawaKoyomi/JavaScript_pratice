var obj = {
    log: ['a','b','c'],
    get latest() {
        if (this.log.length == 0) {
            return undefine;
        }
        return this.log[this.log.length - 1];
    }
};

console.log(obj.latest);

var language = {
    set current(name) {
        this.log.push(name);
    },
    log: []
};
language.current = 'EN';
language.current = 'FA';

console.log(language.log);