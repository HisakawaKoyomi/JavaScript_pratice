function insertionSort(arr) {
    let len = arr.length;
    let current;
    for (let i = 1;i < len;i++){
        current = arr[i]; //不单独保存数值，数组改变后该值会发生变化
        let index = i;
        //记住！！循环并不是都可以进入！！！
        //若直接定义index而不赋初值，会出现二层循环若进不入，index一直没有值，后续发生错误
        for (let j = i - 1;(j >= 0) && (arr[j] > current);j--){
            arr[j + 1] = arr[j];
            index = j;
            console.log('j:'+ j);
        }
        console.log('index:'+index);
        arr[index] = current;
    }

        //上述代码改写
  /*    current = arr[i];
        let j = i - 1;
        for(;j >= 0 && arr[j] > current;j--){
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = current;
    }*/
    return arr
}

const test = [1,4,5,2,7,5,9];
console.log(insertionSort(test));