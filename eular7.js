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
function euler7(){
    var count=1,n=1;
    while(count<=10001){
        n++;
        if(prime(n)===1){
            count++;
        }
    }
    console.log(n);
}
