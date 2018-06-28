var sum=0;
var num,first=1,second=2;
var fibo=0;
sum=2;
while(fibo<=4000000){
    fibo=first+second;
    first=second;
    second=fibo;
    if(fibo%2===0){
        sum+=fibo;
    }
}   
console.log(sum);