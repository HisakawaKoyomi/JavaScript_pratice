/*function f() {
    var result = [];
    for (var i = 0;i < 3;i++) {
        var func = function() {
            return i
        };
        result.push(func);
    }
    return result;
}*/

//改进版，也可以修改var i 为let i
function f() {
    var result = [];
    for (var i = 0;i < 3;i++) {
        var func = function(value) {
            return function f() {
                return value
            }
        }(i);
        result.push(func);
    }
    return result;
}

console.log(f()[1]());

