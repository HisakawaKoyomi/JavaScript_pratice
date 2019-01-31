let len;
function heapSort(arr) {
    len = arr.length;
    for (let i = Math.floor(len/2);i >= 0;i--) {
        heapify(arr,i);
    }
    
    for (let k = len - 1;k > 0;k--) {
        swap(arr,k,0);
        len--;
        //通过改变len改变调整范围，（但不改变原数组长度）。
        // 因而len必须设为全局变量！！
        heapify(arr,0);
    }

    return arr
}

function heapify(arr,top) {

    let index = top;
    let left = 2 * top + 1;
    let right = 2 * top + 2;

    if (left < len && arr[left] > arr[index]) {
        index = left;
    }
    if (right < len && arr[right] > arr[index]) {
        index = right;
    }

    if (index !== top) {
        swap(arr,index,top);
        heapify(arr,index);
    }
}

function swap(arg,a,b) {
    let temp = arg[a];
    arg[a] = arg[b];
    arg[b] = temp;
}

const test = [1,4,5,2,7,5,9];
console.log(heapSort(test));