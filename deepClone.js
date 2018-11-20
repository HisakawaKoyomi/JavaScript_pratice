function deepClone(obj){
    var result;
    var obj_type=Object.prototype.toString.call(obj).slice(8,-1);
    if(obj_type==='Object'){
        result={};
    }else if(obj_type==='Array' ){
        result=[];
    }else{
        result=obj;
        return result;
        //如果为Function类型,则跳出，不执行枚举传递的操作。在递归中跳出，返回的值是传给对应的枚举项。
    }

    for(var key in obj){
        var copy=obj[key];
        var key_type=Object.prototype.toString.call(copy).slice(8,-1);
        if(key_type==='Object'){
            result[key]=arguments.callee(copy);
        }else if(key_type==='Array'){
            result[key]=arguments.callee(copy);
        }else{
            result[key]=copy;
        }
    }
    return result;
}

//test
var o=[2,null,[3,6],{a:1,b:2,c:3}];
var o2=deepClone(o);
o2[2].push(5); //验证此为deep clone
console.log(o);
console.log(o2);
