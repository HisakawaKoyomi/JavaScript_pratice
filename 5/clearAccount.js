let money = 10000;
let year = 0;
while(money > 0){
    //money += money*0.08;
    //money -= 1000;
    //year += 1;
    //以上写法太冗余，应改为
    money = money + money*0.08 - 1000;
    year++;
}
console.log(year);
