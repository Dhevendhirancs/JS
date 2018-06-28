var ans=20,i;
while(1){
    for(i=1;i<=20;i++){
        if(ans%i===0){
            flag=0;
        }else{
            flag=1;
            break;
        }
    }
    if(flag===0){
        break;
    }else{
        ans++;
    }
}
console.log(ans);