function unique(arr) {
    return [...new Set(arr)]
}

const test = [1,2,3,2,3,7,5];
console.log(unique(test));
