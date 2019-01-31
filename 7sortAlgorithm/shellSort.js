function shellSort(arr) {
    let len = arr.length;
    let gap = 1;
    let current;
    while (gap < len/3) {
        gap = gap * 3 + 1;
    }

    for (;gap > 0;gap = Math.floor(gap/3)){
        for (let i = gap;i < len;i++){
            current = arr[i];
            let j = i - gap; //初始化一定不要忘
            for (;j >= 0 && arr[j] > current;j -= gap) {
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = current;
        }
    }
    return arr
}

const test = [1,4,5,2,7,5,9];
console.log(shellSort(test));