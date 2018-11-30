var obj = {
    bar: {
        value: 2  // bar 是个不可枚举属性。
    },
    baz: {
        value: 3,
        enumerable: false  // baz 是个自身可枚举属性。
    }
};

var copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }