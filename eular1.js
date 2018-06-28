var num=1;
var sum=0;
while(num<1000){
    if(num%3===0 || num%5===0){
        sum+=num;
    }
    num++;
}
console.log(sum);