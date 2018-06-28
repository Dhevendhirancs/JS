function palindrome(num){
    var num1=num;
    var ans=0,temp;
    while(num1>0){
        temp=num1%10;
        ans=ans*10+temp;
        num1=parseInt(num1/10);
    }
    if(num===ans){
        return 1;
    }else{
        return 0;
    }
}
var i,j,product,ans=0;
for(i=999;i>99;i--){
    for(j=999;j>99;j--){
        product=i*j;
        if(palindrome(product)===1 && product>ans){
            ans=product;
        }   
    }
}
console.log(ans);
