let flag = 0;
let num = 5;

for(i=2;i<num/2;i++){
    if(num%i == 0){
        flag = 1;
        break;
    }
}

if(num==0 | num==1){
    console.log(num+"is neither prime not composite");
}

else if(flag == 1){
    console.log(num+"is a composite number");
}
else{
    console.log(num+"is prime number");
}