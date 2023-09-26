//while loop

// let z = 0;
// while(z>0){
//     console.log(z)
//     z++;
// }

// do while

// let y = 0;
// do{
//     console.log(y);
//     y++;
// }
// while(y>0);

//break statement example

// for(let i=0; i<10; i++){
//     if(i == 10){
//         break;
//     }
//     console.log(i);
// }

// for(let i=0; i<10; i++){
//     if (i == 3){
//         continue;
//     }
//     console.log(i);
// }


//wra a program prime
function isPrime(number) {
    if (number <= 1) {
      return false; 
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false; 
      }
    }
    return true; 
  }
  const numberToCheck = 17; 
  if (isPrime(numberToCheck)) {
    console.log(`${numberToCheck} is prime.`);
  } else {
    console.log(`${numberToCheck} is not prime.`);
  }
  