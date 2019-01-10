function cloneRegExp(arg) {
    let flagsMap = {
       'global': 'g',
       'ignoreCase': 'i',
        'multiline': 'm',
        'dotAll': 's',
        'sticky': 'y',
        'unicode': 'u'
    };

    let flag = Object.keys(flagsMap).map(key => (
        arg[key]? flagsMap[key]: ''
    )).join('');

    let result = new RegExp(arg.source,flag);
    result.lastIndex = arg.lastIndex;
    return result
}

//此法最直接，前一个例子是为了理解flag的概念
/*
function cloneRegExp(arg) {
    let result = new RegExp(arg.source,arg.flags);
    result.lastIndex = arg.lastIndex;
    return result
}
*/

let a = /[0-9]/gi;
console.log(cloneRegExp(a));