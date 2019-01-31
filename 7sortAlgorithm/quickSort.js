function quickSort(arr,left,right) {
    let len = arr.length;
    left = typeof left === 'number'? left: 0;
    right = typeof right === 'number'? right: len - 1;

    //递归的外围不要用循环
    if (left < right) {
        let partitionIndex = partition(arr, left, right);
        quickSort(arr,left,partitionIndex - 1);
        quickSort(arr,partitionIndex + 1,right);
    }

    return arr
}

function partition(arr,left,right) {
    let pivot = left;
    let index = pivot + 1;

    for (let i = index;i <= right;i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr,index,i);
            index++;
        }
    }
    swap(arr,pivot,index - 1);

    return index - 1
}

function swap(arg,a,b) {
    let temp = arg[a];
    arg[a] = arg[b];
    arg[b] = temp;
}

const test = [1,4,5,2,7,5,9];
console.log(quickSort(test));