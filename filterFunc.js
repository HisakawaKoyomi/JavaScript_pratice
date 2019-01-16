function filterFunc(arr1,startIndex,endIndex) {
    let arr = arr1.concat();//避免后续操作直接影响到输入的原数组arr1

    let tempResult = [];
    let result;
    switch (arguments.length) {
        case 0:
            throw new Error('arr can not be lacked');

        case 1:{
            if (Object.prototype.toString.call(arr) !== '[object Array]') {
                throw new Error('arr should be array type');
            }else {
                //main code1
                tempResult = arr;
            }
            break;
        }

        case 2: {
            if (Object.prototype.toString.call(arr) !== '[object Array]') {
                throw new Error ('arr should be array type');
            }else {
                let len = arr.length;
                if ((typeof startIndex !== 'number')||!(startIndex > 0 && startIndex < len)) {
                    throw new Error('the number type is wrong');
                }else {
                    //main code2
                    arr.splice(startIndex,1);
                    tempResult = arr;

                }

            }
            break;
        }

        case 3: {
            if (Object.prototype.toString.call(arr) !== '[object Array]') {
                throw new Error ('arr should be array type');
            }else {
                let len = arr.length;
                if ((typeof startIndex !== 'number')||(typeof endIndex !== 'number')
                    ||!(startIndex > 0 && startIndex < len) ||!(endIndex > 0 && startIndex < len)
                ||(endIndex < startIndex)) {
                    throw new Error('the number type is wrong');
                }else {
                    //main code3
                    arr.splice(startIndex,(endIndex - startIndex + 1));
                    tempResult = arr;
                }

            }
            break;
        }

    }


    result = function removeZero(arg) {
        let temp = [];
        for (let i = 0;i < arg.length;i++) {
            if (!(arg[i] === 0 && arg[i - 1] === 0)) {
                temp.push(arg[i]);
            }
        }
        
        if (temp.join().startsWith('0')) {
            temp.shift();
        }
        if (temp.join().endsWith('0')) {
            temp.pop();
        }

        return temp

    }(tempResult);

    return result
}

let a = [0, 1, 0, 0, 2, 3, 0, 4, 5, 0, 0, 6, 7, 8, 9, 0, 0];
console.log(a);
console.log(filterFunc(a,1));
console.log(a);
console.log(filterFunc(a,4,7));