var num;
function prime(num){
    var flag=0;
    for(var i=2;i<=num/2;i++){
        if(num%i===0){
            flag++;
            break;
        }
    }
    if(flag==0){
        return 1;
    }else{
        return 0;
    }
}
for(num=2;num<=600851475143/2;num++){
    if(600851475143%num===0){
        if(prime(num)===1){
            ans=num;
        }
    }
}
console.log(ans)