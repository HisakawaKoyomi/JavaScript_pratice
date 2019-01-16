function getClasses(obj) {
    let result = Object.keys(obj).filter(key => obj[key]);
    return result
}

const test = {
    item1: true,
    item2: false,
    item3: true
};
console.log(getClasses(test));