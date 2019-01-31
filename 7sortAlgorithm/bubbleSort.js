function bubbleSort(arr) {
    let len = arr.length;
    for(let i = len - 1;i > 0;i--){
        for(let j = 0;j < i - 1;j++){ //比较的是j与j+1，因而j增加至倒数第二位
            if (arr[j] > arr[j + 1]){
                swap(arr,j,j + 1);
            }
        }
    }
    return arr
}

function swap(arg,a,b) {
    let temp = arg[a];
    arg[a] = arg[b];
    arg[b] = temp;
}

const test = [1,4,5,2,7,5,9];
console.log(bubbleSort(test));