function multiple(x){
    return function multiple(y){
        return function multiple(z){
            return x*y*z;
        }
    }
}

console.log(multiple(3)(4)(5));


