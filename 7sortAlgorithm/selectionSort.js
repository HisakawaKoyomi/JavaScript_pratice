function selectionSort(arr) {
    let len = arr.length;
    let minIndex;
    for (let i = 0;i < len;i++){
        minIndex = i; //作为中间媒介存储位置，每次循环一定要记得初始化

        for (let j = i;j < len;j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        swap(arr,i,minIndex);
    }
    return arr
}
function swap(arg,a,b) {
    let temp = arg[a];
    arg[a] = arg[b];
    arg[b] = temp;
}

const test = [1,4,5,2,7,5,9];
console.log(selectionSort(test));