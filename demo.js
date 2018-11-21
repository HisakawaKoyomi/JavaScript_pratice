var arr = [];
for(var i = 0 ;i<10;i++){
    var c = i;
    arr[i] = function(){ console.log(c) };
}

arr[5]() // 9