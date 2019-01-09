function func() {
    try {
        return 1;
    }catch (e) {
        console.log('catch');
    }finally {
        console.log('finally');
        return 2
    }
    console.log('end');
}

console.log(func());