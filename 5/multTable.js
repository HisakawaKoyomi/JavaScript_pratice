for(let row = 1;row <= 9;row++){
    let chart = '';
    for(let col = 1;col <= row;col++){
        chart += col.toString(10)+'*'+row.toString(10)+'='+(row*col).toString(10)+' '.repeat(4);
    }
    chart = ' '.repeat((9-row)*4) + chart;
    console.log(chart)
}