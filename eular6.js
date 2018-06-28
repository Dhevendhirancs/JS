var i,square=0,sum=0,diff;
for(i=1;i<=10;i++){
    square+=(i*i);
    sum+=i;
}
sum=(sum*sum);
diff=sum-square;
console.log(diff);