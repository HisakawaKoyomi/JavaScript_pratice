function mergeSort(arr) {
    let len = arr.length;
    if (len <= 1) return arr;

    let l = arr.slice(0,Math.floor(len / 2));
    let r = arr.slice(Math.floor(len / 2));

    return merge(mergeSort(l),mergeSort(r))
}

function merge(left,right) {
    let result = [];

    while (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        }else {
            result.push(right.shift());
        }
    }
    while (left.length) {
        result.push(left.shift());
    }
    while (right.length) {
        result.push(right.shift());
    }

    return result
}

const test = [1,4,5,2,7,5,9];
console.log(mergeSort(test));