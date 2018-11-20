var myDate = new Date();
date = myDate.getDay();
if(date === 1){
    console.log('昨天休息，今天要上班');
}else if(date === 2||date === 3||date === 4||date === 5){
    console.log('昨天上班，今天也要上班');
}else if(date === 6){
    console.log('昨天上班，今天休息');
}else{
    console.log('昨天休息，今天也休息');
}