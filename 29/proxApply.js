function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2;i < num;i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let proxApply = new Proxy(isPrime,{
    apply: function (target,thisArg,args) {
        console.time('timer');
        let result = target.apply(thisArg,args);
        console.timeEnd('timer');
        return result
    }
});

/*let proxApply = new Proxy(isPrime,{
    apply: function (target,thisArg,args) {
        let time1 = Date.now();
        let result = target.apply(thisArg,args);
        let time = Date.now() - time1;
        return [result,time]
    }
});*/

console.log(proxApply(1299827));