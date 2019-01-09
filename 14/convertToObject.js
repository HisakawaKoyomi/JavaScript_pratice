function converToObject(str) {
    try {
        return JSON.parse(str)
    }catch (e) {
        console.log('使用JSON.parse异常，尝试使用eval ' + e.message);
        try {
            return eval('('+ str + ')');
        }catch (e) {
            console.log('使用eval异常 ' + e.message);
        }
    }

}

const input = 'a=2;b=3;c=a+b;';
console.log(converToObject(input));